import { NavItem, SubmenuNav } from "../types/navigationInterfaces";

export function isSubmenu( nav: NavItem | SubmenuNav ): nav is SubmenuNav {
    return (nav as SubmenuNav).submenu !== undefined;
}
