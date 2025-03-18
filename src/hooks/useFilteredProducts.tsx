import { useCallback, useMemo } from "react";
import { ProductCardData } from "../components/ui/ProductCard";
import { DEFAULT_FILTER_CATEGORY } from "../constants/constants";

export function useFilteredProducts( cards: ProductCardData[], activeCategory: string, maxProductsToShow = 6 ) {
    const sliceProducts = useCallback( ( products: ProductCardData[] ) => {
        if ( products && products.length > 0 ) {
            return products.slice( 0, maxProductsToShow );
        }

        return products;
    }, [ maxProductsToShow ] );

    const filterProducts = useCallback( () => {
        if ( activeCategory === DEFAULT_FILTER_CATEGORY ) {
            return sliceProducts( cards );
        }

        const result = cards.filter( card => card.category === activeCategory );
        return sliceProducts( result );
    }, [ activeCategory, cards, maxProductsToShow, DEFAULT_FILTER_CATEGORY ] );

    const filteredProducts = useMemo( () => filterProducts(), [ filterProducts ] );

    return filteredProducts;
}
