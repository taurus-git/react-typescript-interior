import React from 'react';
import "./productCard.css";
import { ProductCardData } from "./index";
import { ProductLink } from "../ProductFilter/ProductLink";
import { ProductImage } from "../ProductFilter/ProductImage";
import { ProductRate } from "../ProductFilter/ProductRate";
import { ProductTitle } from "../ProductFilter/ProductTitle";
import { ProductPrice } from "../ProductFilter/ProductPrice";
import { ProductCategory } from "../ProductFilter/ProductCategory";

interface ProductCardDefaultProps {
    data: ProductCardData;
    className?: string;
}

export const ProductCardDefault: React.FC<ProductCardDefaultProps> = ( { data, className = 'product' } ) => {
    const { link, src, srcset, title, currency, price, rate, category } = data;

    return (
        <div className={ `${ className }__card ${ className }__card--default` }>
            <div className={ `${ className }__wrapper` }>
                <ProductLink link={ link }>
                    <ProductImage data={ { src, srcset } }/>
                    { rate &&
                        <ProductRate rate={ rate }/>
                    }
                </ProductLink>
                <div className={ `product__info` }>
                    <div className="product__data">
                        <ProductLink link={ link }>
                            <ProductTitle title={ title }/>
                            <ProductPrice data={ { currency, price } }/>
                        </ProductLink>
                    </div>
                    { category &&
                        <ProductCategory category={ category }/>
                    }
                </div>
            </div>
        </div>
    );
}
