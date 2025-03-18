import React from 'react';

interface ProductCategoryProps {
    category: string
    className?: string
}

export const ProductCategory:React.FC<ProductCategoryProps> = ({category, className = 'product'}) => {
    return (
        <span className={ `${ className }__category` }>
            {category}
        </span>
    );
}
