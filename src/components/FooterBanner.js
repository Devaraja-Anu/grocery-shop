import React from 'react'
import appleStore from "../assets/icons/appleStore.png";
import googleStore from "../assets/icons/googlePlay.png";
import phoneSide from "../assets/iPhone 11 Pro/phoneSide.png";
import phoneV from "../assets/iPhone 11 Pro/phoneV.png";


const FooterBanner = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 place-items-center">
        {/* left Side */}
        <div className="my-10 px-5 sm:pl-10">
          <div className="">
            <p className="text-5xl md:text-6xl font-semibold font-main text-main">
              Shop faster with
            </p>
            <p className="text-5xl md:text-6xl font-semibold font-main text-main">
              Groceyish App
            </p>
            <p className="text-xl font-main font-semibold py-3 text-grey">
              Available in IOS & Android
            </p>
          </div>
          <div className="flex flex-col items-center sm:flex-row justify-around px-3">
            <img className="h-14 w-52 my-4" src={appleStore} alt="Apple" />
            <img className="h-16 w-60 " src={googleStore} alt="Google play" />
          </div>
        </div>

        {/* right Side */}

        <div className=" relative my-10 flex w-full">
          <img
            className="w-80 h-24rem hidden md:block object-scale-down relative z-10"
            src={phoneSide}
            alt="phone side"
          />
          <img
            className="w-60  h-22rem object-scale-down hidden lg:block  ml-64 absolute"
            src={phoneV}
            alt="phone straight"
          />
        </div>
      </div>
    </div>
  );
}

export default FooterBanner