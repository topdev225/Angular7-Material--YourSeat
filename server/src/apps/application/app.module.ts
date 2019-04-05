import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthApiModule } from './auth-api/auth-api.module';
import { AuthCoreModule } from 'core/auth-core/auth-core.module';
import { LoggingInterceptor } from 'core/logging.interceptor';
import { PostgraphileModule } from 'core/postgraphile/postgraphile.module';
import { PostgraphileService } from 'core/postgraphile/postgraphile.service';
import { GraphQLSchema } from 'graphql';
import { mergeSchemas } from 'graphql-tools';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as config from 'config';

@Module({
  imports: [
    AuthCoreModule,
    AuthApiModule,
    GraphQLModule.forRootAsync({      
      imports: [PostgraphileModule],
      useFactory: (postgraphileService: PostgraphileService) => {
        return {
          context: ({ req }) => ({ req }),
          typePaths: [__dirname + '/**/*.graphql'],
          installSubscriptionHandlers: true,
          transformSchema: async (localSchema: GraphQLSchema) => {
            const graphileSchema = await postgraphileService.getSchema();

            return mergeSchemas({
              schemas: [localSchema, graphileSchema],
            });
          },
        };
      },
      inject: [PostgraphileService],
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: config.get('database.url'),
      entities: [__dirname + '../../core/model/entities/*.entity{.ts,.js}'],
      synchronize: false,
    })    
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
  ],
})
export class AppModule {
  constructor() {}
}
