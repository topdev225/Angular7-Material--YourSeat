import { Args, Query, Resolver, Mutation, Context } from '@nestjs/graphql';
import { AuthService } from 'core/auth-core/services/auth.service';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'core/auth-core/services/gql-auth.guard';

@Resolver('Auth')
export class AuthApiResolvers {
  constructor(private authService: AuthService) {}

  @Query()
  async login(
    @Args('username') username: string,
    @Args('password') password: string,    
  ) {    
    return this.authService.login(username, password);
  }

  @Mutation()
  @UseGuards(new GqlAuthGuard())
  async setPassword(
    @Context('req') req,
    @Args('password') password: string
  ) {
    await this.authService.setPassword(req.user.id, password);
    return true;
  }
}
