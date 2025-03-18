import React from 'react';
import { ProductCardData } from "./index";

interface ProductCardDefaultProps {
    data: ProductCardData;
    className?: string;
}

export const ProductCardDefault: React.FC<ProductCardDefaultProps> = ( { data, className = 'product' } ) => {
    const { link, src, srcset, title, price, rate } = data;

    return (
        <div className={ `${ className }__product-cart ${ className }__product-cart--default` }>
            { title }
        </div>
    );
}
