import { Module } from '@nestjs/common';
import { TypeormCoreModule } from 'core/typeorm/typeorm-core.module';
import { AuthService } from './services/auth.service';
import { JwtModule } from '@nestjs/jwt';
import * as config from 'config';

@Module({
  imports: [    
    TypeormCoreModule,
    JwtModule.register({
      secretOrPrivateKey: config.get('jwt.secret'),
      signOptions: {
        expiresIn: 864000,
      },
    })
  ],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthCoreModule {
  constructor() {}
}
