import React, { StrictMode } from 'react';
import "./styles/global.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Header } from "./components/layout/Header/Header";
import { Main } from "./components/layout/Main/Main";
import { MainProvider } from "./context/MainProvider";

function App() {
    return (
        <StrictMode>
            <MainProvider>
                <Router>
                    <Header/>
                    <Main/>
                    <footer></footer>
                </Router>
            </MainProvider>
        </StrictMode>
    );
}

export default App;
