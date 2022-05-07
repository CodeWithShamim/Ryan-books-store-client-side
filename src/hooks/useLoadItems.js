import { useEffect, useState } from "react";

const useLoadItems = () => {
    const [items, setItems] = useState([]);
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        setLoader(true)
        fetch("https://ryan-books-store.herokuapp.com/items")
            // fetch("http://localhost:5000/items")
            .then((res) => res.json())
            .then((data) => {
                setLoader(false)
                setItems(data)
            });
    }, []);

    return [items, setItems, loader];
};

export default useLoadItems;