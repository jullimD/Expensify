// // import './utils.js'
// import isSenior, { square, add } from "./utils";
import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from 'react-redux';
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();



store.dispatch(addExpense({description:'Water Bill', amount: 4500}));

store.dispatch(addExpense({description:'Gas Bill', createdAt: 1000}));

store.dispatch(addExpense({description:'Rent', amount: 109500}));



const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

// console.log(store.getState());
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

const appRoot = document.getElementById("app");
const root = createRoot(appRoot);
root.render(jsx);
