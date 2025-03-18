import React from 'react';
import { trimText } from "../../../utils/trimText";

interface ProductDescriptionProps {
    description: string
    className?: string
}

export const ProductDescription: React.FC<ProductDescriptionProps> = ( { description, className = 'product' } ) => {
    return (
        <div className={ `${ className }__description` }>
            { trimText( description ) }
        </div>
    );
}

