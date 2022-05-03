import React from "react";
import useLoadItems from "../../hooks/useLoadItems";

const ManageInventory = () => {
  const [items] = useLoadItems();
  return (
    <div>
      {items.map((item) => (
        <h4>{item?.name}</h4>
      ))}
    </div>
  );
};

export default ManageInventory;
