import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './app/page';
import LoginPage from "./app/login";
import AuthRoute from './app/auth-route/AuthRoute';


export interface IApplicationProps {}

const Application: React.FunctionComponent<IApplicationProps> = (props) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route 
                    path="/" 
                    element={
                        <AuthRoute>
                            <HomePage />
                        </AuthRoute>
                    } 
                />
                <Route 
                    path="/login" element={<LoginPage />}
                />
            </Routes>
        </BrowserRouter>
    );
};

export default Application;