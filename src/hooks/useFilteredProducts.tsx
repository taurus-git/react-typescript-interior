import { useCallback, useMemo } from "react";
import { ProductCardData } from "../components/ui/ProductCard";
import { UI_TEXTS } from "../constants/constants";

export function useFilteredProducts( cards: ProductCardData[], activeCategory: string, maxProductsToShow = 6 ) {
    const sliceProducts = useCallback( ( products: ProductCardData[] ) => {
        if ( products && products.length > 0 ) {
            return products.slice( 0, maxProductsToShow );
        }

        return products;
    }, [ maxProductsToShow ] );

    const filterProducts = useCallback( () => {
        if ( activeCategory !== UI_TEXTS.DEFAULT_FILTER_CATEGORY ) {
            const result = cards.filter( card => card.category === activeCategory );
            return sliceProducts( result );
        }

        return sliceProducts( cards );
    }, [ activeCategory, cards, maxProductsToShow, UI_TEXTS.DEFAULT_FILTER_CATEGORY ] );

    const filteredProducts = useMemo( () => filterProducts(), [ filterProducts ] );

    return filteredProducts;
}
