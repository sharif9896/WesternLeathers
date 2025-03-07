import { assets } from "../assets/assets";
import Newsletter from "../components/Newsletter";
// import Title from "../components/Title";

const Contact = () => {
  return (
    <>
      <div className="text-center text-2xl pt-10 border-t">
        {/* <Title text1={"CONTACT"} text2={"US"}></Title> */}
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img
          className="w-full md:max-w-[480px]"
          src={assets.contact_img}
          alt=""
        />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-600">Our Store</p>
          <p className="text-gray-500">
            257/40 Teachers Colony or katchi Road <br /> Vaniyambadi, Tamil Nadu, India
          </p>
          <p className="text-gray-500">
            Tel:(415) 555-0123 <br />
            Email :sharifrayan638@gmail.com
          </p>
          <p className="font-semibold text-xl text-gray-600">
            Careers at Forever
          </p>

          <p className="text-gray-500">
            Learn more about teams and job openings
          </p>
          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-75 ">
            Explore Jobs
          </button>
        </div>
      </div>

    </>
  );
};
export default Contact;
