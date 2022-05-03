import { useEffect, useState } from "react";

const useLoadItems = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        //fetch("https://ryan-books-store.herokuapp.com/items")
        fetch("http://localhost:5000/items")
            .then((res) => res.json())
            .then((data) => setItems(data));
    }, []);

    return [items];
};

export default useLoadItems;