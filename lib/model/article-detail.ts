import {ArticleAttribute} from "./article-attribute";

export class ArticleDetail {
    number: string;
    supplierNumber: string;
    additionalText: string;
    weight: string;
    width: string;
    len: string;
    height: string;
    ean: string;
    purchaseUnit: string;
    descriptionLong: string;
    referenceUnit: string;
    packUnit: string;
    shippingTime: string;
    // @todo Prices
    prices: any[];
    // @todo ConfiguratorOptions
    configuratorOptions: any[];
    attribute: ArticleAttribute;

    id: number;
    articleId: number;
    unitId: number;

    kind: number;
    inStock: number;
    position: number;
    minPurchase: number;
    purchaseSteps: number;
    maxPurchase: number;
    // @todo special date object
    releaseDate: Date;
    active: boolean;
    shippingFree: boolean;
    // @todo secret fields
}