import React from "react";
import { Table } from "react-bootstrap";
import useLoadItems from "../../hooks/useLoadItems";
import "./ManageInventory.css";
import { FaTrashAlt } from "react-icons/fa";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import Loading from "../Shared/Loading/Loading";

const ManageInventory = () => {
  const [items, setItems, loader] = useLoadItems();

  // ---delete from db---
  const handleDelete = (id, productName) => {
    const confirmDelete = window.confirm(
      "Are you sure, you want to delete this item."
    );

    const url = `https://rbs-backend.vercel.app/deleteItem/${id}`;
    // const url = `http://localhost:5000/deleteItem/${id}`;

    // ------=====------
    if (confirmDelete) {
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remaining = items.filter((item) => item._id !== id);
            setItems(remaining);
            toast(`${productName}, book item is deleted!`);
          }
        });
    }
  };

  return (
    <div className="product-table-container my-3">
      {loader ? (
        <Loading />
      ) : (
        <>
          <Table responsive striped bordered hover size="sm">
            <thead>
              <tr>
                <th className="text-start">Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Suppiler</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item._id}>
                  <td className="text-start">{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.quantity}</td>
                  <td>{item.suppiler}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(item._id, item.name)}
                      className="delete-btn border-0 text-light fw-bold rounded"
                    >
                      Delete
                      <FaTrashAlt />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </>
      )}
      {/* ---manage invenrory btn--- */}
      <Link to="/add-items">
        <button className="manage-inventory-btn px-5 py-3 mt-0 fw-bold">
          Add new item
        </button>
      </Link>
    </div>
  );
};

export default ManageInventory;
