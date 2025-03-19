import React, { Suspense } from 'react';
import { Routes, Route } from "react-router-dom";
import { routeNavigation } from "../../../features/navigation/components/Menu/routeNavigation";
import { RouteMenuItem } from "../../../features/navigation/types/navigationInterfaces";

export const Main: React.FC = () => {
    return (
        <Suspense fallback={ <div className="loading">Loading...</div> }>
            <main>
                <Routes>
                    { routeNavigation.map( ( item: RouteMenuItem, index ) => (
                        <Route key={ item.path } path={ item.path } element={ item.element }/>
                    ) ) }
                </Routes>
            </main>
        </Suspense>
    )
};
