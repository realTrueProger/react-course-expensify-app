import selectExpenses from '../../selectors/expenses';
import moment from 'moment';

const expenses = [{
    id: '1',
    description: 'zkh',
    amount: 10000,
    note: 'hate it',
    createdAt: 0
}, {
    id: '2',
    description: 'food',
    amount: 8000,
    note: 'need to eat',
    createdAt: moment(0).add(2, 'days').valueOf()
},{
    id: '3',
    description: 'transport',
    amount: 3000,
    note: 'why the hell everything so expensive..',
    createdAt: moment(0).add(3, 'days').valueOf()
}];


test('should filter by text', () => {
    const filters = {
        text: 'o',
        sort: 'date',
        startDate: undefined,
        endDate: undefined
    };

    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[1], expenses[2]])
});

test('should filter by startDate', () => {
    const filters = {
        text: '',
        sort: 'date',
        startDate: moment(moment(0).add(3, 'days').valueOf()),
        endDate: undefined
    };

    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[2]])
});


test('should filter by endDate', () => {
    const filters = {
        text: '',
        sort: 'date',
        startDate: undefined,
        endDate: moment(moment(moment(0).add(1, 'days').valueOf()))
    };

    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[0]])
});

test('should sort by amount', () => {
    const filters = {
        text: '',
        sort: 'amount',
        startDate: undefined,
        endDate: undefined
    };

    const result = selectExpenses(expenses, filters);
    expect(result).toEqual(expenses.sort((a,b)=> a.amount > b.amount ? 1 : -1))
});

