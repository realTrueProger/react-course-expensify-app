import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import React from 'react';
import Header from '../components/Header';
import ExpensifyDashboard from '../components/ExpensifyDashboard';
import ExpensifyAdd from '../components/ExpensifyAdd';
import ExpensifyEdit from '../components/ExpensifyEdit';
import ExpensifyHelp from '../components/Expensifyhelp';
import Expensify404 from '../components/Expensify404';



const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExpensifyDashboard} exact={true} />
                <Route path="/create" component={ExpensifyAdd} />
                <Route path="/edit/:id" component={ExpensifyEdit} />
                <Route path="/help" component={ExpensifyHelp} />
                <Route component={Expensify404} />
            </Switch>

        </div>

    </BrowserRouter>
);

export default AppRouter;



//
//redux
//

/////////
// action generators

// store.subscribe(() => {
//     const state = store.getState();
//     const visibleExpenses = getVisibleExpenses(state.expenses, state.filter);

    
//     console.log(visibleExpenses);
// })

// store.dispatch(addExpense({ description: 'coffee', amount: 100, createdAt: 1000 }));
// store.dispatch(addExpense({ description: 'rent', amount: 30000, createdAt: 2000 }));
// store.dispatch(addExpense({ description: 'birthday', amount: 30000, createdAt: 20 }));


//store.dispatch(setStartDate(9000));
// store.dispatch(editExpense(id1.expense.id, {amount: 10000}));
//store.dispatch(setTextFilter('ren'));

//store.dispatch(sortByAmount());
// store.dispatch(sortByDate());


//store.dispatch(setStartDate(1200));
// store.dispatch(setStartDate());

// store.dispatch(setEndDate(1250));
//store.dispatch(setEndDate(1500));


