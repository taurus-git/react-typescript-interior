import React from 'react';
import sprite from "../../assets/images/sprite.svg";

interface IconProps {
    id: string;
    width?: number;
    height?: number;
}

export const Icon: React.FC<IconProps> = ( { id, width = 24, height = 24 } ) => {
    return (
        <svg width={ width } height={ height }>
            <use href={ `${ sprite }#${ id }` }/>
        </svg>
    );
}
