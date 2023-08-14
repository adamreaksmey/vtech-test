const handleTodo = (data, setTodos) => {
  fetch("/api/add_todo", {
    method: "POST",
    body: JSON.stringify({
      todo: data,
    }),
    headers: {
        "Content-Type" : "application/json",
    },
  })
  .then((response) => response.json())
  .then((_data) => {
    // setTodos([...])
  })
};
