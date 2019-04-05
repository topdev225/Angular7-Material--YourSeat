import { Module, Provider, Type } from '@nestjs/common';
import * as config from 'config';
import * as jwt from 'express-jwt';
import { ExpressInstanceService } from './../express-instance/express-instance.service';
import { PostgraphilePlugin } from './postgraphile-plugin.interface';
import { PostgraphileService } from './postgraphile.service';
import { FEATURE_PLUGINS_TOKEN } from './tokens';

@Module({
  imports: [],
  providers: [PostgraphileService],
  exports: [PostgraphileService],
})
export class PostgraphileModule {
  static generateProviders(
    pluginTypes: Type<PostgraphilePlugin>[],
  ): Provider[] {
    return [
      ...pluginTypes,
      {
        provide: FEATURE_PLUGINS_TOKEN,
        useFactory: (...instances: any[]) => instances,
        inject: pluginTypes,
      },
    ];
  }

  constructor(
    // private expressInstanceService: ExpressInstanceService,
  ) {
    // const expressInstance = this.expressInstanceService.getInstance();
    // expressInstance.use(
    //   '/graphql',
    //   jwt({
    //     secret: config.get('jwt.secret'),
    //     requestProperty: 'tokenPayload',
    //     credentialsRequired: false,
    //   }),
    // );
  }

  configure() {
    // const expressInstance = this.expressInstanceService.getInstance();

    // expressInstance.use(
    //   postgraphile(config.get('database.url'), 'public', {
    //     graphiql: true,
    //     watchPg: true,
    //     appendPlugins: this.postgraphileService.plugins.map(plugin =>
    //       plugin.getPluginFunction(),
    //     ),
    //     additionalGraphQLContextFromRequest: (req: any) => {
    //       return req.context;
    //     }
    //   }),
    // );
  }
}
