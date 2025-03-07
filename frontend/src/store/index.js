import { configureStore } from "@reduxjs/toolkit";
import ItemSlice from "./ItemSlice";
import Blazer_categorys from "./Blazer_categorys";
import Cart from "./Cart";
import Search_products from "./Search_products";
import search_bar from "./search_bar";
import casual_categorys from "./Casual";
import casualSlice from "./casualSlice";

const ecommerce = configureStore({
  reducer: {
    items: ItemSlice.reducer,
    item2: casualSlice.reducer,
    Blazer_categorys: Blazer_categorys.reducer,
    casual: casual_categorys.reducer,
    cart: Cart.reducer,
    Search_products: Search_products.reducer,
    search_bar: search_bar.reducer,
  },
});
export default ecommerce;
