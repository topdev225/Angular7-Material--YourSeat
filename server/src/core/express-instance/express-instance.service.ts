import { Injectable } from '@nestjs/common';
import expressInstance from './express-instance';

@Injectable()
export class ExpressInstanceService {
  getInstance() {
    return expressInstance;
  }
}