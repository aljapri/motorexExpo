import React from "react";

const Sponsors = () => {
  return (
    <div>
      <div
        className="relative h-lvh  p-8  overflow-hidden"
        style={{
          backgroundImage: "url('/sponsorBg.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/50 z-0"></div>

        <div className="absolute top-50 left-0 z-10  text-white max-w-3xl text-left pl-4">
          <div>
            <h1
              className="text-3xl md:text-5xl font-bold uppercase tracking-wider mb-4"
              style={{
                textShadow:
                  "0 0 10px #ed1d25, 0 0 20px #ed1d25, 0 0 30px #ed1d25, 0 0 40px #ed1d25, 0 0 50px #ed1d25, 0 0 60px #ed1d25, 0 0 70px #ed1d25, 0 0 90px #ed1d25",
              }}
            >
              Sponsorship
            </h1>
            <h1
              className="text-3xl md:text-5xl font-bold uppercase tracking-wider mb-4"
              style={{
                textShadow:
                  "0 0 10px #ed1d25, 0 0 20px #ed1d25, 0 0 30px #ed1d25, 0 0 40px #ed1d25, 0 0 50px #ed1d25, 0 0 60px #ed1d25, 0 0 70px #ed1d25, 0 0 90px #ed1d25",
              }}
            >
              Opportunities
            </h1>
          </div>
          <br />
          <div>
            <h1
              className="text-3xl md:text-5xl font-bold uppercase tracking-wider mb-4"
              style={{
                textShadow:
                  "0 0 10px #ed1d25, 0 0 20px #ed1d25, 0 0 30px #ed1d25, 0 0 40px #ed1d25, 0 0 50px #ed1d25, 0 0 60px #ed1d25, 0 0 70px #ed1d25, 0 0 90px #ed1d25",
              }}
            >
              Make Your
            </h1>
            <h1
              className="text-3xl md:text-5xl font-bold uppercase tracking-wider mb-4"
              style={{
                textShadow:
                  "0 0 10px #ed1d25, 0 0 20px #ed1d25, 0 0 30px #ed1d25, 0 0 40px #ed1d25, 0 0 50px #ed1d25, 0 0 60px #ed1d25, 0 0 70px #ed1d25, 0 0 90px #ed1d25",
              }}
            >
              PARTICIPATION ...
            </h1>
          </div>

          <button className="bg-[#ed1c23] mt-5 text-sm text-white  py-3 px-5 rounded-xl uppercase tracking-wide transition-all duration-300 transform hover:bg-[#ed1c2381] shadow-lg hover:shadow-xl">
            Become a Sponsor
          </button>
        </div>
      </div>
      <div
        className="relative h-lvh  p-8  overflow-hidden"
        style={{
          backgroundImage: "url('/sponsorBg-2.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/50 z-0"></div>

        <div className="absolute top-50 text-wrap right-0 z-10  px-10 text-white max-w-3xl text-left pl-4">
          <div>
            <h1
              className="text-lg font-bold uppercase tracking-wider mb-4"
              style={{
                textShadow:
                  "0 0 10px #ed1d25, 0 0 20px #ed1d25, 0 0 30px #ed1d25, 0 0 40px #ed1d25, 0 0 50px #ed1d25, 0 0 60px #ed1d25, 0 0 70px #ed1d25, 0 0 90px #ed1d25",
              }}
            >
              ELEVATE YOUR BRAND AT THE
            </h1>
            <h1
              className="text-lg font-bold uppercase tracking-wider mb-4"
              style={{
                textShadow:
                  "0 0 10px #ed1d25, 0 0 20px #ed1d25, 0 0 30px #ed1d25, 0 0 40px #ed1d25, 0 0 50px #ed1d25, 0 0 60px #ed1d25, 0 0 70px #ed1d25, 0 0 90px #ed1d25",
              }}
            >
              JEDDAH INTERNATIONAL MOTOR SHOW
            </h1>
          </div>
          <br />
          <div>
            <p
              className="text-[10px]  font-bold uppercase max-w-[400px] tracking-wider mb-4 text-wrap"
  
            >
              Jeddah International Motor Show offers exceptional opportunities through sponsorship packages that are designed to guarantee our success partners achieve the highest possible return from sponsoring the exhibition, in addition to introducing the sponsor’s services and products in a distinct way.
            </p>
            <h1
              className="text-sm  font-bold uppercase tracking-wider mb-4 mt-20"
 
            >
              SPONSORSHIP PACKAGES

            </h1>
            <div className="flex flex-row space-x-5 font-bold flex-wrap space-y-5">
              <h2 className="text-red-700">STRATEGIC</h2>
              <h2 className="text-red-700">DIAMOND</h2>
              <h2 className="text-red-700">PLATINUM</h2>
              <h2 className="text-red-700">GOLD</h2>
            </div>
          </div>
          

          <button className="bg-[#ed1c23] mt-5 text-sm text-white  py-3 px-5 rounded-xl uppercase tracking-wide transition-all duration-300 transform hover:bg-[#ed1c2381] shadow-lg hover:shadow-xl">
            Become a Sponsor
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
