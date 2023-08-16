import axios from "axios";

const apiUrl = process.env.NEXT_PUBLIC_APU_URL;

export async function fetchTodo() {
  const response = await axios.get(apiUrl + "/todo");
  return response.data;
}

export async function addTodo(data) {
  const response = await axios.post(apiUrl + "/todo", data);
  return response.data;
}

export async function deleteTodo(id) {
  const response = await axios.delete(apiUrl + "/todo/" + id);
  return response.data;
}

export async function completeTask(id, data) {
  const response = await axios.put(apiUrl + "/todo", {
    id: id,
    completed: data,
  });
  return response.data;
}
