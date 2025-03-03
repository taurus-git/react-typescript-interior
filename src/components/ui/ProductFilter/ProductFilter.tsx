import React from 'react';
import { ProductFilterData } from "../../../pages/HomePage/home.types";
import { Container } from "../../layout/Container/Container";
import { Row } from "../../layout/Grid/Row/Row"
import { PromoTitle } from "../PromoTitle/PromoTitle";
import { Column } from "../../layout/Grid/Column/Column";
import { Quote } from "../Quote/Quote";

interface ProductFilterProps {
    data: ProductFilterData
}

export const ProductFilter: React.FC<ProductFilterProps> = ( { data } ) => {
    {
        /* console.log( data )*/
    }

    const { className, promoText, title, quote, cards } = data;

    let categories = [ 'All' ];
    const uniqueCategories = Array.from( new Set( cards.map( card => card.category ) ) );
    categories = categories.concat(uniqueCategories);

    console.log(categories);

    return (
        <section className={ `${ className ?? 'product-filter' }` }>
            <Container>
                <div className={ `${ className }__wrapper` }>
                    <Row className={ `${ className }__text-wrapper` }>
                        { promoText && title &&
                            <Column xs={ 12 } md={ 6 }>
                                <PromoTitle promo={ promoText } heading={ { level: 2, children: title } }/>
                            </Column>
                        }
                        { quote &&
                            <Column xs={ 12 } md={ 6 }>
                                <Quote text={ quote }/>
                            </Column>
                        }
                    </Row>
                </div>


                <div>Filter</div>

                <div>Products grid</div>

            </Container>
        </section>
    );
}
