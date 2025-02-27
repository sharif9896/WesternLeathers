import { useSelector } from "react-redux";
import Title from "./Title";
import { useEffect, useState } from "react";
import Productitem from "./Productitem";
import { products } from "../assets/assets";
import Bestseller from "./Bestseller";
import Blazer_categoryscat from "./Blazer_categoryscat";
import Blazer_categoryscat2 from "./Blazer_categoryscat2";

const Latest_collections = () => {
  const [filterpro, setfilterpro] = useState([]);
  const [blazercat, setbazercat] = useState([]);
  const [cal, setcal] = useState([]);
  const product = useSelector((state) => state.items.item[0]);
  const casual = useSelector((store) => store.casual[0]);
  const Blazer_categorys = useSelector((store) => store.Blazer_categorys[0]);
  useEffect(() => {
    setfilterpro(product.slice(0, 12));
  }, []);
  useEffect(() => {
    setbazercat(Blazer_categorys);
    setcal(casual);
  }, []);
  return (
    <>
      <div className="my-10">
        <div className="text-center py-8 text-3xl">
          <Title text1={"OUR"} text2={"CATEGORIES"}></Title>
          <p className="w-3/4 m-auto sm:text-sm md:text-base text-xs text-gray-600">
            "Fashion is very important It is life-enhancing and, like every
            thing that gives pleasure,it is worth doing well".
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {blazercat.map((data, index) => (
          <Blazer_categoryscat
            key={index}
            id={data._id}
            name={data.name}
            image={data.image}
            description={data.description}
            category={data.category}
            subcategory={data.subcategory}
          ></Blazer_categoryscat>
        ))}
        {cal.map((data, index) => (
          <Blazer_categoryscat2
            key={index}
            id={data._id}
            name={data.name}
            image={data.image}
            description={data.description}
            category={data.category}
            subcategory={data.subcategory}
          ></Blazer_categoryscat2>
        ))}
      </div>
      <div className="my-10">
        <div className="text-center py-8 text-3xl">
          <Title text1={"LATEST"} text2={"COLLECTIONS"}></Title>
          <p className="w-3/4 m-auto sm:text-sm md:text-base text-xs text-gray-600">
            "Fashion is very important It is life-enhancing and, like every
            thing that gives pleasure,it is worth doing well".
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 align-center gap-4 gap-y-6">
        {filterpro.map((data, index) => (
          <Productitem
            key={index}
            id={data._id}
            name={data.name}
            image={data.image}
            price={data.price}
            category={data.category}
            rating={data.rating}
          ></Productitem>
        ))}
      </div>
      <Bestseller />
    </>
  );
};
export default Latest_collections;
