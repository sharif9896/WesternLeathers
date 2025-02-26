import Productitem from "../components/Productitem";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const Collections = () => {
  const products = useSelector((store) => store.items.item[0]);
  const search = useSelector((store) => store.Search_products);
  const [showfilter, setshowfilter] = useState(false);
  const [filterpro, setfilterpro] = useState([]);
  const [catagory, setcatagory] = useState([]);
  const [subcatagory, setsubcatagory] = useState([]);
  const [sorts, setsort] = useState("relevant");
  const showsearch = useSelector((store) => store.search_bar);
//   console.log(showsearch);
  const toggleop = (e) => {
    if (catagory.includes(e.target.value)) {
      setcatagory((prev) =>
        prev.filter((item) => {
          item !== e.target.value;
        })
      );
    } else {
      setcatagory((prev) => [...prev, e.target.value]);
    }
  };
  const togglesub = (e) => {
    // console.log(e.target.value);
    if (subcatagory.includes(e.target.value)) {
      setsubcatagory((prev) =>
        prev.filter((item) => {
          item !== e.target.value;
        })
      );
    } else {
      setsubcatagory((prev) => [...prev, e.target.value]);
    }
  };
  const applyfilter = () => {
    let procopy = products.slice();
    if (showsearch.Boolean && search) {
      procopy = procopy.filter((data) =>
        data.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (catagory.length > 0) {
      procopy = procopy.filter((data) => catagory.includes(data.category));
    }
    if (subcatagory.length > 0) {
      procopy = procopy.filter((data) =>
        subcatagory.includes(data.subcategory)
      );
    }
    setfilterpro(procopy);
  };

  const sortfunc = () => {
    let procopy = products.slice();
    switch (sorts) {
      case "low-high":
        setfilterpro(
          procopy.sort((a, b) => {
            a.price - b.price;
          })
        );
        break;
      case "high-low":
        setfilterpro(
          procopy.sort((a, b) => {
            b.price - a.price;
          })
        );
        break;
      default:
        applyfilter();
        break;
    }
  };

  useEffect(() => {
    sortfunc();
  }, [sorts]);

  useEffect(() => {
    setfilterpro(products);
  }, []);

  useEffect(() => {
    applyfilter();
  }, [catagory, subcatagory, search, showsearch]);
  return (
    <>
      <div>
        <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
          {/* filter */}
          <div className="min-w-60">
            <p
              onClick={() => setshowfilter(!showfilter)}
              className="text-xl flex items-center cursor-pointer gap-2"
            >
              FILTERS
            </p>
            <img
              className={`h-3 sm:hidden ${showfilter ? "rotate-90" : ""}`}
              src={assets.dropdown_icon}
            />
            {/* <CATEGO></CATEGO> */}
            <div
              className={`border border-gray-300 pl-5 py-3 mt-6 transition ease-in-out ${
                showfilter ? "" : "hidden"
              } sm:block`}
            >
              <p className="mb-3 text-sm font-medium">CATEGORIES</p>
              <div className="flex flex-col gap-2 font-light text-gray-700">
                <p className="flex gap-2">
                  <input
                    type="checkbox"
                    className="w-3"
                    value={"Men"}
                    onChange={toggleop}
                  />
                  MEN
                </p>
                <p className="flex gap-2">
                  <input
                    type="checkbox"
                    className="w-3"
                    value={"Women"}
                    onChange={toggleop}
                  />
                  WOMEN
                </p>
                <p className="flex gap-2">
                  <input
                    type="checkbox"
                    className="w-3"
                    value={"Kids"}
                    onChange={toggleop}
                  />
                  KIDS
                </p>
              </div>
            </div>
            <div
              className={`border border-gray-300 pl-5 py-3 my-5 transition ease-in-out ${
                showfilter ? "" : "hidden"
              } sm:block`}
            >
              <p className="mb-3 text-sm font-medium">TYPE</p>
              <p className="flex gap-2 ">
                <input
                  type="checkbox"
                  className="w-3"
                  value={"Topwear"}
                  onChange={togglesub}
                />{" "}
                Topwear
              </p>
              <p className="flex gap-2">
                <input
                  type="checkbox"
                  className="w-3"
                  value={"Blazer"}
                  onChange={togglesub}
                />{" "}
                Blazer
              </p>
              <p className="flex gap-2">
                <input
                  type="checkbox"
                  className="w-3"
                  value={"Jacket"}
                  onChange={togglesub}
                />{" "}
                Jacket
              </p>
              <p className="flex gap-2">
                <input
                  type="checkbox"
                  className="w-3"
                  value={"Winterwear"}
                  onChange={togglesub}
                />{" "}
                Winterwear
              </p>
              <p className="flex gap-2">
                <input
                  type="checkbox"
                  className="w-3"
                  value={"Shoes"}
                  onChange={togglesub}
                />{" "}
                Shoes
              </p>
              <p className="flex gap-2">
                <input
                  type="checkbox"
                  className="w-3"
                  value={"Belt"}
                  onChange={togglesub}
                />{" "}
                Belts
              </p>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex justify-between text-base sm:text-2xl mb-4">
              <Title text1={"ALL"} text2={"COLLECTIONS"} />
              <select
                onChange={(e) => setsort(e.target.value)}
                className="border-2 border-gray-300 text-sm px-2"
              >
                <option value="relevant">Sort by: Relevant</option>
                <option value="low-high">Sort by: Low to High</option>
                <option value="high-low">Sort by: High to Low</option>
              </select>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 my-8">
              {filterpro.map((data, Index) => (
                <Productitem
                  key={Index}
                  id={data._id}
                  name={data.name}
                  image={data.image}
                  price={data.price}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Collections;
