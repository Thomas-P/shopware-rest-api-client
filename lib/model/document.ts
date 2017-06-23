import {DocumentAttribute} from "./document-attribute";
import {DocumentType} from './document-type';

export class Document {
    id: number;
    // @todo special date
    date: Date;
    typeId: number; // DocumentType
    customerId: number; // Customer
    orderId: number; // Order
    amount: number;
    documentId: number;
    hash: string;
    // @todo DocumentType
    type: DocumentType; // DocumentType
    attribute: DocumentAttribute;
}