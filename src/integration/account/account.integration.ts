import { Injectable } from '@nestjs/common';
import { DigitalAccount } from './account.model';

@Injectable()
export class AccountIntegration {
  // TODO: USE AXIOS AND CALL API

  async getTerminalDigitalAccount(terminal: string): Promise<DigitalAccount> {
    return {
      pixKey: '123',
    };
  }
}
