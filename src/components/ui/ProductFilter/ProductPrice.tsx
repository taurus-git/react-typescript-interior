import React from 'react';
import { ProductCardData } from "../ProductCard";
import { CurrencySymbols } from "../../../constants/constants"

type PriceData = Pick<ProductCardData, "price" | "oldPrice" | "currency">;

interface ProductPriceProps {
    data: PriceData,
    className?: string,
    showOldPrice?: boolean
}

export const ProductPrice: React.FC<ProductPriceProps> = ( { data, className = 'product', showOldPrice = 'true' } ) => {
    const currencySymbol = CurrencySymbols[ data.currency ] || data.currency;

    return (
        <div className={ `${ className }__price-wrapper` }>
            <span className="product__price">{ currencySymbol }{ data.price.toFixed(2) }</span>
            { showOldPrice && data.oldPrice &&
                <span className="product__price-old">{ currencySymbol }{ data.oldPrice.toFixed(2) }</span>
            }
        </div>
    );
}

