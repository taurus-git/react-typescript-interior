import React from 'react';

interface CategoriesFilterProps {
    categories: string[],
    activeCategory: string,
    setCategory: ( category: string ) => void,
    className?: string
}

export const CategoriesFilter: React.FC<CategoriesFilterProps> = (
    { categories, activeCategory, setCategory, className = 'product-filter' }
) => {

    const onClick = ( category: string ) => {
        setCategory( category );
    }

    return (
        <div className={ `${ className }__categories-wrapper` }>
            <ul className={ `${ className }__categories` }>
                { categories.map( category =>
                    <li className={ `${ className }__filter-item ${ activeCategory === category ? 'active' : '' }` }
                        key={ category }
                        onClick={ () => onClick( category ) }>{ category }
                    </li> )
                }
            </ul>
        </div>
    );
}
