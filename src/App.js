import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense";
import { useState } from "react";

function App() {
	const [expensesList, setExpensesList] = useState([]);

	const addNewExpense = newExpense => {
		setExpensesList(prevState => {
			return [...prevState, newExpense];
		});
	};

	return (
		<div>
			<NewExpense addExpense={addNewExpense} />
			<Expenses allExpenses={expensesList} />
		</div>
	);
}

export default App;
