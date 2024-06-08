import React, { StrictMode } from 'react';
import "./styles/global.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";

function App() {
    return (
        <StrictMode>
            <Router>
                <Header/>
                <Main/>
                <footer></footer>
            </Router>
        </StrictMode>
    );
}

export default App;
