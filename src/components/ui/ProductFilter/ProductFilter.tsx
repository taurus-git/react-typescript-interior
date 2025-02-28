import React from 'react';
import {productFilter} from "../../../pages/HomePage/home.data";

interface ProductFilterProps {
    data: typeof productFilter
}

export const ProductFilter: React.FC<ProductFilterProps> = ({data}) => {
    return (
        <div>ProductFilter</div>
    );
}
