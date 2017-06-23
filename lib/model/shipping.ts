import {ShippingAttribute} from "./shipping-attribute";
export class Shipping {
    id: number;
    customerId: number; // Customer
    countryId: number; // Country
    stateId: number; // State
    company: string;
    department: string;
    salutation: string;
    number: string;
    firstName: string;
    lastName: string;
    street: string;
    zipCode: string;
    city: string;
    attribute: ShippingAttribute;
}