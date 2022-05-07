import { Link } from "react-router-dom";
import useLoadItems from "../../../hooks/useLoadItems";
import Loading from "../../Shared/Loading/Loading";
import InventoryItem from "../InventoryItem/InventoryItem";
import "./InventoryItems.css";

const InventoryItems = () => {
  const [items, , loader] = useLoadItems();
  const sliceItems = items?.slice(0, 6);
  // console.log(sliceItems);
  // console.log(items);
  // console.log(loader);
  return (
    <div className="inventory-main-items">
      <>
        {loader ? (
          <Loading></Loading>
        ) : (
          <>
            <h1 className="mt-5" data-aos="flip-up" data-aos-duration="1000">
              Stock items
            </h1>
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
          </>
        )}
      </>
    </div>
  );
};

export default InventoryItems;
