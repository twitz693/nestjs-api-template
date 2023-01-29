import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema()
export class Transaction {
  @Prop({
    required: true,
  })
  pixKey: string;

  @Prop({
    required: true,
  })
  value: number;

  @Prop()
  terminal: string;

  @Prop()
  creationDate: Date;

  @Prop()
  paymentDate: Date;

  @Prop()
  status: TransactionStatus;

  @Prop()
  events: Event[];
}

export interface Event {
  type: TransactionStatus;
  timestamp: Date;
}

export enum TransactionStatus {
  CREATED = 'created',
  CONFIRMED = 'confirmed',
  FAILED = 'failed',
}

export type TransactionDocument = HydratedDocument<Transaction>;
export const TransactionSchema = SchemaFactory.createForClass(Transaction);
