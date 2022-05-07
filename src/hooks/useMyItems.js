import axios from "axios";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
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
        const loadMyItems = async() => {
            try {
                const { data } = await axios(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                setLoader(false);
                setMyItems(data);
            } catch (error) {
                if (error.response.status === 403) {
                    toast.error("Forbidden access")
                }
                if (error.response.status === 401) {
                    toast.error("Unauthorized access")
                }
            }

        }

        loadMyItems();

    }, [user]);

    // console.log(user)
    // console.log(myItems)
    return [myItems, setMyItems, loader]


};

export default useMyItems;