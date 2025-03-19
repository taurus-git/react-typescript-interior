import React from 'react';
import { ProductCardData } from "../ProductCard";
import { ResponsiveImage } from "../ResponsiveImage/ResponsiveImage";

type ImageData = Pick<ProductCardData, "src" | "srcset">

interface ProductImageProps {
    data: ImageData,
    className?: string
}

export const ProductImage: React.FC<ProductImageProps> = ( { className = 'product', data } ) => {
    const { src, srcset } = data;

    return (
        <div className={ `${ className }__image` }>
            { src && srcset &&
                <ResponsiveImage src={ src } srcset={ srcset }/>
            }
        </div>
    );
}
