import { Controller, Post } from '@nestjs/common';
import { ConfirmationService } from './confirmation.service';

@Controller('confirmations')
export class ConfirmationController {
  constructor(private readonly confirmationService: ConfirmationService) {}

  @Post()
  getHello(): string {
    return this.confirmationService.getHello();
  }
}
