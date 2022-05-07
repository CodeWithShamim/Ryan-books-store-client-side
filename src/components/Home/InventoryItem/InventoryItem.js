import "./InventoryItem.css";
import { useNavigate } from "react-router-dom";

const InventoryItem = ({ item }) => {
  const { _id, img, name, description, price, quantity, suppiler } = item;

  const navigate = useNavigate();

  const handleInventory = () => {
    navigate(`/inventory/${_id}`);
  };
  return (
    <div
      className="item-container"
      data-aos="zoom-in"
      data-aos-easing="linear"
      data-aos-duration="800"
    >
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
  );
};

export default InventoryItem;
