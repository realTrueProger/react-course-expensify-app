export default (expenses) => {
    return expenses.length === 0 ? 0 : expenses.reduce((sum, current) => sum + current.amount, 0 );
}