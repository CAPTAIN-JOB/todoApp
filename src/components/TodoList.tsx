import { useSelector } from "react-redux";
import { TodoItem } from "./TodoItem";
import { RootState } from "../redux/Store";
interface Todo {
	id: number;
	title: string;
	completed: boolean;
}
const TodoList = () => {
	const todos = useSelector((state: RootState) => state.todos);
	return (
		<div>
			{todos.map((todo: Todo) => (
				<ul key={todo.id}>
					<TodoItem
						id={todo.id}
						title={todo.title}
						completed={todo.completed}
					/>
				</ul>
			))}
		</div>
	);
};
export default TodoList;
