export default function DataTable(props) {
  const { alltodos, handleDeleteTodo, handleEditTodo } = props;
  return (
    <>
      <ul className="list-group">
        {alltodos.map((todo) => (
          <li
            key={todo.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <div className="form-check">
              {todo.completed ? <>&#10004;</> : null}
              <label className="form-check-label">{todo.title}</label>
            </div>
            <div className="d-flex gap-2">
              <button
                className="btn btn-info mr-2"
                onClick={() => handleEditTodo(todo)}
              >
                Edit
              </button>
              <button
                className="btn btn-danger"
                onClick={() => handleDeleteTodo(todo.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
