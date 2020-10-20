export interface NavLinkNode {
  name: string;
  url?: string;
  children?: NavLinkNode[];
}
export interface NavLinkNodeFlat {
  expandable: boolean;
  name: string;
  url: string;
  level: number;
}
