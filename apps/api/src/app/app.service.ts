import { Injectable } from '@nestjs/common';
import { Message } from '@museum-of-soldiers/api-interfaces';

@Injectable()
export class AppService {
  getData(): Message {
    return { message: 'Welcome to api!' };
  }
}
