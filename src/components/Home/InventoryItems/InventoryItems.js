import { Link } from "react-router-dom";
import useLoadItems from "../../../hooks/useLoadItems";
import InventoryItem from "../InventoryItem/InventoryItem";
import "./InventoryItems.css";

const InventoryItems = () => {
  const [items] = useLoadItems();
  const sliceItems = items?.slice(0, 6);
  // console.log(sliceItems);
  // console.log(items);
  return (
    <div className="inventory-main-items">
      <h1 className="mt-5">Stock items</h1>
      <div className="inventory-items-container container">
        {sliceItems?.map((item) => (
          <InventoryItem key={item._id} item={item}></InventoryItem>
        ))}
      </div>
      {/* ---manage invenrory btn--- */}
      <Link to="/manage-inventory">
        <button className="manage-inventory-btn px-5 py-3 mt-0 fw-bold">
          Manage inventories
        </button>
      </Link>
    </div>
  );
};

export default InventoryItems;
