import React from 'react';
import {Link} from 'react-router-dom';


const ExpensesListItem = ( { description, amount, createdAt , id}) => (
    <div>
        <h2>Description: {description}</h2>
        <Link to={`/edit/${id}`}>edit</Link>
        <p>Amount: {amount} CreatedAt: {createdAt}</p>
    </div>
);


export default ExpensesListItem;