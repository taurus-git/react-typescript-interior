import React, { ReactNode } from 'react';

interface SectionProps {
    children: ReactNode,
}

export const Section: React.FC<SectionProps> = ( { children } ) => {
    return (
        <div className="container">
            { children }
        </div>
    );
}
