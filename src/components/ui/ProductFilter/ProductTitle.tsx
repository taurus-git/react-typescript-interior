import React from 'react';
import { ProductCardData } from "../ProductCard";
import { trimText } from "../../../utils/trimText";
import { PRODUCT_TITLE_MAX_LENGTH } from "../../../constants/constants";

interface ProductTitleProps {
    title: ProductCardData['title'],
    className?: string
}

export const ProductTitle: React.FC<ProductTitleProps> = ( { title, className = 'product' } ) => {
    return (
        <div className={ `${ className }__title` }>
            { trimText( title, PRODUCT_TITLE_MAX_LENGTH ) }
        </div>
    );
}
