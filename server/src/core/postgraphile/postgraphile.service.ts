import { Injectable } from '@nestjs/common';
import { PostgraphilePlugin } from './postgraphile-plugin.interface';
import { GraphQLSchema, print } from 'graphql';
import * as config from 'config';
import postgraphile from 'postgraphile';
import * as bodyParser from 'body-parser';
import * as express from 'express';
import { makeRemoteExecutableSchema, introspectSchema } from 'graphql-tools';
import fetch from 'node-fetch';
import { get } from 'lodash';
import * as portscanner from 'portscanner';

@Injectable()
export class PostgraphileService {
  plugins: PostgraphilePlugin[] = [];

  private schema: Promise<GraphQLSchema>;

  constructor() {
    this.createInternalServer();
    this.schema = this.getSchemaPromise();
  }

  addPlugin(plugin: PostgraphilePlugin) {
    this.plugins.push(plugin);
  }

  addPlugins(plugins: PostgraphilePlugin[]) {
    plugins.forEach(plugin => this.addPlugin(plugin));
  }

  async getSchema(): Promise<GraphQLSchema> {
    return this.schema;
  }

  private async getSchemaPromise(): Promise<GraphQLSchema> {
    const fetcher = async ({
      query: queryDocument,
      variables,
      operationName,
      context,
    }) => {
      const query = print(queryDocument);
      const fetchResult = await fetch(
        `http://localhost:${config.get('postgraphile.internalPort')}/graphql`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'user-id': get(context, 'graphqlContext.userId', null),
          },
          body: JSON.stringify({ query, variables, operationName }),
        },
      );
      return fetchResult.json();
    };

    try {
      const pgSchema = makeRemoteExecutableSchema({
        schema: await introspectSchema(fetcher),
        fetcher: fetcher,
      });

      return pgSchema;
    } catch (e) {
      console.log(e);
    }
  }

  private createInternalServer() {
    const port = config.get('postgraphile.internalPort') as string;

    const internalApp = express();
    internalApp.use(bodyParser.json());
    internalApp.use(
      postgraphile(process.env.DATABASE_URL, 'public', {
        pgSettings: req => {
          const userId = req.headers['user-id'];
          return Promise.resolve({
            role: 'postgres',
            ...(userId ? { 'jwt.claims.user_id': String(userId) } : {}),
          });
        },
      }),
    );

    internalApp.once('error', function(err) {
      if (err.code === 'EADDRINUSE') {
        console.log(err);
      }
    });

    const server = internalApp.listen(port, () => {
      console.log(
        `postgraphile server listening on port ${config.get(
          'postgraphile.internalPort',
        )}`,
      );
    });

    process.on('SIGTERM', () => {
      console.info('SIGTERM signal received.');
      server.close();
    });
  }
}
