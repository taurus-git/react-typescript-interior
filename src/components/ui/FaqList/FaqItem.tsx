import React from 'react';

export interface FaqItemData {
    id: number,
    question: string,
    answer: string,
}

interface FaqItemProps {
    data: FaqItemData,
    className?: string,
    activeId: number | null,
    setActive: ( id: number ) => void,
}

export const FaqItem: React.FC<FaqItemProps> = ( { data, activeId, setActive, className = 'faq__item' } ) => {
    const { id, question, answer } = data;

    const onClick = ( id: number ) => {
        setActive( id );
    }

    return (
        <div className={ `${ className } ${ activeId === id ? 'active' : '' }` }>
            <button onClick={ () => onClick( id ) }>{ question }</button>
            <p>{ answer }</p>
        </div>
    );
}
