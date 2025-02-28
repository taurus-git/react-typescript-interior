import { NavItem } from "../types/navigationInterfaces";

export const isExternal = ( item: NavItem ) => {
    return item.path.startsWith( "http" );
}

export const isValidUrl = ( value: string ): boolean => {
    try {
        new URL( value );
        return true;
    } catch ( err ) {
        return false;
    }
}
