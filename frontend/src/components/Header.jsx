import { useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { search_barAction } from "../store/search_bar";

const Header = () => {
  const showsearch = useSelector((store) => store.search_bar);
  const setshowsearch = () => {
    dispatch(search_barAction.showsearch());
  };
  const [visible, setvisible] = useState();
  const cart = useSelector((store) => store.cart);
  const search = useSelector((store) => store.Search_products);
  const dispatch = useDispatch();
  const getcartcount = () => {
    let totalcount = 0;
    for (const items in cart) {
      for (const item in cart[items]) {
        try {
          if (cart[items][item] > 0) {
            totalcount += cart[items][item];
          }
        } catch (e) {}
      }
    }
    return totalcount;
  };

  return (
    <>
      <div className="flex items-center bg-white  justify-between py-5 font-medium mx-4">
        <Link to={"/"}>
          <img className="w-36 h-[60px]" src={assets.logo} alt="" />
        </Link>

        <ul className="hidden sm:flex gap-5 text-3m text-gray-700">
          <Link
            className="flex flex-col items-center gap-1 cursor-pointer"
            to={"/"}
          >
            <p>Home</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </Link>
          <Link
            className="flex flex-col items-center gap-1 cursor-pointer"
            to={"/Shopping"}
          >
            <p>Shopping</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </Link>
          <Link
            className="flex flex-col items-center gap-1 cursor-pointer"
            to={"/Collections"}
          >
            <p>Collections</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </Link>
          <Link
            className="flex flex-col items-center gap-1 cursor-pointer"
            to={"/About"}
          >
            <p>About</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </Link>
          <Link
            className="flex flex-col items-center gap-1cursor-pointer"
            to={"/Contact"}
          >
            <p>Contact</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </Link>
        </ul>
        <div className="flex gap-6 items-center">
          <Link to={"/Collections"}>
            {" "}
            <img
              onClick={() => setshowsearch()}
              className="w-5 cursor-pointer"
              src={assets.search_icon}
              alt=""
            />
          </Link>
          <div className="group relative">
            <Link to={"/Login"}>
              <img
                src={assets.profile_icon}
                className="w-5 cursor-pointer"
                alt=""
              />
            </Link>
            <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
              <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                <p className="cursor-pointer hover:text-black">My Profile</p>
                <p className="cursor-pointer hover:text-black">Orders</p>
                <p className="cursor-pointer hover:text-black">Logout</p>
              </div>
            </div>
          </div>
          <Link to={"/Cart"} className="relative">
            <img src={assets.cart_icon} className="w-5 cursor-pointer" alt="" />
            <div className="w-4 bg-black text-white text-center rounded-full leading-4 absolute right-[-5px] bottom-[-5px] aspect-square text-[10px]">
              {getcartcount()}
            </div>
          </Link>
          <img
            onClick={() => setvisible(true)}
            className={`w-8 cursor-pointer sm:hidden`}
            src={assets.menu_icon}
            alt=""
          />
        </div>
      </div>
      <div
        className={` z-2 absolute top-0 bottom-0 left-0 right-0 w-[100%] transition-transform ease-out duration:3000 text-xl font-medium bg-white ${
          visible ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-cols flex-row py-5 px-5 ">
          <div
            onClick={() => setvisible(false)}
            className="flex item-center gap-5 cursor-pointer"
          >
            <img
              className="w-2 h-5 my-1 rotate-180"
              src={assets.dropdown_icon}
              alt=""
            />
            <div className="flex item-center text-gray-500">Back</div>
          </div>
        </div>

        <hr className="border-gray-300 w-[100%]" />
        <div className="px-10 ">
          <Link onClick={() => setvisible(false)} to={"/"}>
            <div className="flex item-center gap-8 text-gray-500 cursor-pointer py-3">
              Home
            </div>
          </Link>

          <hr className="border-gray-300" />
          <Link onClick={() => setvisible(false)} to={"/Shopping"}>
            <div className="flex item-center gap-8 text-gray-500 cursor-pointer py-3">
              Shopping
            </div>
          </Link>

          <hr className="border-gray-300" />
          <Link onClick={() => setvisible(false)} to={"/Collections"}>
            <div className="flex item-center gap-8 text-gray-500 cursor-pointer py-3">
              Collections
            </div>
          </Link>

          <hr className="border-gray-300" />
          <Link onClick={() => setvisible(false)} to={"/About"}>
            <div className="flex item-center gap-8 text-gray-500 cursor-pointer py-3">
              About
            </div>
          </Link>

          <hr className="border-gray-300" />
          <Link onClick={() => setvisible(false)} to={"/Contact"}>
            <div className="flex item-center gap-8 text-gray-500 cursor-pointer py-3">
              Contact
            </div>
          </Link>

          <hr className="border-gray-300" />
        </div>
      </div>
      <hr className="border-gray-300" />
    </>
  );
};
export default Header;
