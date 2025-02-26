import { assets } from "../assets/assets";
import Newsletter from "../components/Newsletter";
// import Title from "../components/Title";

const About = () => {
  return (
    <>
      <div>
        <div className="text-2xl text-center pt-8 border-t">
          {/* <Title text1={"ABOUT"} text2={"US"}></Title> */}
        </div>
        <div className="my-10 flex flex-col md:flex-row gap-16">
          <img
            className="w-full md:max-w-[450px]"
            src={assets.about_img}
            alt=""
          />
          <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
            <p>
              Welcome to Western Leathers, your ultimate destination for premium
              leather products. We take pride in offering a curated collection
              of high-quality leather goods that combine timeless style with
              unmatched durability. At Western Leathers, we believe in the power
              of craftsmanship and tradition. Our products are meticulously
              crafted using the finest materials to ensure they stand the test
              of time, providing you with both style and functionality. Whether
              you're looking for elegant leather jackets, durable belts, stylish
              wallets, or statement accessories, we have something for everyone.
            </p>
            <p>
              We are passionate about delivering an exceptional shopping
              experience. Our team is dedicated to providing top-notch customer
              service, ensuring your satisfaction at every step. From selecting
              the perfect product to delivering it to your doorstep, we go the
              extra mile to make your experience seamless and enjoyable. Explore
              our collection and discover the perfect blend of tradition,
              craftsmanship, and modern fashion. At Western Leathers, we’re not
              just selling leather products—we’re offering a legacy of quality
              and style. Western Leathers – Timeless Style, Uncompromising
              Quality.
            </p>
            <b className="text-gray-800">Our Mission</b>
            <p>
              Our Mission At Western Leathers, our mission is to redefine the
              leather industry by delivering premium, handcrafted leather
              products that blend timeless elegance with everyday functionality.
              We are committed to providing exceptional quality, fostering
              sustainable practices, and ensuring customer satisfaction at every
              touchpoint. Our Vision To be the global leader in leather
              craftsmanship, recognized for our dedication to quality,
              innovation, and sustainability. We aim to inspire confidence and
              style in our customers while contributing positively to the
              fashion industry and the environment.
            </p>
          </div>
        </div>
        <div className="text-4xl py-4">
          {/* <Title text1={"WHY"} text2={"CHOOSE US"}></Title> */}
        </div>
        <div className="flex flex-col md:flex-row text-sm mb-20">
          <div className="border  px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
            <b>Quality Assuarance :</b>
            <p className="text-gray-600">
              Quality Assurance At Western Leathers, quality is at the heart of
              everything we do. We are dedicated to providing our customers with
              leather products that exemplify superior craftsmanship,
              durability, and style. Each product in our collection undergoes a
              rigorous quality control process to ensure it meets our high
              standards. From sourcing premium-grade leather to precision
              stitching and finishing, every detail is meticulously inspected to
              deliver a flawless product. We believe in transparency and stand
              behind the authenticity of our materials.
            </p>
          </div>
          <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
            <b>Convenience :</b>
            <p className="text-gray-600">
              Your convenience is our priority. With a user-friendly website,
              secure payment options, and fast, reliable delivery, we’ve made
              shopping for leather products effortless. Need assistance? Our
              dedicated support team is here to help you at every step.
              Experience a hassle-free journey with Western Leathers, where your
              satisfaction and convenience come first. Western Leathers –
              Simplifying Style.
            </p>
          </div>
          <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
            <b>Exceptional Customer Service :</b>
            <p className="text-gray-600">
              At Western Leathers, our customers are at the heart of everything
              we do. We are committed to providing an exceptional customer
              service experience that ensures your journey with us is seamless,
              enjoyable, and memorable.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
