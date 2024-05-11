import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/Slider/slider.css"

const TextoSlider = () => {
  const settings = {
    dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true
  };

  return (
    <div > {/* Ajusta el ancho del slider a 20% y lo alinea a la derecha */}
      <Slider {...settings}>
        <div className="overflow-hidden h-auto rounded-lg fade-background backdrop-saturate-110">
          <h1 className="w-full object-cover text-white" style={{ height: '50vh' }}>hola</h1>
        </div>
        <div className="overflow-hidden h-auto rounded-lg fade-background backdrop-saturate-110">
          <h1 className="w-full object-cover text-white" style={{ height: '50vh' }}>como</h1>
        </div>
        <div className="overflow-hidden h-auto rounded-lg fade-background backdrop-saturate-110">
          <h1 className="w-full object-cover text-white" style={{ height: '50vh' }}>estas</h1>
        </div>
      </Slider>
    </div>
  );
};

export default TextoSlider;