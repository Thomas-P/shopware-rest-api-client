import {EntryPoint} from "../decorators/entry-point";
/**
 * @see https://developers.shopware.com/developers-guide/rest-api/api-resource-media/
 *
 */
@EntryPoint('/media')
export class Media {
    id: number;
    albumId: number;
    name: string;
    description: string;
    path: string;
    type: string;
    extension: string;
    userId: number;
    // @todo special date
    created: Date;
    fileSize: number;
}