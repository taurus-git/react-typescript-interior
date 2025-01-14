import React from 'react';
import './row.css';

interface RowProps {
    children: React.ReactNode;
    className?: string;
}

export const Row: React.FC<RowProps> = ( { children, className } ) => {
    return (
        <div className={ `row ${className ? className : ""}` }>
            { children }
        </div>);
}
