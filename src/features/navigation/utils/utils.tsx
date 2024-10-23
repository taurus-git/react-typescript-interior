import { NavItem } from "../types/navigationInterfaces";

export const isExternal = ( item: NavItem ) => {
    return item.path.startsWith("http");
}
