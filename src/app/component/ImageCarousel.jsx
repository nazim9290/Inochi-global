const { Slider } = require("@mui/material");
import Image from "next/image"

// YourComponent.js
const ImageCarousel = ({ datas }) => {
  // console.log(datas)
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
console.log("test,",datas)
  return (
    <Slider {...settings}>
      {/* {datas.map((item, index) => (
        <div key={index}>
          <Image src={item} alt={`Image ${index + 1}`} />
        </div>
      ))} */}
    </Slider>
  );
};

export default ImageCarousel