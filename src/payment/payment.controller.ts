import { Controller, Get, Post } from '@nestjs/common';
import { PaymentService } from './payment.service';

@Controller('payments')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Post('transaction')
  async generateQrCode(terminal: string, value: number): Promise<string> {
    return this.paymentService.generateQuickResponsePayment(terminal, value);
  }

  @Get('transactions/transaction')
  async getTransactions(): Promise<string> {
    return 'hello world';
  }
}
