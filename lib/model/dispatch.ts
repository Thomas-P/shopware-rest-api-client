export class Dispatch {
    id: number;
    name: string;
    type: number;
    description: string;
    comment: string;
    active: boolean;
    position: number;
    calculation: number;
    surchargeCalculation: number;
    taxCalculation: number;
    shippingFree: number;
    multiShopId: number;        // Shop
    customerGroupId: number;    // CustomerGroup
    bindShippingFree: number;
    bindTimeFrom: number;
    bindTimeTo: number;
    bindInStock: number;
    bindWeekdayFrom: number;
    bindPriceTo: number;
    bindSql: string;
    statusLink: string;
    calculationSql: string;
}