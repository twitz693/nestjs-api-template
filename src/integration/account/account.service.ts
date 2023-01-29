import { Injectable } from '@nestjs/common';
import { DigitalAccount } from './account.model';
import { AccountIntegration } from './account.integration';

@Injectable()
export class AccountService {
  constructor(private readonly integration: AccountIntegration) {}

  async getTerminalDigitalAccount(terminal: string): Promise<DigitalAccount> {
    return this.integration.getTerminalDigitalAccount(terminal);
  }
}
