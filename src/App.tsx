import React, { StrictMode } from 'react';
import "./styles/global.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Header } from "./components/layout/Header/Header";
import { Main } from "./components/layout/Main/Main";
import { Footer } from "./components/layout/Footer/Footer";
import { MainProvider } from "./context/MainProvider";

function App() {
    return (
        <MainProvider>
            <Router>
                <Header/>
                <Main/>
                <Footer/>
            </Router>
        </MainProvider>
    );
}

export default App;
