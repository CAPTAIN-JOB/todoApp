import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";

const AddTodoForm = () => {
	const [value, setValue] = useState("");

	const dispatch = useDispatch();

	const onSubmit = (e: any) => {
		e.preventDefault();
		dispatch(
			addTodo({
				title: value,
			})
		);
	};
	return (
		<form onSubmit={onSubmit}>
			<label htmlFor="">Name</label>
			<input
				type="text"
				value={value}
				onChange={(e) => setValue(e.target.value)}
			></input>
			{/* {value} */}
			<button>Submit</button>
		</form>
	);
};

export default AddTodoForm;
