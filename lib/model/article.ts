import {EntryPoint} from "../decorators/entry-point";
import {ArticleDetail} from "./article-detail";
import {Tax} from "./tax";
import {PropertyValue} from "./property-value";
import {Supplier} from "./supplier";
import {RequiredParameter} from "../decorators/required";
import {PropertyGroup} from "./property-group";
import {CustomerGroup} from "./customer-group";
import {Image} from "./image";
import {Link} from "./link";
import {ConfiguratorSet} from "./configurator-set";
import {Translation} from "./translation";
import {Related} from "./related";
import {Similar} from "./similar";
import {Category} from "./category";
import {Download} from "./download";
import {PostParameter} from "../decorators/post-parameter";


/**
 * @see https://developers.shopware.com/developers-guide/rest-api/api-resource-article/
 */
@EntryPoint('/articles')
export class Article {
    id: number;
    @RequiredParameter('name')
    name: string;
    @RequiredParameter('tax')       // -- tax or tax id
    taxId?: number;                      // Tax
    @RequiredParameter('tax')
    tax?: Tax;
    @RequiredParameter('detail')    // -- mainDetailId or mainDetail
    mainDetailId?: number;               // Detail
    @RequiredParameter('detail')
    mainDetail?: ArticleDetail;
    @RequiredParameter('supplier')
    supplierId?: number;                 // Supplier
    @RequiredParameter('supplier')
    supplier?: Supplier;


    priceGroupId?: number;               // PriceGroup
    filterGroupId?: number;              // ConfiguratorSet
    configuratorSetId?: number;          // ConfiguratorSet

    description?: string;
    descriptionLong?: string;
    // @todo special date
    added?: Date;
    // @todo special date
    changed?: Date;
    // @todo special date
    availableFrom?: Date;
    // @todo special date
    availableTo?: Date;

    active?: boolean;
    highlight?: boolean;
    priceGroupActive?: boolean;
    lastStock?: boolean;
    crossBundleLook?: boolean;
    notification?: boolean;


    pseudoSales?: number;
    keywords?: string;
    metaTitle?: string;
    template?: string;

    mode?: number;
    propertyValue?: PropertyValue;
    @PostParameter
    propertyValues?: PropertyValue[];    // If provided it requires filterGroupId to be set
    propertyGroup?: PropertyGroup;
    customerGroups?: CustomerGroup[];
    images?: Image[];
    configuratorSet?: ConfiguratorSet;
    links?: Link[];
    downloads?: Download[];
    categories?: Category[];
    similar?: Similar[];
    related?: Related[];
    details?: ArticleDetail[];
    translations?: Translation[];
    @PostParameter
    variants?: ArticleDetail[];
}