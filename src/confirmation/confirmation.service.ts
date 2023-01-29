import { Injectable } from '@nestjs/common';

@Injectable()
export class ConfirmationService {
  getHello(): string {
    return 'Hello World!';
  }
}
