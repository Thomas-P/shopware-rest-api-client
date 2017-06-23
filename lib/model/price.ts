import {CustomerGroup} from "./customer-group";
export class Price {
    id: number;
    customerGroupKey: string; // CustomerGroup
    customerGroup: CustomerGroup;

    articleDetailsId: number; // Detail
    articleId: number; //Article
    from: number | string;
    to: string;
    price: number;
    pseudoPrice: number;
    basePrice: number;
    percent: number;
}