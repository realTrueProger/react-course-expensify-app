import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesSummary from './ExpensesSummary';

const ExpensifyDashboard = () => (
    <div>
        <h1>Expenses dashboard</h1>
        <ExpenseListFilters />
        <ExpensesSummary />
        <ExpenseList />
    </div>
);

export default ExpensifyDashboard;