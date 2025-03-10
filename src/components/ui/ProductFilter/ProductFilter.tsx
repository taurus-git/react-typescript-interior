import React from 'react';
import { ProductFilterData } from "../../../pages/HomePage/home.types";
import { Container } from "../../layout/Container/Container";
import { ProductCard } from "../ProductCard/ProductCard";
import { ProductFilterPromo } from "./ProductFilterPromo";
import { useCategories } from "../../../hooks/useCategories";
import { useFilteredProducts } from "../../../hooks/useFilteredProducts";
import { ProductImage } from "./ProductImage";
import { ProductLink } from "./ProductLink";
import { ProductRate } from "./ProductRate";
import { PromoTitle } from "../PromoTitle/PromoTitle";
import { ProductTitle } from "./ProductTitle";

interface ProductFilterProps {
    data: ProductFilterData
}

export const ProductFilter: React.FC<ProductFilterProps> = ( { data } ) => {
    /*{
         console.log( data )
    }*/

    const { className, promoText, title, quote, cards } = data;
    const categories = useCategories( cards );
    const { activeCategory, setActiveCategory, filteredProducts } = useFilteredProducts( cards );
    console.log( filteredProducts );

    return (
        <section className={ `${ className ?? 'product-filter' }` }>
            <Container>
                <div className={ `${ className }__wrapper` }>

                    <ProductFilterPromo data={ { className, promoText, title, quote } }/>

                    <div className={ `${ className }__categories-wrapper` }>
                        <ul className={ `${ className }__categories` }>
                            { categories.map( category =>
                                <li className={ `${ className }__filter-item ${ activeCategory === category ? 'active' : '' }` }
                                    key={ category }
                                    onClick={ () => setActiveCategory( category ) }>{ category }
                                </li> )
                            }
                        </ul>
                    </div>

                    <div className={ `${ className }__product-wrapper` }>
                        <div className={ `${ className }__product-grid` }>
                            { filteredProducts && filteredProducts.length > 0 &&
                                <>
                                    { filteredProducts.map( ( product ) => (
                                        <ProductCard key={ `${ product.title }` }>
                                            <ProductLink link={ product.link }>
                                                <ProductImage data={ product }/>
                                                { product.rate &&
                                                    <ProductRate rate={ product.rate }/>
                                                }
                                            </ProductLink>
                                            <div className={ `product__info` }>
                                                <ProductLink link={ product.link }>
                                                    <ProductTitle title={product.title}/>
                                                    {/*ProductPrice*/}
                                                </ProductLink>
                                                {/*ProductCategory*/}
                                            </div>
                                        </ProductCard>
                                    ) ) }
                                </>
                            }
                        </div>
                    </div>

                </div>
            </Container>
        </section>
    );
}
