import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../Redux/action";
import ModalDelete from "./ModalDelete";

export default function DeleteProduct({ id, typeProduct }) {
  const [showDelete, setShowDelete] = useState();
  const dispatch = useDispatch();

  function handleShowDelete() {
    setShowDelete(false);
  }

  function handleOnDelete() {
    dispatch(deleteProduct(id, typeProduct));
    setShowDelete(false);
  }
  return (
    <div>
      <div className=" delete-horizontal m-1 p-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="#C0C0C0"
          className="span-pointer bi bi-x-circle-fill"
          viewBox="0 0 16 16"
          onClick={() => setShowDelete(true)}
        >
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
        </svg>
      </div>
      <ModalDelete
        showModal={showDelete}
        handleOnDelete={handleOnDelete}
        handleShowDelete={handleShowDelete}
      ></ModalDelete>
    </div>
  );
}
