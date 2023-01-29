import { Injectable } from '@nestjs/common';
import { TransactionService } from '../transaction/transaction.service';
import { AccountService } from '../integration/account/account.service';
import { BankService } from '../integration/bank/bank.service';

@Injectable()
export class PaymentService {
  constructor(
    private readonly accountService: AccountService,
    private readonly bankService: BankService,
    private readonly transactionService: TransactionService,
  ) {}

  async generateQuickResponsePayment(terminal: string, value: number) {
    const terminalAccount = await this.accountService.getTerminalDigitalAccount(
      terminal,
    );

    const transaction = await this.transactionService.createTransaction(
      terminal,
      terminalAccount.pixKey,
      value,
    );

    const qrCode = await this.bankService.generateQRCode(
      transaction.pixKey,
      transaction.value,
    );

    // TODO: validate responses and check if transaction was confirmed or failed

    return qrCode;
  }
}
