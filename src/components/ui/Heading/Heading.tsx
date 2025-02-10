import React from 'react';

interface HeadingProps {
    children:  React.ReactNode;
    level?: 1 | 2 | 3 | 4 | 5 | 6;
    className?: string;
}

export const Heading: React.FC<HeadingProps> = ( props, { level = 1, className } ) => {
    const Tag = `h${ level }` as keyof React.JSX.IntrinsicElements;

    return <Tag className={ className }>{ props.children }</Tag>;
}
