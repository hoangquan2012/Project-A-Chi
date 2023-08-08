import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import MainLayout from '../layouts/MainLayout';

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
