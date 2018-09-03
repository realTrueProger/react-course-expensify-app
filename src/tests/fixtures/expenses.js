import moment from 'moment';

export default [{
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