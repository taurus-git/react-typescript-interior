import React from 'react';

export interface ProductFilterCardData {
    link: string,
    src: string,
    srcset?: {
        src: string,
        media: string | null
    }[],
    title: string,
    description: string,
    price: string,
    rate: number,
    category: string
}

interface ProductFilterCardProps {
    data: ProductFilterCardData
}

export const ProductFilterCard:React.FC<ProductFilterCardProps> = () => {
    return (
        <div>ProductFilterCard</div>
    );
}
