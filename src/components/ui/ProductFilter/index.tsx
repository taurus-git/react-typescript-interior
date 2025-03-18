import React from 'react';
import { ProductFilterData } from "../../../pages/HomePage/home.types";
import { Container } from "../../layout/Container/Container";
import { ProductFilterPromo } from "./ProductFilterPromo";
import { CategoriesFilter } from "./CategoriesFilter";
import { ProductList } from "./ProductList";
import { useFilteredProducts } from "../../../hooks/useFilteredProducts";
import { useCategories } from "../../../hooks/useCategories";
import { useActiveCategory } from "../../../hooks/useAcativeCategory";
import { DEFAULT_FILTER_CATEGORY } from "../../../constants/constants";

interface ProductFilterProps {
    data: ProductFilterData,
}

const ProductFilter: React.FC<ProductFilterProps> = ( { data } ) => {
    const { className, promoText, title, quote, cards } = data;
    const categories = useCategories( cards );
    const { activeCategory, setActiveCategory } = useActiveCategory( DEFAULT_FILTER_CATEGORY );
    const filteredProducts = useFilteredProducts( cards, activeCategory );

    const handleCallback = ( childData: string ) => {
        setActiveCategory( childData );
    }

    return (
        <section className={ `${ className ?? 'product-filter' }` }>
            <Container>
                <div className={ `${ className }__wrapper` }>
                    <ProductFilterPromo data={ { className, promoText, title, quote } }/>
                    <CategoriesFilter
                        categories={ categories }
                        activeCategory={ activeCategory }
                        setCategory={ handleCallback }
                    />
                    <ProductList cards={ filteredProducts }/>
                </div>
            </Container>
        </section>

    );
}

export default ProductFilter;
