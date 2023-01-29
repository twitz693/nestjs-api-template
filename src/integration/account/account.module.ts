import { Module } from '@nestjs/common';
import { AccountService } from './account.service';
import { AccountIntegration } from './account.integration';

@Module({
  providers: [AccountService, AccountIntegration],
  exports: [AccountService],
})
export class AccountModule {}
