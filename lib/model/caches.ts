/**
 * @see https://developers.shopware.com/developers-guide/rest-api/api-resource-cache/
 */
import {EntryPoint} from "../decorators/entry-point";
@EntryPoint('/caches')
export class Cache {
    dir: string; // The path to this cache directory
    size: string; // Including size unit
    files: number; // Amount of files within the cache directory
    freeSpace: string;	// Free space, including the size unit
    name: string;	// The name of the cache
    backend: string;
    id: string; // The identifier of this cache
}