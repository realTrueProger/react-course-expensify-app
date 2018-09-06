import React from 'react';
import {shallow} from 'enzyme';
import { ExpensesSummary} from '../../components/ExpensesSummary';
import fixtures from '../fixtures/expenses';

test('should render 3 expenses total with $21000' , () => {
    const wrapper = shallow(<ExpensesSummary expenses={fixtures} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render 1 expense total with $10000' , () => {
    const wrapper = shallow(<ExpensesSummary expenses={[fixtures[0]]} />);
    expect(wrapper).toMatchSnapshot();
});