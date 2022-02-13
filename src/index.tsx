import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./Components/game.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AppProvider from "./Context";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <AppProvider>
                <App />
            </AppProvider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);
