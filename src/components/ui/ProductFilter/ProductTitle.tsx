import React from 'react';
import { ProductCardData } from "../ProductCard/ProductCard";

interface ProductTitleProps {
    title: ProductCardData['title'],
    className?: string
}

export const ProductTitle: React.FC<ProductTitleProps> = ( { title, className = 'product' } ) => {
    return (
        <div className={ `${ className }__title` }>
            { title }
        </div>
    );
}
