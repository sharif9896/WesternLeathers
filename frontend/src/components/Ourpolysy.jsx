import { assets } from "../assets/assets";

const Ourpolysy = () => {
  return (
    <>
    <br />
    <br />
      <div className="flex flex-col sm:flex-row gap-12 justify-around sm:gap-2 text-center py-10">
        <div>
          <img src={assets.exchange_icon} className="w-12 m-auto mb-5" alt="" />
          <p className="font-semibold">Easy Exchange Policy</p>
          <p className="text-gray-400">We Offer hassle free exchange policy</p>
        </div>

        <div>
          <img src={assets.quality_icon} className="w-12 m-auto mb-5" alt="" />
          <p className="font-semibold">7. Days Return Policy</p>
          <p className="text-gray-400">We Provide 7 Days free return Policy</p>
        </div>

        <div>
          <img src={assets.support_img} className="w-12 m-auto mb-5" alt="" />
          <p className="font-semibold">Best customer support</p>
          <p className="text-gray-400">we provide 24/7 customer support</p>
        </div>
      </div>
      <br />
    </>
  );
};
export default Ourpolysy;
