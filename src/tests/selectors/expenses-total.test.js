import expensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';



test('should be 0' , () => {
    let sum = expensesTotal([]);
    expect(sum).toBe(0);
});

test('should add multiple and be 21000' , () => {
    let sum = expensesTotal(expenses);
    expect(sum).toBe(21000);
});

test('should add single and be 10000' , () => {
    let sum = expensesTotal([expenses[0]]);
    expect(sum).toBe(10000);
});


