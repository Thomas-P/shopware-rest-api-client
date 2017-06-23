export class PaymentData {
    id: number;
    paymentMeanId: number;
    useBillingData: string;
    bankName: string;
    bic: string;
    iban: string;
    accountNumber: string;
    bankCode: string;
    accountHolder: string;
    // @todo special date
    createdAt: Date;
}