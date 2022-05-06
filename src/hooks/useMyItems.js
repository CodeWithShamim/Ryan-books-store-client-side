import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const useMyItems = () => {
    const [user] = useAuthState(auth);
    const [myItems, setMyItems] = useState([]);

    // ---get item by email---
    useEffect(() => {
        // const url = `https://ryan-books-store.herokuapp.com/getItemByEmail?email=${user?.email}`;
        const url = `http://localhost:5000/getItemByEmail?email=${user?.email}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => setMyItems(data));

    }, [user]);

    console.log(user)
    console.log(myItems)
    return [myItems, setMyItems]


};

export default useMyItems;