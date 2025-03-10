import React from 'react';
import {ProductFilterData} from "../../../pages/HomePage/home.types"
import { Column } from "../../layout/Grid/Column/Column";
import { PromoTitle } from "../PromoTitle/PromoTitle";
import { Quote } from "../Quote/Quote";
import { Row } from "../../layout/Grid/Row/Row";

type ProductFilterPromoProps =
    Pick<ProductFilterData, "className"| "promoText"| "title"| "quote">;

export const ProductFilterPromo:React.FC<{ data: ProductFilterPromoProps }> = ({data}) => {
    const {className, promoText, title, quote} = data;

    return (
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
    );
}
