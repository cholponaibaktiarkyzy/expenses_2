import {useState} from 'react';
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const { allExpenses } = props;
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.allExpenses.filter((expense) => {
    return expense.date?.getFullYear().toString() === filteredYear;
  });

  return (
      <>
       <div>
          <ExpensesFilter
              allExpenses={allExpenses}
              filteredExpenses={filteredExpenses}
              selected={filteredYear}
              onFilterChange={filterChangeHandler}
          />
        </div>
      </>
  );
};

export default Expenses
