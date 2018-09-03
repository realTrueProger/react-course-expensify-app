import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('should setup default filter state', () => {
    const state = filtersReducer(undefined, { type: '@@INIT'});

    expect(state).toEqual({
        text: '',
        sort: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month'),
    });
});


test('should setup sort by amount filter state', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT'});

    expect(state).toEqual({
        text: '',
        sort: 'amount',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month'),
    });
});


test('should setup text filter for state', () => {
    const state = filtersReducer(undefined, { type: 'SET_TEXT_FILTER', text: 'test'});

    expect(state).toEqual({
        text: 'test',
        sort: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month'),
    });
});