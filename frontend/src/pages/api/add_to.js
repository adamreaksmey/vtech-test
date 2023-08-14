export default function handler(req, res) {
  if (req.method == "POST") {
    const { todo } = req.body;
    const newTodo = {
      id: Date.now(),
      title: todo,
    };

    const todos = [];
    todos.push(newTodo);
    return res.status(201).json(newTodo);
  }
  return res.status(405).end();
}
