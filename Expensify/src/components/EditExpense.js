import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import ExpenseForm from "./ExpenseForm";
import { editExpense } from "../actions/expenses";
import { removeExpense } from "../actions/expenses";
const EditExpensePage = () => {
    // Get the expenses array from the store =>
    const expenses = useSelector(state => state.expenses)
    // Get the id from the params =>
    const { id } = useParams()
    // Let you use navigate method to redirect after submit =>
    const navigate = useNavigate()
    // Give you access to dispatch method
    const dispatch = useDispatch()
 
    // Find the expense that match the id in the params =>
    const expense = expenses.find((expense) => expense.id === id)
 
    return (
        <div>
        <ExpenseForm
            expense={expense}
            onSubmit={(expense) => {
                dispatch(editExpense(id, expense))
                navigate('/')
            }}

        />
        <button onClick={() => {
            dispatch(removeExpense({id}));
            navigate('/')
        }}
        >Remove</button>
        </div>
    )
}

// const mapStateToProps = (state, props) => {
//     let { id } = useParams();
//     return {
//         expense: state.expenses.find((expense) => expense.id === id)
//     };

// };


// export default connect(mapStateToProps)(EditExpensePage);
export default EditExpensePage