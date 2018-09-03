import { addExpense, removeExpense, editExpense} from '../../actions/expenses';


test('should return remove expense action object', () => {
    const action = removeExpense({id : 1});

    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: 1
    });
});

test('should return update expense action object', () => {
    const action = editExpense( 1, {amount : 1});

    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: 1,
        updates: {
            amount: 1
        }
    });
});


test('should return add expense action object', () => {
    const expense = {
        description: 'test',
        amount: 100,
        note: 'test note',
        createdAt: 22
    };
    
    
    const action = addExpense( expense);

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expense,
            id: expect.any(String)
        }
    });
});


test('should return default add expense action object', () => {
    const expenseDefault = {
        description: '',
        amount: 0,
        note: '',
        createdAt: 0
    };
    
    
    const action = addExpense();

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseDefault,
            id: expect.any(String)
        }
    });
});