import React from "react";
import NavBar from "./NavBar";

function Home() {
  return (
    <>
      <div
        className="min-h-screen flex flex-col bg-background/50" 
        style={{
          backgroundImage: `url('https://www.tripsavvy.com/thmb/I8Jknos29suM3Nm0MQDlNb2aecw=/2121x1414/filters:fill(auto,1)/RivieraMaya-5ace16741f4e13003c7c850b.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'brightness(80%)' 
        }}> 
        <div className="relative z-10 min-h-screen flex flex-col ">
          <div className="flex flex-col w-full h-1/5">
            <NavBar />
          </div>
          <div className="flex-grow flex h-4/5 justify-center items-center">
            <div className="flex flex-row w-full h-4/5">
              <div className="justify-center items-center container mx-auto w-3/5 font-bold">
                <div className="m-16 container mx-auto w-4/5 h-5/5">
                  
                </div>
              </div>
              <div className="w-1/5 ml-auto mr-8">
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
