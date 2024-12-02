import React, { useMemo } from 'react';
import { Sizes } from "../../../../constants/constants";

type ColumnSize = 3 | 4 | 6 | 12;

interface ColumnProps {
    children: React.ReactNode;
    [ Sizes.xs ]?: ColumnSize;
    [ Sizes.sm ]?: ColumnSize;
    [ Sizes.md ]?: ColumnSize;
    [ Sizes.lg ]?: ColumnSize;
    [ Sizes.xl ]?: ColumnSize;
    [ Sizes.xxl ]?: ColumnSize;
}

export const Column: React.FC<ColumnProps> = ( props ) => {

    const classNames = useMemo( () => {
            return Object.entries( Sizes )
                .map( ( [ _, sizeKey ] ) => (
                    props[ sizeKey ] ? `col-${ sizeKey }-${ props[ sizeKey ] }` : "")
                )
                .filter( Boolean )
                .join( " " );
        }, [ props ]
    );

    return (
        <div className={ `column ${ classNames }` }>
            { props.children }
        </div>
    );
}
