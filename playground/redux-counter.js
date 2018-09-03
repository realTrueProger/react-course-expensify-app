import { createStore } from 'redux';

// test redux

console.log('test');

const increment = ({ by = 1 } = {}) => ({
    type: 'INCREMENT',
    by
});

const decrement = ({ by = 1 } = {}) => ({
    type: 'DECREMENT',
    by
});

const reset = () => ({
    type: 'RESET'
});

const set = ({count}) => ({
    type: 'SET',
    count
});

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + action.by };
        case 'DECREMENT':
            return { count: state.count - action.by };
        case 'RESET':
            return { count: 0 };
        case 'SET':
            return { count: action.count };
        default:
            return state;
    }
};

const store = createStore(countReducer);

store.subscribe(() => { console.log(store.getState()) });


//store.dispatch({ type: 'INCREMENT', by: 100 });
store.dispatch(increment({ by: 10 }));
store.dispatch(increment());
store.dispatch(decrement({ by: 1000 }));
store.dispatch(reset());
store.dispatch(set({count: 33}));