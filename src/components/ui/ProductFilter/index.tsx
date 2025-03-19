import React from 'react';
import "./product-filter.css";
import { ProductFilterData } from "../../../pages/HomePage/home.types";
import { Container } from "../../layout/Container/Container";
import { ProductFilterPromo } from "./ProductFilterPromo";
import { CategoriesFilter } from "./CategoriesFilter";
import { ProductList } from "./ProductList";
import { useFilteredProducts } from "../../../hooks/useFilteredProducts";
import { useCategories } from "../../../hooks/useCategories";
import { useActiveCategory } from "../../../hooks/useAcativeCategory";
import { UI_TEXTS } from "../../../constants/constants";
import { CtaLink } from "../Cta/CtaLink";

interface ProductFilterProps {
    data: ProductFilterData,
}

const ProductFilter: React.FC<ProductFilterProps> = ( { data } ) => {
    const { className, promoText, title, quote, cards } = data;
    const categories = useCategories( cards );
    const { activeCategory, setActiveCategory } = useActiveCategory( UI_TEXTS.DEFAULT_FILTER_CATEGORY );
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
                    <div className="cta__wrapper">
                        <CtaLink label={ UI_TEXTS.VIEW_ALL_COLLECTIONS } path={ `/${ activeCategory.toLowerCase() }` }/>
                    </div>
                </div>
            </Container>
        </section>

    );
}

export default ProductFilter;
