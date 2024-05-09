import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
  };

  return (
    <div > {/* Ajusta el ancho del slider a 20% y lo alinea a la derecha */}
      <Slider {...settings}>
        <div className="overflow-hidden h-auto rounded-lg"> {/* Usamos h-auto para la altura automática basada en el contenido */}
          <img className="w-full object-cover " style={{ height: '65vh' }} src="https://i0.wp.com/www.ofertasahora.com/wp-content/uploads/2016/03/Promocion-de-vacaciones-GALERIAS-escalon-viaje-a-ISLA-BARU-colombia.jpg?ssl=1" alt="image-1" />
        </div>
        <div className="overflow-hidden h-auto rounded-lg">
          <img className="w-full object-cover" style={{ height: '65vh' }} src="https://th.bing.com/th/id/R.e738a0f37d44715b574878b0f89f74ad?rik=WOMJGOxww61Jxw&riu=http%3a%2f%2fmundotravel360.com%2fwp-content%2fuploads%2f2019%2f03%2funnamed-2019-03-29T132951.577.jpg&ehk=uOOGfPTLZyXGVtI4vlRPj5ziJzUhCRjx0E6qUGD8hzA%3d&risl=&pid=ImgRaw&r=0" alt="image-2" />
        </div>
        <div className="overflow-hidden h-auto rounded-lg">
          <img className="w-full object-cover" style={{ height: '65vh' }} src="https://i.pinimg.com/736x/02/48/c4/0248c4e0921e47992906cd7f2f643628--av-roma.jpg" alt="image-3" />
        </div>
      </Slider>
    </div>
  );
};

export default ImageSlider;
