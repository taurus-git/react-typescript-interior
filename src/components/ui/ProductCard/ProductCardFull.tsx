import React from 'react';
import { ProductLink } from "../ProductFilter/ProductLink";
import { ProductImage } from "../ProductFilter/ProductImage";
import { ProductRate } from "../ProductFilter/ProductRate";
import { ProductTitle } from "../ProductFilter/ProductTitle";
import { ProductPrice } from "../ProductFilter/ProductPrice";
import { ProductDescription } from "../ProductFilter/ProductDescription";
import { CtaLink } from "../Cta/CtaLink";
import { UI_TEXTS } from "../../../constants/constants";
import { ProductCardData } from "./index";

interface ProductCardFullProps {
    data: ProductCardData;
    className?: string;
}

export const ProductCardFull: React.FC<ProductCardFullProps> = ( { data, className } ) => {
    const { link, src, srcset, rate, title, currency, price, oldPrice, description } = data;

    return (
        <div className={ `${ className }__card ${ className }__card--full` }>
            <div className="product__wrapper">
                <div className={ `product__image-wrapper` }>
                    <ProductLink link={ link }>
                        <ProductImage data={ { src, srcset } }/>
                    </ProductLink>
                </div>

                <div className={ `product__info` }>

                    <div className="product__info-wrapper">
                        <ProductLink link={ link }>
                            <ProductTitle title={ title }/>
                        </ProductLink>
                        <ProductPrice data={ { currency, price, oldPrice } }/>
                    </div>
                    { rate &&
                        <ProductRate rate={ rate }/>
                    }
                    { description &&
                        <ProductDescription description={ description } maxLength={ 100 }/>
                    }
                    <CtaLink label={ UI_TEXTS.BUY_NOW } path={ link }/>
                </div>
            </div>
        </div>
    );
}
