export interface NavLinkNode {
    name: string;
    url?: string;
    icon?: string;
    children?: NavLinkNode[];
}
export interface NavLinkNodeFlat {
    expandable: boolean;
    name: string;
    url: string;
    icon: string;
    level: number;
}
