import React from 'react';
import { ProductCardFull } from "./ProductCardFull";
import { ProductCardDefault } from "./ProductCardDefault";

export interface ProductCardData {
    link: string,
    src: string,
    srcset?: {
        src: string,
        media: string | null
    }[],
    title: string,
    description?: string,
    price: number,
    oldPrice?: number,
    rate?: number,
    category?: string,
    currency: string
}

export type Variant = 'default' | 'full';

interface ProductCardProps {
    data: ProductCardData,
    variant?: Variant,
    className?: string,
}

const ProductCard: React.FC<ProductCardProps> = ( { className = 'product', variant = 'default', data } ) => {
    switch ( variant ) {
        case 'full':
            return <ProductCardFull data={ data } className={ className }/>
        default:
            return <ProductCardDefault data={ data } className={ className }/>;
    }
}

export default ProductCard;
