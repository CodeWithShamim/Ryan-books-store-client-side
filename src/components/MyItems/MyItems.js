import useMyItems from "../../hooks/useMyItems";
import { FaTrashAlt } from "react-icons/fa";
import { toast } from "react-toastify";
import "./MyItems.css";
import { useNavigate } from "react-router-dom";
import Loading from "../Shared/Loading/Loading";

const MyItems = () => {
  const [myItems, setMyItems, loader] = useMyItems();
  const navigate = useNavigate();

  const handleInventory = (id) => {
    navigate(`/inventory/${id}`);
  };

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
            const remaining = myItems.filter((item) => item._id !== id);
            setMyItems(remaining);
            toast(`${productName}, book item is deleted!`);
          }
        });
    }
  };

  return (
    <div className="" style={{ minHeight: "60vh" }}>
      {loader ? (
        <Loading />
      ) : (
        myItems.map(
          ({ _id, img, name, description, price, quantity, suppiler }) => (
            <div
              key={_id}
              className="item-container rounded mt-4 myitem-box"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="800"
            >
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
                  Quantity:{" "}
                  <span className="text-info fw-bold">{quantity}</span>
                </h5>
                <p>{suppiler}</p>
                <button
                  className="update-btn fw-bold px-4 py-2 rounded bg-transparent text-light border-light"
                  onClick={() => handleInventory(_id)}
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
          )
        )
      )}
    </div>
  );
};

export default MyItems;
