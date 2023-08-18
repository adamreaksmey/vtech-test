export default function InputForm(props) {
  const { handleInputChange, handleAddTodo, newTodo } = props;
  return (
    <>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          value={newTodo}
          onChange={handleInputChange}
          placeholder="Enter a new todo"
        />
        <div className="input-group-append">
          <button className="btn btn-primary" onClick={handleAddTodo}>
            Add Todo
          </button>
        </div>
      </div>
    </>
  );
}
