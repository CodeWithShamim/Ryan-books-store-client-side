import React from "react";
import { Table } from "react-bootstrap";
import useLoadItems from "../../hooks/useLoadItems";
import "./ManageInventory.css";
import { FaTrashAlt } from "react-icons/fa";

const ManageInventory = () => {
  const [items] = useLoadItems();

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
            <tr>
              <td className="text-start">{item.name}</td>
              <td>{item.price}</td>
              <td>{item.quantity}</td>
              <td>{item.suppiler}</td>
              <td>
                <button className="delete-btn border-0 text-light fw-bold rounded">
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
