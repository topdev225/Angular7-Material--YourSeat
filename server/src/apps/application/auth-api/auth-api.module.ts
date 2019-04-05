import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AuthCoreModule } from 'core/auth-core/auth-core.module';
import { AuthApiResolvers } from './auth-api.resolver';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),    
    AuthCoreModule,
  ],
  providers: [AuthApiResolvers, JwtStrategy],
})
export class AuthApiModule {}
