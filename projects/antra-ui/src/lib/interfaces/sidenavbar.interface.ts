
/**
 * Interface for customriz tree node
 */
export interface NavLinkNode {
    /** Required tree node name */
    name: string;
    /** Opertional tree node `url`, the root tree node may not have `url` */
    url?: string;
    /** Opertional tree node `icon`, the child tree node may not have `icon` */
    icon?: string;
    /** Let developer can use svg icon by set the useSvgIcon to true */
    useSvgIcon?: boolean;
    /** Opertional children array, the child tree node may not have `children array` */
    children?: NavLinkNode[];
}
/**
 * Iterface for auto generate sidenav tree
 */
export interface NavLinkNodeFlat {
    /** Mark the node is expandable or not */
    expandable: boolean;
    /** Get node `name` from customriz node info */
    name: string;
    /** Get expect `url` from customriz node info */
    url: string;
    /** Get node `icon` from customriz node info */
    icon: string;
    /** Get node `useSvgIcon` from customriz node info */
    useSvgIcon?: boolean;
    /** Mark the node level, use to generate the tree structure */
    level: number;
}
