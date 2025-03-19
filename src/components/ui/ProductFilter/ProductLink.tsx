import React from 'react';
import { ProductCardData } from "../ProductCard";

interface ProductLinkProps {
    link: ProductCardData['link'],
    children: React.ReactNode
    className?: string,
    title?: string
}

export const ProductLink: React.FC<ProductLinkProps> = ( { link, children, className = 'product', title } ) => {

    return (
        <a { ...(title ? { title } : {}) } href={ link } className={ `${ className }__link` }>
            { children }
        </a>
    );
}
