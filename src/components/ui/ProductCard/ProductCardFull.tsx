import React from 'react';
import { ProductLink } from "../ProductFilter/ProductLink";
import { ProductImage } from "../ProductFilter/ProductImage";
import { ProductRate } from "../ProductFilter/ProductRate";
import { ProductTitle } from "../ProductFilter/ProductTitle";
import { ProductPrice } from "../ProductFilter/ProductPrice";
import { ProductCategory } from "../ProductFilter/ProductCategory";
import { ProductDescription } from "../ProductFilter/ProductDescription";
import { CtaLink } from "../Cta/CtaLink";
import { UI_TEXTS } from "../../../constants/constants";
import { ProductCardData } from "./index";

interface ProductCardFullProps {
    data: ProductCardData;
    className?: string;
}

export const ProductCardFull: React.FC<ProductCardFullProps> = ( { data, className } ) => {
    const { link, src, srcset, rate, title, currency, price, oldPrice, category, description } = data;

    return (
        <div className={ `${ className }__product-cart ${ className }__product-cart--full` }>
            <ProductLink link={ link }>
                <ProductImage data={ { src, srcset } }/>
                { rate &&
                    <ProductRate rate={ rate }/>
                }
            </ProductLink>
            <div className={ `product__info` }>
                <ProductLink link={ link }>
                    <ProductTitle title={ title }/>
                    <ProductPrice data={ { currency, price, oldPrice } }/>
                </ProductLink>
                { category &&
                    <ProductCategory category={ category }/>
                }
                { description &&
                    <ProductDescription description={ description }/>
                }

                <CtaLink label={ UI_TEXTS.BUY_NOW } path={ link }/>

            </div>
        </div>
    );
}
