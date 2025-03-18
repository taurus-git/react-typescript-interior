import { useState } from "react";

export function useActiveCategory( defaultCategory: string ) {
    const [ activeCategory, setActiveCategory ] = useState( defaultCategory );
    return { activeCategory, setActiveCategory };
}
