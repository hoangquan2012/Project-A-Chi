import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import MainLayout from '../layouts/MainLayout';
import ContentFullWidth from '../layouts/ContentFullWidth';
import Home from '../pages/Home';

export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<ContentFullWidth />}>
                        <Route path="/" element={<Home />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
