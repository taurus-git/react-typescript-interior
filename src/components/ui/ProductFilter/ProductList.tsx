import React from 'react';
import ProductCard, { ProductCardData } from "../ProductCard";

interface ProductFilterProps {
    cards: ProductCardData[],
    className?: string
}

export const ProductList: React.FC<ProductFilterProps> = ( { cards, className = 'product-list' } ) => {

    return (
        <div className={ `${ className }__products-wrapper` }>
            <div className={ `${ className }__products-grid` }>
                { cards && cards.length > 0 &&
                    <>
                        { cards.map( ( data, index ) => (
                            <ProductCard key={ `${ data.title }` } data={ data }/>
                        ) ) }
                    </>
                }
            </div>
        </div>
    );
}
