import React, { Suspense } from 'react';
import { Routes, Route } from "react-router-dom";
import { routeNavigation } from "../Navigation/routeNavigation";
import { RouteMenuItem } from "../../interface";

export const Main: React.FC = () => {
    return (
        <Suspense fallback={ <div>Loading...</div> }>
            <Routes>
                { routeNavigation.map( ( item: RouteMenuItem, index ) => (
                    <Route key={ item.path } path={ item.path } element={ item.element }/>
                ) ) }
            </Routes>
        </Suspense>
    )
};
