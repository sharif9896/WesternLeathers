import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { itemAction } from "../store/ItemSlice";
import { products } from "../assets/assets";

const FetchProducts = () =>{
    const dispatch = useDispatch();
    useEffect(() => {
        // dispatch(itemAction.setItems(products.item[0]));
    },[]);
    return (
        <>

        </>
    );
}
export default FetchProducts;