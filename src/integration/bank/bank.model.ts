export interface GenerateQRCode {
  value: number;
  pixKey: string;
}

export interface QRCodeGenerated {
  requestId: string;
  data: {
    documentValue: number;
    emv: string;
    paymentLink: string;
  };
}

export class PaymentConfirmedEvent {
  sourceId: string;
  amountPaid: number;
  paymentDate: Date; // 2021-01-01T00:00:00.000Z
  payerName: string;
  pixMovementTypeEnum: string; // RECEIVED
}
