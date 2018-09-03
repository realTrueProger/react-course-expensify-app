// get visible expenses
import moment from 'moment';

export default (expenses, { text, sort, startDate, endDate }) => {
    // console.log('expenses' , expenses);
    // console.log('filters' , text, sort, startDate, endDate);

    return expenses.filter((expense) => {
        const createdMoment = moment(expense.createdAt);
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdMoment, 'day') : true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdMoment, 'day') : true;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sort === 'date') {
            return a.createdAt > b.createdAt ? 1 : -1;
        }
        if (sort === 'amount') {
            return a.amount > b.amount ? 1 : -1;
        }
    });
};
