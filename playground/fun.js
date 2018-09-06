const moment = require('moment');

let expenses = [{
    id: '1',
    description: 'zkh',
    amount: 1,
    note: 'hate it',
    createdAt: 0
}, {
    id: '2',
    description: 'food',
    amount: 2,
    note: 'need to eat',
    createdAt: moment(0).add(2, 'days').valueOf()
}, {
    id: '3',
    description: 'transport',
    amount: 3,
    note: 'why the hell everything so expensive..',
    createdAt: moment(0).add(3, 'days').valueOf()
}];

let sum = expenses.reduce((sum, current) => sum + current.amount, 0 );
console.log(sum);