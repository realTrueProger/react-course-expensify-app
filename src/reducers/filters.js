// filter reducer

import moment from 'moment';

const filterDefaultState = {
    text: '',
    sort: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month'),
}

export default (state = filterDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            };
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sort: 'amount'
            };
        case 'SORT_BY_DATE':
            return {
                ...state,
                sort: 'date'
            };
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.date
            };
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.date
            };
        default:
            return state;
    }
};