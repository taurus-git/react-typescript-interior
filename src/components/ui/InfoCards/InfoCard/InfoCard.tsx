import React from 'react';
import "./infoCard.css";
import { Icon } from "../../Icon/Icon";

export interface InfoCardData {
    icon: string,
    title?: string,
    description?: string
}

interface InfoCardProps {
    className: string,
    cardData: InfoCardData
}

export const InfoCard: React.FC<InfoCardProps> = ( { className, cardData } ) => {
    const { icon, title, description } = cardData;

    return (
        <div className={ `${ className }__card` }>
            { icon &&
                <span className={ `${ className }__card-image` }>
                    <Icon id={ icon }/>
                </span>
            }
            { title &&
                <p className={ `${ className }__card-title` }>
                    { title }
                </p>
            }
            { description &&
                <div className={ `${ className }__card-description` }>
                    { description }
                </div>
            }
        </div>
    );
}

