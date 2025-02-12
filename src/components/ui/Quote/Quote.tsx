import React from 'react';
import "./quote.css";

interface QuoteProps {
    text: string,
    className?: string
}

export const Quote:React.FC<QuoteProps> = ({text, className = 'quote'}) => {
    return (
        <div className={ `${ className }__text` }>{ text }</div>
    );
}
