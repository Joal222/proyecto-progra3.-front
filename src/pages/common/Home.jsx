import React from "react";
import NavBar from "./NavBar";
import ImageSlider from "../../components/Slider/ImageSlider";
function Home() {
  return (
    <>
      <div
        className="min-h-screen flex flex-col bg-background/50" 
        style={{
          backgroundImage: `url('https://www.tripsavvy.com/thmb/I8Jknos29suM3Nm0MQDlNb2aecw=/2121x1414/filters:fill(auto,1)/RivieraMaya-5ace16741f4e13003c7c850b.jpg')`,
          backgroundSize: 'cover', // Asegura que la imagen cubra todo el div
          backgroundPosition: 'center', // Centra la imagen en el div
          backgroundRepeat: 'no-repeat', // Evita que la imagen se repita
          filter: 'brightness(80%)' 
        }}> 
          <div className="min-h-screen flex flex-col">
            <div className="flex flex-col w-full h-1/5">
              <NavBar />
            </div>
            <div className="flex-grow flex h-3/5 justify-center items-center">
              <div className="flex flex-row w-full h-full">
                <div className="container mx-auto w-3/5 bg-background/25 backdrop-saturate-110 font-bold">
                  <h1 className="text-4xl text-center mt-20">Welcome to MyApp</h1>
                  
                  <p className="text-center mt-5">
                    This is a simple app made with NextUI
                  </p>
                  <p>
                    hoola
                  </p>
                </div>
                <div className="w-1/5 ml-auto mr-8" >
                  <ImageSlider/>
                </div>
              </div>  
            </div>
          </div>
      </div>
    </>
  );
}
export default Home;
