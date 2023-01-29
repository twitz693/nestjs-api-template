import { Module } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { PaymentController } from './payment.controller';
import { TransactionModule } from '../transaction/transaction.module';
import { AccountModule } from '../integration/account/account.module';
import { BankModule } from '../integration/bank/bank.module';

@Module({
  imports: [TransactionModule, AccountModule, BankModule],
  controllers: [PaymentController],
  providers: [PaymentService],
})
export class PaymentModule {}
