import { Module } from '@nestjs/common';
import { BankService } from './bank.service';
import { BankIntegration } from './bank.integration';

@Module({
  providers: [BankService, BankIntegration],
  exports: [BankService],
})
export class BankModule {}
