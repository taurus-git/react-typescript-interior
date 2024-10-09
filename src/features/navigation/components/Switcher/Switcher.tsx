import React from 'react';

interface SwitcherProps {
    switcher: string,
    label: string,
}

export const Switcher: React.FC<SwitcherProps> = ( { switcher, label } ) => {
    return (
        <div className={ `${ switcher }-switcher` }>{ label }</div>
    );
}
