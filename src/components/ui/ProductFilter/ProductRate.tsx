import React from 'react';
import { ProductCardData } from "../ProductCard";
import { Icon } from "../Icon/Icon";

interface ProductRateProps {
    rate: ProductCardData['rate'],
    className?: string
}

export const ProductRate:React.FC<ProductRateProps> = ({rate, className = 'product'}) => {
    return (
        <span className={ `${ className }__rate` }>
            <Icon id={'star'}/>
            {rate}
        </span>
    );
}
