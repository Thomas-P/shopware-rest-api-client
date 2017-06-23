import {Locale} from "./locale";

export class Shop {
    id: number;
    mainId: number;
    categoryId: number; // Category
    name: string;
    title: string;
    position: number;
    host: string;
    basePath: string;
    baseUrl: string;
    hosts: string;
    secure: boolean;
    alwaysSecure: boolean;
    secureHost: string;
    secureBasePath: string;
    default: boolean;
    active: boolean;
    customerScope: boolean;
    locale: Locale;
}
