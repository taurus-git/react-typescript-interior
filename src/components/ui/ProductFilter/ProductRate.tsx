import React from 'react';
import { ProductCardData } from "../ProductCard/ProductCard";

interface ProductRateProps {
    rate: ProductCardData['rate'],
    className?: string
}

export const ProductRate:React.FC<ProductRateProps> = ({rate, className}) => {
    return (
        <span className={ `${ className }__rate` }>
            {rate}
        </span>
    );
}
