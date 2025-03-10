import { useMemo } from "react";
import { ProductCardData } from "../components/ui/ProductCard/ProductCard";

export function useCategories (cards: ProductCardData[]) {
    const categories = useMemo( () => {
        let categories = [ 'All' ];
        let uniqueCategories: string[] = [];
        uniqueCategories = Array.from(
            new Set(
                cards.map( card => card.category )
                    .filter( ( category ): category is string => !!category )
            )
        );

        return categories = categories.concat( uniqueCategories );
    }, [ cards ] );

    return categories;
}
