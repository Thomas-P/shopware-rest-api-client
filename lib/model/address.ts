import {EntryPoint} from "../decorators/entry-point";
/**
 * @see https://developers.shopware.com/developers-guide/rest-api/api-resource-address/
 */
@EntryPoint('/addresses')
export class Address {
    company: string;
    department: string;
    salutation: string;
    firstname: string;
    lastname: string;
    street: string;
    zipcode: string;
    city: string;
    phone: string;
    vatId: string;
    additionalAddressLine1: string;
    additionalAddressLine2: string;
    // @todo Country
    country: number | any;
    // @todo State
    state: number | any;
    // @todo check attr
    attribute: any[]
}
