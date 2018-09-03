import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';

const ExpensifyDashboard = () => (
    <div>
        <h1>Expenses dashboard</h1>
        <ExpenseListFilters />
        <ExpenseList />
    </div>
);

export default ExpensifyDashboard;