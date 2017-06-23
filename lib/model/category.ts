import {ArticleAttribute} from "./article-attribute";
import {CustomerGroup} from "./customer-group";
import {Media} from "./media";
export class Category {
    id: number;
    name: string;
    parentId: number| Category; // Category
    streamId: number;
    position: number;
    metaTitle: string;
    metaKeywords: string;
    metaDescription: string;
    cmsHeadline: string;
    cmsText: string;
    active: boolean;
    template: string;
    productBoxLayout: string;
    blog: boolean;
    path: string;
    showFilterGroups: boolean;
    external: boolean;
    hideFilter: boolean;
    hideTop: boolean;
    // @todo special date
    changed: Date;
    added: Date;
    mediaId: number; // Media
    attribute: ArticleAttribute[];
    emotions: Media[];
    media: Media;
    customerGroups: CustomerGroup[];
    childrenCount: number;
    articleCount: number;
}
