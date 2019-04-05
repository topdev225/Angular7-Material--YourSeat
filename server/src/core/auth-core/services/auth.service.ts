import { JwtService } from '@nestjs/jwt';
import { Injectable, Inject, UnauthorizedException } from '@nestjs/common';
import { Connection, Repository } from 'typeorm';
import { User } from '../../../core/model/entities/user.entity';
import { DB_CONNECTION_TOKEN } from '../../../core/typeorm/constants';
import * as bcrypt from 'bcrypt-nodejs';
import { JwtPayload } from '../model/jwt-payload.interface';

@Injectable()
export class AuthService {
  userRepository: Repository<User>;

  constructor(
    @Inject(DB_CONNECTION_TOKEN) private dbConnection: Connection,
    private readonly jwtService: JwtService,
  ) {
    this.userRepository = this.dbConnection.getRepository(User);
  }

  async login(username: string, password: string): Promise<string> {
    const user = await this.getUser(username);

    if (!bcrypt.compareSync(password, user.password)) {
      throw new Error('Unauthorized');
    }

    return this.createJwt(user);
  }

  private async getUser(username: string): Promise<User> {
    const user = await this.userRepository.findOne({ username });

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }

  private createJwt(user: User): string {
    return this.jwtService.sign({
      id: user.id,
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    });
  }

  async validateUser(payload: JwtPayload): Promise<User> {
    const user = await this.userRepository.findOne({ id: payload.id });

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }

  async setPassword(userId: string, password: string): Promise<void> {
    await this.userRepository.update(
      { id: userId },
      { password: bcrypt.hashSync(password) },
    );    
  }
}
