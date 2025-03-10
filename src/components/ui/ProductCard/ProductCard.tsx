import React from 'react';

export interface ProductCardData {
    link: string,
    src: string,
    srcset?: {
        src: string,
        media: string | null
    }[],
    title: string,
    description?: string,
    price: string,
    oldPrice?: string,
    rate?: number,
    category?: string
}

interface ProductCardProps {
    children: React.ReactNode,
    className?: string,
}

export const ProductCard: React.FC<ProductCardProps> = ( { className = 'product', children } ) => {
    return (
        <div className={ `${ className }__card` }>
            { children }
        </div>
    );
}
