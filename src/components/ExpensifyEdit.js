import React from 'react';
import { connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense} from '../actions/expenses';

const ExpensifyEdit = (props) => (
    <div>
        <ExpenseForm 
            expense={props.expense}
            onSubmit={(expense) => {
                props.dispatch(editExpense(props.expense.id, expense));
                props.history.push('/');
            }}
        />
        <button onClick={() => {
            props.dispatch(removeExpense( {id : props.expense.id}));
            props.history.push('/');
        }}>remove</button>
    </div>
);

const mapStateTOProps = (state, props) => ({
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
});



export default connect(mapStateTOProps)(ExpensifyEdit);