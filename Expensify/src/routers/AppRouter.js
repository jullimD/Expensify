import React from "react";
import { BrowserRouter, Route, Routes, Link, NavLink } from 'react-router-dom';
import AddExpensePage from "../components/AddExpense";
import ExpenseDashboardPage from "../components/Dashboard";
import EditExpensePage from "../components/EditExpense";
import HelpPage from "../components/HelpPage";
import NotFound from "../components/NotFoundPage";
import Header from "../components/Header";


const AppRouter = () => (
<BrowserRouter>
        <div>
            <Header />
            <Routes>
                <Route path='/' element={<ExpenseDashboardPage />} />
                <Route path='/create' element={<AddExpensePage />} />
                <Route path='/edit/:id' element={<EditExpensePage />} />
                <Route path='/help' element={<HelpPage />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </div>
    </BrowserRouter>

);


export default AppRouter;






