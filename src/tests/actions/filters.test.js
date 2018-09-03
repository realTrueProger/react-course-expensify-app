import { setEndDate, setStartDate, setTextFilter, sortByAmount, sortByDate } from '../../actions/filters';
import moment from 'moment';


test('setStartDate action', () => {
    const action = setStartDate(moment(0));

    expect(action).toEqual({
        type: 'SET_START_DATE',
        date: moment(0)
    });
});


test('setEndDate action', () => {
    const action = setEndDate(moment(0));

    expect(action).toEqual({
        type: 'SET_END_DATE',
        date: moment(0)
    });
});


test('sortByDate action', () => {
    const action = sortByDate();

    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    });
});

test('sortByAmount action', () => {
    const action = sortByAmount();

    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    });
});


test('setTextFilter action', () => {
    const action = setTextFilter('test');

    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'test'
    });
});


