import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/Slider/slider.css"
import phoneIcon from '../../image/redesSociales/phone-calling-rounded-svgrepo-com.svg';
import instaIcon from '../../image/redesSociales/instagram-1-svgrepo-com.svg';
import faceIcon from '../../image/redesSociales/facebook-color-svgrepo-com.svg';
import gmailIcon from '../../image/redesSociales/gmail-svgrepo-com.svg';
import ubiIcon from '../../image/redesSociales/maps-svgrepo-com.svg';
const TextoSlider = () => {
  const settings = {
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true
  };

  return (
    <div> {/* Ajusta el ancho del slider a 20% y lo alinea a la derecha */}
  <Slider {...settings}>
    {/* Slide de Bienvenida */}
    <div className="overflow-hidden h-auto rounded-lg fade-background backdrop-saturate-110">
      <div className="w-full object-cover text-white text-center flex items-center flex-col" style={{ height: '50vh' }}>
        <h1 className='text-4xl my-20'>Bienvenidos a El Avionazo</h1>
        <p className="w-4/5 px-6 text-xl">
          Tu puerta de entrada al mundo desde El Avionazo. Ubicados en Guatemala, conectamos vidas y culturas, ofreciendo una experiencia segura y confortable. Agradecemos tu preferencia y confianza, juntos, vamos más lejos.
        </p>
      </div>    
    </div>
    {/* Slide de Servicios que Ofrecemos */}
    <div className="overflow-hidden h-auto rounded-lg fade-background backdrop-saturate-110">
      <div className="w-full object-cover text-white text-center flex items-center flex-col" style={{ height: '50vh' }}>
        <h1 className='text-4xl my-20'>Nuestros Servicios</h1>
        <p className="w-4/5 px-6 text-xl">
          Explora Guatemala y el Mundo con nosotros. Ofrecemos viajes a todo el país, con opciones de clase VIP para una experiencia de lujo, y clase económica para un viaje cómodo y accesible. Descubre la belleza de nuestro país y del mundo con El Avionazo.
        </p>
      </div>
    </div>
    {/* Slide de Contáctanos */}
    <div className="overflow-hidden h-auto rounded-lg fade-background backdrop-saturate-110">
  <div className="w-full object-cover text-white text-center flex flex-col justify-center items-center" style={{ height: '50vh' }}>
    <h1 className='text-4xl mb-4'>Contáctanos</h1>
    <div className="flex w-full justify-evenly ">
      <div>
        <p className="text-xl mb-2">
          ¿Listo para tu próximo viaje?
        </p>
        <div className="flex  gap-2 mb-4">
          <img src={phoneIcon} alt="Teléfono" className="w-8 h-8"/>
          <span>+502-6548-6879</span>
        </div>
        <div className="flex items-center gap-2">
          <img src={gmailIcon} alt="Correo" className="w-8 h-8"/>
          <span>elAvionazo502@gmail.com</span>
        </div>
      </div>
      <div>
        <p className="text-xl mb-2">Síguenos en redes sociales:</p>
        <div className="flex flex-col  gap-2">
          <div className="flex items-center gap-2">
            <img src={instaIcon} alt="Instagram" className="w-8 h-8"/>
            <span>Instagram ElAvionazo_502</span>
          </div>
          <div className="flex items-center gap-2">
            <img src={faceIcon} alt="Facebook" className="w-8 h-8"/>
            <span>Facebook El Avionazo</span>
          </div>
          <div className="flex items-center gap-2">
            <img src={ubiIcon} alt="Ubicación" className="w-8 h-8"/>
            <span>Encuéntranos en el mapa</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  </Slider>
</div>

  );
};

export default TextoSlider;