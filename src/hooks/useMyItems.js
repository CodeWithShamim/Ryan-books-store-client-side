import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const useMyItems = () => {
    const [user] = useAuthState(auth);
    const [myItems, setMyItems] = useState([]);
    const [loader, setLoader] = useState(false);

    // ---get item by email---
    useEffect(() => {
        setLoader(true);
        // const url = `https://ryan-books-store.herokuapp.com/getItemByEmail?email=${user?.email}`;
        const url = `http://localhost:5000/getItemByEmail?email=${user?.email}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setLoader(false);
                setMyItems(data);
            });

    }, [user]);

    console.log(user)
    console.log(myItems)
    return [myItems, setMyItems, loader]


};

export default useMyItems;