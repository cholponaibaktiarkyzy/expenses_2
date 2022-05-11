import ExpenseDate from "./ExpenseDate";
import "./ExpensesItem.css";
import Card from "./Card";

const ExpensesItem = props => {
	const { id, date, title, price, deleteItem } = props;
	return (
		<Card className='expense-item'>
			<ExpenseDate date={date} />
			<div className='expense-item__description'>
				<h1>{title}</h1>
			</div>
			<div className='expense-item__price'>${price}</div>
			<button onClick={() => deleteItem(id)}>Remove</button>
		</Card>
	);
};

export default ExpensesItem;
