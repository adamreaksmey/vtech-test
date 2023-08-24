export default function SearchInput(props) {
  const { handleSearch, searchTerm } = props;
  return (
    <>
      <input
        type="text"
        className="form-control"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="..."
      />
    </>
  );
}
