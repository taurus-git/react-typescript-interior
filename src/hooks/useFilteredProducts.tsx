import { useCallback, useMemo, useState } from "react";
import { ProductCardData } from "../components/ui/ProductCard/ProductCard";

export function useFilteredProducts( cards: ProductCardData[], defaultCategory = 'All', maxProductsToShow = 6 ) {
    const [ activeCategory, setActiveCategory ] = useState( defaultCategory );
    const dependencies = [
        activeCategory,
        cards,
        defaultCategory,
        maxProductsToShow
    ];

    const sliceProducts = useCallback( ( products: ProductCardData[] ) => {
        if ( products && products.length > 0 ) {
            return products.slice( 0, maxProductsToShow );
        }

        return products;
    }, [ maxProductsToShow ] );

    const filterProducts = useCallback( ( activeCategory: string ) => {
        if ( activeCategory === defaultCategory ) {
            return sliceProducts( cards );
        }

        const result = cards.filter( card => card.category === activeCategory );
        return sliceProducts( result );
    }, [ ...dependencies ] );

    const filteredProducts = useMemo( () => filterProducts( activeCategory ), [ ...dependencies ] );

    return { activeCategory, setActiveCategory, filteredProducts };
}
