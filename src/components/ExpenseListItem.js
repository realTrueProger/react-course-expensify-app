import React from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';


const ExpensesListItem = ( { description, amount, createdAt , id}) => (
    <div>
        <h2>Description: {description}</h2>
        <Link to={`/edit/${id}`}>edit</Link>
        <p>Amount: {amount} CreatedAt: {moment(createdAt).format('MMMM Do YYYY')}</p>
    </div>
);


export default ExpensesListItem;