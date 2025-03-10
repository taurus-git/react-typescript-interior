import React from 'react';
import { ProductCardData } from "../ProductCard/ProductCard";
import { ResponsiveImage } from "../ResponsiveImage/ResponsiveImage";

type ImageData = Pick<ProductCardData, "src" | "srcset">

interface ProductImageProps {
    data: ImageData,
    className?: string
}

export const ProductImage: React.FC<ProductImageProps> = ( { className, data } ) => {
    const { src, srcset } = data;

    return (
        <div className={ `${ className }__product-wrapper` }>
            { src && srcset &&
                <ResponsiveImage src={ src } srcset={ srcset }/>
            }
        </div>
    );
}
