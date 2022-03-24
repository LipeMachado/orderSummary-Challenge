import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { OrderSummary } from './Components/OrderSummary/';

export default function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<OrderSummary />}/>
        </Routes>
    );
}