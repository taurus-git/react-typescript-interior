import React from 'react';
import "./imageGrid.css";
import { imageGrid } from "../../../pages/HomePage/home.data"
import { Container } from "../../layout/Container/Container";
import { PromoTitle } from "../PromoTitle/PromoTitle";

interface ImageGridProps {
    data: typeof imageGrid
}

export const ImageGrid: React.FC<ImageGridProps> = ( { data } ) => {
    const { className, promo, title } = data;

    return (
        <section className={ `${ className || 'image-grid' } ` }>
            <Container>
                <div className={ `${ className }__promo` }>
                    { promo && title &&
                        <PromoTitle promo={ promo } heading={ { level: 2, children: title } }/>
                    }
                </div>
                <div className={ `${ className }__images-wrapper` }>
                    <div className="masonry">
                        <div className="masonry__col masonry__col--left">
                            <div className="masonry__group">

                                <div className="masonry__item masonry__item--half">
                                    <div className="card">
                                        Office
                                    </div>
                                </div>
                                <div className="masonry__item masonry__item--half">
                                    <div className="card">
                                        Bedroom
                                    </div>
                                </div>

                            </div>

                            <div className="masonry__item masonry__item--full">
                                <div className="card">
                                    Living Room
                                </div>
                            </div>
                        </div>

                        <div className="masonry__col masonry__col--right">
                            <div className="masonry__item masonry__item--full">
                                <div className="card">
                                    Kitchen
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
