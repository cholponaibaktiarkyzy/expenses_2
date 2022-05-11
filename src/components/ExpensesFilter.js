import "./ExpensesFilter.css";
import React from "react";
import ExpensesItem from "./ExpensesItem";
import Card from "./Card";

const array = [
	{ label: "Jan", value: 0 },
	{ label: "Feb", value: 0 },
	{ label: "Mar", value: 0 },
	{ label: "Apr", value: 0 },
	{ label: "May", value: 0 },
	{ label: "Jun", value: 0 },
	{ label: "Jul", value: 0 },
	{ label: "Aug", value: 0 },
	{ label: "Sep", value: 0 },
	{ label: "Oct", value: 0 },
	{ label: "Nov", value: 0 },
	{ label: "Dec", value: 0 },
];

const ExpensesFilter = ({ selected, allExpenses, filteredExpenses }) => {
	const [exp, setExp] = React.useState([]);
	React.useEffect(() => {
		setExp(allExpenses);
	}, [allExpenses]);
	const filterItem = year => {
		let result = allExpenses.filter(item => {
			// expense.date?.getFullYear().toString() === selected;
			let expense = item.newDate.toString().includes(year);
			return expense;
		});
		setExp(result);
	};

	const dropdownChangeHandler = event => {
		filterItem(event.target.value);
	};

	const deleteItem = id => {
		setExp(prevSate => prevSate.filter(item => item.id !== id)); //v1
		// setExp(prevState => {
		// 	const idx = prevState.findIndex(item => item.id === id);
		// 	return [...prevState.slice(0, idx), ...prevState.slice(idx + 1)];
		// });//v2
	};

	return (
		<Card className='Card-filter'>
			<div className='expenses-filter'>
				<div className='expenses-filter'>
					<div className='expenses-filter__control'>
						<label>Filter by year </label>
						<select value={selected} onChange={dropdownChangeHandler}>
							<option value='2022'>2022</option>
							<option value='2021'>2021</option>
							<option value='2020'>2020</option>
							<option value='2019'>2019</option>
						</select>
					</div>
				</div>
				<div className='chart-wrap'>
					<div className='chart-bar'>
						<div className='chart-item'>
							{array.map(item => (
								<div key={item.label}/>
							))}
						</div>
						<div className='chart-item-label'>
							{array.map(item => (
								<span key={item.label}>{item.label}</span>
							))}
						</div>
					</div>
				</div>
			</div>

			{exp.map(expense => (
				<ExpensesItem
					deleteItem={deleteItem}
					items={filteredExpenses}
					key={Math.random()}
					id={expense.id}
					date={expense.newDate}
					title={expense.newTitle}
					price={expense.newAmount}
				/>
			))}
		</Card>
	);
};

export default ExpensesFilter;
