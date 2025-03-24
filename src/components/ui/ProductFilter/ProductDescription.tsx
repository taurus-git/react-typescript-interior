import React from 'react';
import { trimText } from "../../../utils/trimText";

interface ProductDescriptionProps {
    description: string,
    className?: string,
    maxLength?: number,
}

export const ProductDescription: React.FC<ProductDescriptionProps> = ( { description, className = 'product', maxLength } ) => {
    return (
        <div className={ `${ className }__description` }>
            { trimText( description, maxLength ) }
        </div>
    );
}

