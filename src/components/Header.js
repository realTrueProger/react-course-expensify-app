import React from 'react';
import { NavLink} from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Expensify app</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Home page</NavLink>
        <NavLink to="/create" activeClassName="is-active">Create expense</NavLink>
    </header>
);

export default Header;