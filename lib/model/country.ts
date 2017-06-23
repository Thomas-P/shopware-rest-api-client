import {State} from "./state";
import {EntryPoint} from "../decorators/entry-point";
/**
 * @see https://developers.shopware.com/developers-guide/rest-api/api-resource-countries/
 */
@EntryPoint('/countries')
export class Country {
    id: number;
    name: string;
    iso: string;
    isoName: string;
    position: number;
    description: string;
    shippingFree: boolean;
    taxFree: boolean;
    taxFreeUstId: boolean;
    taxFreeUstIdChecked: boolean;
    active: boolean;
    iso3: string;
    displayStateInRegistration: boolean;
    forceStateInRegistration: boolean;
    areaId: number; // Area
    states: State[];
}