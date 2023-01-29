import { Injectable } from '@nestjs/common';
import { GenerateQRCode, QRCodeGenerated } from './bank.model';

@Injectable()
export class BankIntegration {
  async generateQuickResponseCode(
    pixKey: string,
    value: number,
  ): Promise<QRCodeGenerated> {
    const req: GenerateQRCode = {
      value,
      pixKey,
    };

    return {
      requestId: 'some-request',
      data: {
        documentValue: value,
        emv: 'some-emv',
        paymentLink: 'some-link',
      },
    };
  }
}
