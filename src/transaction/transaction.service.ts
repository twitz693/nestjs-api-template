import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {
  Event,
  Transaction,
  TransactionDocument,
  TransactionStatus,
} from './transaction.model';
import { Model } from 'mongoose';

@Injectable()
export class TransactionService {
  constructor(
    @InjectModel(Transaction.name)
    private transactionModel: Model<TransactionDocument>,
  ) {}

  async createTransaction(
    terminal: string,
    pixKey: string,
    value: number,
  ): Promise<Transaction> {
    const transaction = new this.transactionModel({
      pixKey,
      value,
      terminal,
      creationDate: new Date(),
      status: TransactionStatus.CREATED,
    });

    return transaction.save();
  }

  async markTransactionAsFailed(id: string): Promise<void> {
    const transaction = await this.transactionModel.findById(id);

    transaction.status = TransactionStatus.FAILED;
    transaction.events.push(this.createEvent(TransactionStatus.FAILED));

    await transaction.save();
  }

  async confirmTransactionPayment(id: string): Promise<Transaction> {
    const transaction = await this.transactionModel.findById(id);

    transaction.status = TransactionStatus.CONFIRMED;
    transaction.paymentDate = new Date();

    transaction.events.push(this.createEvent(TransactionStatus.CONFIRMED));

    return transaction.save();
  }

  private createEvent(type: TransactionStatus): Event {
    return {
      type,
      timestamp: new Date(),
    };
  }
}
