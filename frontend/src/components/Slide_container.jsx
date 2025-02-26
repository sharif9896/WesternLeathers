import Slider from "./Slider";

const Slide_container = () => {
  const slides = [
    "slide1.webp",
    "slide3.jpg",
    "7_banner.jpg",
    "nin.webp",
  ];
  return (
    <>
      <br />
      <Slider autodslide={true} autoslideInterval={3000}>
        {slides.map((slide, index) => (
          <img key={index} style={{width:"100%"}} src={slide} alt="" />
        ))}
      </Slider>
    </>
  );
};
export default Slide_container;
