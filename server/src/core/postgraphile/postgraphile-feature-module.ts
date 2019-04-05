import { Inject, Module } from '@nestjs/common';
import { PostgraphilePlugin } from './postgraphile-plugin.interface';
import { PostgraphileService } from './postgraphile.service';

@Module({})
export class PostgraphileFeatureModule {
  constructor(
    private postgraphileService: PostgraphileService,
    @Inject('FEATURE_PLUGINS') featurePlugins: PostgraphilePlugin[],
  ) {
    this.postgraphileService.addPlugins(featurePlugins);
  }
}
