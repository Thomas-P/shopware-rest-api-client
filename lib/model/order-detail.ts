import {OrderDetailAttribute} from "./order-detail-attribute";
export class OrderDetail {
    id: number;
    orderId: string; // Order
    articleId: number; // Article
    taxId: number; // Tax
    taxRate: number;
    statusId: number; // Status
    number: string; // Order
    articleNumber: string; // ArticleDetail
    price: number;
    quantity: number;
    articleName: string;
    shipped: boolean;
    shippedGroup: number;
    // @todo Date special
    releaseDate: Date;
    mode: number;
    esdArticle: number;
    config: string;
    ean: string;
    unit: string;
    packUnit: string;
    attribute: OrderDetailAttribute;
}