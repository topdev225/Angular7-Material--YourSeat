import { Test, TestingModule } from '@nestjs/testing';
import { ErrorMessagesService } from './error-messages.service';

describe('ErrorMessagesService', () => {
  let service: ErrorMessagesService;
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ErrorMessagesService],
    }).compile();
    service = module.get<ErrorMessagesService>(ErrorMessagesService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
