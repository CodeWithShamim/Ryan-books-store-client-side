import useLoadItems from "../../../hooks/useLoadItems";
import InventoryItem from "../InventoryItem/InventoryItem";
import "./InventoryItems.css";

const InventoryItems = () => {
  const [items] = useLoadItems();
  const sliceItems = items?.slice(0, 6);
  console.log(sliceItems);
  // console.log(items);
  return (
    <div className="inventory-main-items">
      <h1 className="mt-5">Inventory book items</h1>
      <div className="inventory-items-container container">
        {sliceItems?.map((item) => (
          <InventoryItem key={item.id} item={item}></InventoryItem>
        ))}
      </div>
    </div>
  );
};

export default InventoryItems;
