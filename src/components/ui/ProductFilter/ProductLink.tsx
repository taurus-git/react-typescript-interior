import React from 'react';
import { ProductCardData } from "../ProductCard/ProductCard";

interface ProductLinkProps {
    link: ProductCardData['link'],
    children: React.ReactNode
    className?: string,
}

export const ProductLink:React.FC<ProductLinkProps> = ({link, children, className = 'product'}) => {

    return (
        <a href={link} className={ `${ className }__link` }>
            {children}
        </a>
    );
}
