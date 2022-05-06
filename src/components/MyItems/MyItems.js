import useMyItems from "../../hooks/useMyItems";
import MyItem from "./MyItem/MyItem";
import "./MyItems.css";

const MyItems = () => {
  const [myItems] = useMyItems();

  return (
    <div className="">
      {myItems.map((myItem) => (
        <MyItem key={myItem._id} myItem={myItem} myItems={myItems}></MyItem>
      ))}
    </div>
  );
};

export default MyItems;
