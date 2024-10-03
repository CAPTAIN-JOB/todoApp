import { useSelector } from "react-redux";
import { RootState } from "../redux/Store";

const TotalComplete = () => {
	const completedTodos = useSelector((state: RootState) =>
		state.todos.filter((todo) => todo.completed === true)
	);
	return (
		<div>
			<h1>Total Complete is : {completedTodos.length}</h1>
		</div>
	);
};

export default TotalComplete;
