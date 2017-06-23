import {BillingAttribute} from "./billing-attribute";
export class Billing {
    id: number;
    customerId: number;
    countryId: number;
    stateId: number;
    company: string;
    department: string;
    salutation: string;
    number: string;
    firstName: string;
    lastName: string;
    street: string;
    zipCode: string;
    city: string;
    phone: string;
    fax: string;
    vatId: string;
    // @todo special Date
    birthday: Date;
    attribute: BillingAttribute;
}