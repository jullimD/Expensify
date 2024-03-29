import { createStore } from 'redux'
import { configureStore } from '@reduxjs/toolkit';

// const store = configureStore((state= {reducer:0}) =>{
//     return state;
// });

const incrementCount = ({incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
})


const setCount = (count) => ({
    type: 'SET',
    count
})

const resetCount = () => ({
    type: 'RESET'
})

// Reducers

const countReducer =(state= {count:0},action) =>{
    switch (action.type){
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            }
        case 'SET':
            return {
                count: action.count
            }
        case 'RESET':
            return {
                count: 0
            }
            default:
                return state;
    }
    }

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() =>{
    console.log(store.getState());
})

// // Increment count
// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// }
// );

store.dispatch(incrementCount({incrementBy: 5}))

store.dispatch(incrementCount());

// RESET 
store.dispatch(resetCount());


store.dispatch(decrementCount());

store.dispatch(decrementCount({decrementBy: 50}));



store.dispatch({
    type: 'SET',
    count: 100
})



