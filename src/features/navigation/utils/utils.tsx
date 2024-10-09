import { NavItem } from "../types/navigationInterfaces";

export const isExternal = ( item: NavItem ) => {
    const path = item.path;
    const protocol = 'http://';
    const protocolSecure = 'https://';

    if ( path.includes( protocol ) || path.includes( protocolSecure ) ) {
        return true;
    }

    return false
}
