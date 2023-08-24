import { useState, useEffect } from "react";
import { fetchTodo, addTodo, deleteTodo } from "./api/todo";
import form from "@/form";
import EditModal from "@/components/edit";
import InputForm from "@/components/input";
import DataTable from "@/components/data";
import SearchInput from "@/components/search";

export default function Home() {
  const [newTodo, setNewTodo] = useState("");
  const [alltodos, setAlltodos] = useState([]);
  const [info, setInfo] = useState("");
  const [modal, openModal] = useState(false);
  const [searchTerm, setSearch] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTodo("");
      setAlltodos(data);
    };

    fetchData();
  }, []);

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  const refresh = async (name) => {
    const updatedData = await fetchTodo(name);
    setAlltodos(updatedData);
  };

  const handleAddTodo = async () => {
    if (newTodo.trim() !== "") {
      await addTodo({ ...form, title: newTodo });
      setNewTodo("");
      refresh();
    }
    return;
  };

  const handleDeleteTodo = async (id) => {
    await deleteTodo(id);
    refresh();
  };

  const handleEditTodo = (info) => {
    setInfo(info);
    openModal(true);
  };

  const toggleModal = () => {
    openModal(!modal);
  };

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const runSearch = async () => {
    await refresh((name = searchTerm));
  };

  return (
    <>
      {modal && (
        <EditModal props={info} closeModal={toggleModal} refresh={refresh} />
      )}
      <div className="container">
        <h1>Add to do</h1>
        <InputForm
          handleInputChange={handleInputChange}
          handleAddTodo={handleAddTodo}
          newTodo={newTodo}
        />
        <SearchInput handleSearch={handleSearch} props={searchTerm} />
        <button onClick={runSearch}>Search</button>
        <DataTable
          alltodos={alltodos}
          handleDeleteTodo={handleDeleteTodo}
          handleEditTodo={handleEditTodo}
        />
      </div>
    </>
  );
}
