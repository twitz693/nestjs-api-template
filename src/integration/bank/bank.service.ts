import { Injectable } from '@nestjs/common';
import { BankIntegration } from './bank.integration';

@Injectable()
export class BankService {
  constructor(private readonly integration: BankIntegration) {}

  async generateQRCode(pixKey: string, value: number): Promise<string> {
    const res = await this.integration.generateQuickResponseCode(pixKey, value);

    return res.data.emv;
  }
}
