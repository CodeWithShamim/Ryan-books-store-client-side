import "./InventoryItem.css";
import { useNavigate } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

const InventoryItem = ({ item }) => {
  const { _id, img, name, description, price, quantity, suppiler } = item;

  const navigate = useNavigate();

  const handleInventory = () => {
    navigate(`/inventory/${_id}`);
  };
  return (
    <>
      {item ? (
        <div className="item-container">
          <div className="left-side">
            <img src={img} alt="book-img" className="img-fluid" />
          </div>
          <div className="right-side">
            <h3>{name}</h3>
            <p>{description}</p>
            <h5>
              Price: <span className="text-info">{price}</span>
            </h5>
            <h5>
              Quantity: <span className="text-info">{quantity}</span>
            </h5>
            <p>{suppiler}</p>
            <button
              className="update-btn fw-bold px-5 py-2 rounded bg-transparent"
              onClick={handleInventory}
            >
              Update
            </button>
          </div>
        </div>
      ) : (
        <Skeleton count={12} />
      )}
    </>
  );
};

export default InventoryItem;
