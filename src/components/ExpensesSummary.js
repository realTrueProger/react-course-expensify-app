import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import total from '../selectors/expenses-total';

export const ExpensesSummary = (props) => (
    <div>
        {props.expenses.length > 0 &&
            <p>You have {props.expenses.length} expense(s) with total cost ${total(props.expenses)}</p>
        }
    </div>
);

const mapStateToProps = (state) => ({
    expenses: selectExpenses(state.expenses, state.filter)
});

export default connect(mapStateToProps)(ExpensesSummary);