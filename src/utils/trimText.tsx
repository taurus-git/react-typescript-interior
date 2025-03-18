import { PRODUCT_DESCRIPTION_MAX_LENGTH } from "../constants/constants";

export const trimText = ( text: string, maxLength: number = PRODUCT_DESCRIPTION_MAX_LENGTH ) => {
    return text.length > maxLength ? text.slice( 0, maxLength ) + "..." : text;
}
