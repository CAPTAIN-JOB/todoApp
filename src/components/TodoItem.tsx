import { useDispatch } from "react-redux";
import { deleteTodo, toggleComplete } from "../redux/todoSlice";

interface ItemProps {
	id: number;
	title: string;
	completed: boolean;
}

export const TodoItem: React.FC<ItemProps> = ({ id, title, completed }) => {
	const dispatch = useDispatch();

	const deleteButton = () => {
		dispatch(
			deleteTodo({
				id: id,
			})
		);
	};
	const toggleCompleted = () => {
		dispatch(
			toggleComplete({
				id: id,
				completed: !completed,
			})
		);
	};

	return (
		<li>
			<div key={id}>
				<span>
					<input
						type="checkbox"
						checked={completed}
						onChange={toggleCompleted}
					></input>
					{title}
				</span>
				<button onClick={deleteButton}>Delete</button>
			</div>
		</li>
	);
};
