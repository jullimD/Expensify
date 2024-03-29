
import { createStore, combineReducers } from "redux";
import { v4 as uuidv4 } from 'uuid'





const expensesReducerDefState = [];

const expensesReducer = (state = [], action) => {
    switch (action.type){
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            return [
                ...state
            ].filter(({id}) => id !== action.id );
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id){
                    return {
                        ...expense,
                        ...action.updates
                    };
                }
                else{
                    return expense;
                };
            });
        default:
            return state;
    }
};


const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
})

const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
})

const sortByDate = () => ({
    type: 'SORT_BY_Date'
})


const setStartDate = (startDate = undefined) => ({
    type: 'SET_START_DATE',
    startDate
})

const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
})
// Filter reducer
const FilterReducerDefState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const filterReducer = (state = FilterReducerDefState, action) => {
    switch (action.type){
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            };
        case 'SORT_BY_AMOUNT':
            return{
                ...state,
                sortBy: 'amount'
            }
        case 'SORT_BY_DATE':
            return{
                ...state,
                sortBy: 'date'
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            }
        default:
            return state;
    }
};

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filterReducer
    })
);


const getVisibleExpenses = (expenses, {text,sortBy,startDate,endDate}) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b) => {
        if (sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1:-1;
        }

        else if (sortBy === 'amount'){
            return a.amount < b.amount ? 1:-1;
        }
    });
};




store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});



store.dispatch(addExpense({description:'Rent', amount: 100, createdAt: -21000}));

store.dispatch(addExpense({description:'Coffee', amount: 300, createdAt:-1000}));




// store.dispatch(removeExpense({id: expenseOne.expense.id}))

// store.dispatch(editExpense(expenseTwo.expense.id, {amount: 600}));

// store.dispatch(setTextFilter('rent'));

store.dispatch(sortByAmount());

// store.dispatch(sortByDate());

// store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1250));


const demoState = {
    expenses: [{
        id: 'indhund',
        description: ' Jan Rent',
        note: 'Final payment',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
}


const user = {
    name: 'Julian',
    age: 24
}

console.log({...user});