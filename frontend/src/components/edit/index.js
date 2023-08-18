import { useState, React } from "react";
import { editTodo } from "@/pages/api/todo";
import form from "@/form";

export default function EditModal({ props, closeModal, refresh }) {
  const [task, setTask] = useState({
    title: props.title,
    completed: props.completed,
  });

  const titleChange = (value) => {
    setTask((prev) => ({
      ...prev,
      title: value,
    }));
  };

  const completeTask = (event) => {
    setTask((prev) => ({
      ...prev,
      completed: event,
    }));
  };

  const submitEdit = async () => {
    await editTodo(props.id, { ...form, ...task });
    closeModal();
    refresh();
  };

  return (
    <>
      <div className="modal" style={{ display: "block" }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit task name</h5>
              <button
                type="button"
                onClick={closeModal}
                className="btn-close"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <label>Edit task:</label>
              <input
                type="text"
                className="form-control mb-2"
                defaultValue={task.title}
                onChange={(event) => titleChange(event.target.value)}
              />
              <label>Mark task:</label>
              <>&nbsp;</>
              <input
                type="checkbox"
                className="form-check-input"
                checked={task.completed}
                onChange={() => completeTask(Boolean(!task.completed))}
              />
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-primary"
                type="button"
                onClick={submitEdit}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-backdrop fade show" style={{ zIndex: 1040 }}></div>
    </>
  );
}
