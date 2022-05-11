import { useState } from "react";
import "./NewExpense.css";

const NewExpense = ({ addExpense }) => {
	const [expense, setExpense] = useState({
		title: "",
		date: "",
		amount: "",
	});

	const titleHandler = event => {
		setExpense({ ...expense, title: event.target.value });
	};

	const dateHandler = event => {
		setExpense({ ...expense, date: event.target.value });
	};

	const amountHandler = sobytie => {
		setExpense({ ...expense, amount: sobytie.target.value });
	};

	const saveExpense = e => {
		e.preventDefault();
		if (!expense.title || !expense.date || !expense.amount) {
			alert("заполните все поле");
		} else {
			const newExpenseData = {
				id: Math.random().toFixed(5).toString(),
				newTitle: expense.title,
				newDate: new Date(expense.date),
				newAmount: expense.amount,
			};
			addExpense(newExpenseData);
			setExpense({
				title: "",
				date: "",
				amount: "",
			});
		}
	};

	return (
		<div className='new-expense'>
			<form onSubmit={saveExpense}>
				<div className='new-expense__controls'>
					<div className='new-expense__control'>
						<label>Title</label>
						<input value={expense.title} type='text' onChange={titleHandler} />
					</div>
					<div className='new-expense__control'>
						<label>Date</label>
						<input value={expense.date} type='date' onChange={dateHandler} />
					</div>
					<div className='new-expense__control'>
						<label>Amount</label>
						<input
							value={expense.amount}
							type='number'
							onChange={amountHandler}
						/>
					</div>
					<div className='new-expense__actions'>
						<button>Cancel</button>
						<button type='submit'>Add new expense</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default NewExpense;
