import React, { useState } from "react";

export default function DeletedItemPage() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prevShowModal) => !prevShowModal);
  };

  return (
    <div className="container">
      <h1 className="mt-5">Deleted Item Page</h1>
      <button className="btn btn-primary mt-3" onClick={openModal}>
        Open Modal
      </button>

      {showModal && <div>asdadads</div>}
    </div>
  );
}
