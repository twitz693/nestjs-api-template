import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PaymentModule } from './payment/payment.module';
import { ConfirmationModule } from './confirmation/confirmation.module';
import { ConfigModule } from '@nestjs/config';
import appConfig from './infrastructure/configuration/configuration';
import dbConfig from './infrastructure/configuration/database.config';
import { LoggerModule } from './infrastructure/logger/logger.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtGuard } from './infrastructure/security/jwt.guard';
import { AuthModule } from './infrastructure/security/auth.module';

@Module({
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtGuard,
    },
  ],
  imports: [
    ConfigModule.forRoot(appConfig),
    MongooseModule.forRootAsync(dbConfig),
    AuthModule,
    PaymentModule,
    ConfirmationModule,
    LoggerModule,
  ],
})
export class AppModule {}
