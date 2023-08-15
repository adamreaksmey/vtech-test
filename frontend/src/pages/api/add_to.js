import axios from "axios";

const apiUrl = process.env.NEXT_PUBLIC_APU_URL;

async function fetchTodo() {
  const response = await axios.get(apiUrl + "/todo");
  return response;
}

export default fetchTodo;
