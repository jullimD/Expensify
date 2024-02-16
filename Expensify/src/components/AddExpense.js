import React from "react";
import { useNavigate } from "react-router-dom";
import { addExpense } from "../actions/expenses";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";



const AddExpensePage = (props) => {
    const navigate = useNavigate();
    return (
    <div>
        <h1>Add Expense</h1>
        <ExpenseForm onSubmit={(expense => {
            props.dispatch(addExpense(expense));
            navigate('/')
        })}/>
    </div>
)};


export default connect()(AddExpensePage);