import { useNavigate } from "react-router-dom";
import "./MyItem.css";
import { FaTrashAlt } from "react-icons/fa";
import { toast } from "react-toastify";
import useMyItems from "../../../hooks/useMyItems";

const MyItem = ({ myItem }) => {
  const { _id, img, name, description, price, quantity, suppiler } = myItem;
  const [myItems, setMyItems] = useMyItems();
  const navigate = useNavigate();

  const handleInventory = () => {
    navigate(`/inventory/${_id}`);
  };

  // ---delete from db---
  const handleDelete = (id, productName) => {
    const confirmDelete = window.confirm(
      "Are you sure, you want to delete this item."
    );

    // const url = `https://ryan-books-store.herokuapp.com/deleteItem/${id}`;
    const url = `http://localhost:5000/deleteItem/${id}`;

    // ------=====------
    if (confirmDelete) {
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remaining = myItems.filter((item) => item._id !== id);
            setMyItems(remaining);
            toast(`${productName}, book item is deleted!`);
          }
        });
    }
  };
  return (
    <div className="item-container rounded mt-4 myitem-box">
      <div className="left-side">
        <img src={img} alt="book-img" className="img-fluid" />
      </div>
      <div className="right-side">
        <h3>{name}</h3>
        <p>{description}</p>
        <h5>
          Price: <span className="text-info fw-bold">{price}</span>
        </h5>
        <h5>
          Quantity: <span className="text-info fw-bold">{quantity}</span>
        </h5>
        <p>{suppiler}</p>
        <button
          className="update-btn fw-bold px-4 py-2 rounded bg-transparent text-light border-light"
          onClick={handleInventory}
        >
          Update
        </button>

        {/* delete btn  */}
        <button
          onClick={() => handleDelete(_id, name)}
          className="delete-btn border-0 m-2 px-4 py-2 text-light fw-bold rounded"
        >
          Delete
          <FaTrashAlt />
        </button>
      </div>
    </div>
  );
};

export default MyItem;
