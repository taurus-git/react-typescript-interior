import React from "react";

interface ExternalNavItemProps {
    path: string,
    className?: string,
    children?: React.ReactNode,
}

export const ExternalLink: React.FC<ExternalNavItemProps> = ( { path, children, className } ) => {
    return (
        <a href={ path } target="_blank" rel="noopener noreferrer" className={ className }>
            { children }
        </a>
    )
}
