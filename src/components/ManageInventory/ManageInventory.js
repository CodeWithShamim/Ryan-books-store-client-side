import React from "react";
import { Table } from "react-bootstrap";
import useLoadItems from "../../hooks/useLoadItems";
import "./ManageInventory.css";
import { FaTrashAlt } from "react-icons/fa";
import { toast } from "react-toastify";

const ManageInventory = () => {
  const [items, setItems] = useLoadItems();

  // ---delete from db---
  const handleDelete = (id, productName) => {
    const confirmDelete = window.confirm(
      "Are you sure, you want to delete this item."
    );
    const url = `http://localhost:5000/deleteItem/${id}`;

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
    <div className="container product-table-container my-3">
      <Table responsive striped bordered hover size="sm">
        <thead>
          <tr>
            <th className="text-start">Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Suppiler</th>
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
    </div>
  );
};

export default ManageInventory;
