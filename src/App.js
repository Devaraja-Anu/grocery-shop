import React from "react";
import heroBg from "../src/assets/heroBg.png";

import orange from "../src/assets/products/orange.png"
import apple from "../src/assets/products/apple.png"
import beans from "../src/assets/products/beans.png";
import carrots from "../src/assets/products/carrots.png";
import peach from "../src/assets/products/peach.png";
import potato from "../src/assets/products/potato.png";
import potato2 from "../src/assets/products/potato2.png";
import strawberry from "../src/assets/products/strawberry.png";
import tomato from "../src/assets/products/tomato.png";
import lettuce from "../src/assets/products/lettuce.png";
import radish from "../src/assets/products/radish.png";
import broccoli from "../src/assets/products/broccoli.png";

import star from "../src/assets/icons/Star.png"
import starGrey from "../src/assets/icons/starGrey.png";
import cart from "../src/assets/icons/cart.png";
import offer1 from "../src/assets/Offer1.png"
import offer2 from "../src/assets/Offer2.png"
import cartW from "../src/assets/icons/cartW.png"

import coffee from "../src/assets/products/rice.png";
import tea from "../src/assets/products/tea.png";
import meat from "../src/assets/products/meat.png";
import onion from "../src/assets/products/onion.png";
import VerticalList from "./components/VerticalList";

import tag from '../src/assets/icons/tag.png'
import recycle from '../src/assets/icons/recycle.png'
import freecar from '../src/assets/icons/freecar.png'

import logo from '../src/assets/icons/logo.png'

import phone from "../src/assets/icons/phone.png";
import mail from "../src/assets/icons/mail.png";
import clock from "../src/assets/icons/clock.png";
import mapPin from "../src/assets/icons/mapPin.png";

import payment from "../src/assets/icons/Payment.png";

import insta from "../src/assets/icons/insta.png"
import linkedin from "../src/assets/icons/linkedin.png"
import twitter from "../src/assets/icons/twitter.png"
import facebook from "../src/assets/icons/facebook.png";
import Banner from "./components/Banner";
import FooterBanner from "./components/FooterBanner";


const categories = [
  {
    img: peach,
    name: "Peach",
    units: "20",
    background: "bg-[#FEEFEA]",
  },
  {
    img: lettuce,
    name: "Vegetables",
    units: "220",
    background: "bg-[#FFF3FF]",
  },
  {
    img: strawberry,
    name: "Strawberry",
    units: "10",
    background: "bg-[#F2FCE4]",
  },
  {
    img: apple,
    name: "Apple",
    units: "40",
    background: "bg-[#FEEFEA]",
  },
  {
    img: orange,
    name: "Orange",
    units: "20",
    background: "bg-[#ECFFEC]",
  },
  {
    img: potato,
    name: "Potato",
    units: "23",
    background: "bg-[#FFFCEB]",
  },
  {
    img: carrots,
    name: "Carrots",
    units: "9",
    background: "bg-[#DEF9EC]",
  },
];

const Featured = [
  {
    img: radish,
    type: "Vegetables",
    name: "Radish 500g",
    priceNew: "$1",
    priceOld: "$1.99",
  },
  {
    img: potato2,
    type: "Fruits",
    name: "Tomatoes 200g",
    priceNew: "$1.50",
    priceOld: "$2.99",
  },
  {
    img: tomato,
    type: "Vegetables",
    name: "Broccoli 1kg",
    priceNew: "$1",
    priceOld: "$1.99",
  },
  {
    img: broccoli,
    type: "Vegetables",
    name: "Green Beans 250g",
    priceNew: "$1",
    priceOld: "$1.99",
  },
  {
    img: beans,
    type: "Vegetables",
    name: "Potatos 1kg",
    priceNew: "$.30",
    priceOld: "$0.99",
  },
];

const dealCards = [
  {
    buttonbg: "bg-[#FFD480]",
    topButtonText: "free delivery",
    heading: "Free delivery over $50",
    text1: "Shop 50$ product and get free",
    text2: "delivery anywhere",
    background: "bg-[#FFF5E1]",
    bottomButtonText: "Shop Now",
    img: offer1,
    pad:'pr-10'
  },
  {
    buttonbg: "bg-[#3BB77E]",
    topButtonText: "60% off",
    heading: "Organic Food",
    text1: "Save up to 60% off on your",
    text2: "first order",
    background: "bg-[#D2EFE1]",
    bottomButtonText: "Order Now",
    img: offer2,
    pad:'pt-7'
  },
];

const bestSells = [
  {
    deal: "Save 10%",
     dealStyle: "bg-[#FFD480] text-white",
    img: coffee,
    type: "Coffee & teas",
    heading: "Coffee 1kg",
    priceNow: "$20",
    priceOld: "$25",
    percent: 20 / 50,
    sold: "Sold: 20/50",
  },
  {
    deal: "Best Deal",
    dealStyle: "bg-[#FFD480] text-white",
    img: meat,
    type: "Meat",
    heading: "Halal Sausage 350g",
    priceNow: "$4",
    priceOld: "$10",
    percent: 7 / 20,
    sold: "Sold: 7/20",
  },
  {
    deal: "Save 4%",
   dealStyle:'bg-[#DEF9EC] text-green',
    img: tea,
    type: "Coffe & teas",
    heading: "Green Tea 250g",
    priceNow: "$3",
    priceOld: "$7",
    percent: 32 / 50,
    sold: "Sold: 32/50",
  },
  {
    deal: "Save 8%",
    dealStyle: "bg-[#FFD480] text-white",
    img: onion,
    type: "vegetables",
    heading: "Onion 1kg",
    priceNow: "$0.50",
    priceOld: "$2",
    percent: 2 / 10,
    sold: "Sold: 2/10",
  },
];

const topSells = [
  {
    img: orange,
    heading: "Orange 1kg",
  },
  {
    img: lettuce,
    heading: "Lettuce 1kg",
  },
  {
    img: strawberry,
    heading: "Strawberry 1kg",
  },
];

const topRated = [
  {
    img: orange,
    heading: "Orange 1kg",
  },
  {
    img: lettuce,
    heading: "Lettuce 1kg",
  },
  {
    img: apple,
    heading: "Apple 1kg",
  },
];

const trendingItems = [
  {
    img: carrots,
    heading: "Carrots 1kg",
  },
  {
    img: potato,
    heading: "Potato 1kg",
  },
  {
    img: orange,
    heading: "Orange 1kg",
  },
];

const recentlyAdded = [
  {
    img: apple,
    heading: "Apple 1kg",
  },
  {
    img: carrots,
    heading: "Carrots 1kg",
  },
  {
    img: strawberry,
    heading: "Strawberry 1kg",
  },
];

const footerTop = [
  {
    img: tag,
    heading: "Best Prices & Deals",
    text1: "Don't miss your daily amazing",
    text2: "deals and prices",
  },
  {
    img: recycle,
    heading: "Refundable",
    text1: "If your items have damage",
    text2: "we agree to fund it",
  },
  {
    img: freecar,
    heading: "Free Delivery",
    text1: "Do purchase over $50 and",
    text2: "get free delivery any",
  },
];

const socialMedia = [
  facebook,linkedin,insta,twitter
]



const App = () => {
  return (
    <div>
      {/* Hero image */}

      <div className="flex flex-col gap-y-10 sm:gap-y-5">
        <div>
          <Banner />
        </div>

        <div className="py-10 mt-10 sm:mt-28 lg:mt-5 ">
          <div className="flex  flex-col lg:flex-row justify-between items-start">
            <p className="font-main text-main text-3xl md:text-4xl font-semibold  pl-6 lg:pl-20">
              Explore Categories
            </p>

            <div className="flex mx-4 sm:mr-16">
              <button className="px-2 text-sm md:text-base xl:text-xl text-main font-semibold hover:text-green">
                All
              </button>
              <button className="px-2 text-sm md:text-base xl:text-xl text-main font-semibold hover:text-green">
                Vegetables
              </button>
              <button className="px-2 text-sm md:text-base xl:text-xl text-main font-semibold hover:text-green">
                Fruits
              </button>
              <button className="px-2 text-sm md:text-base xl:text-xl text-main font-semibold hover:text-green">
                Coffee & Tea
              </button>
              <button className="px-2 text-sm md:text-base xl:text-xl text-main font-semibold hover:text-green">
                Meat
              </button>
            </div>
          </div>

          {/* cards */}

          <div className=" flex justify-center" onMouseEnter={() => {}}>
            <div className=" grid gap-y-5 grid-flow-col grid-rows-1 gap-x-8 overflow-x-auto  mt-10 ">
              {categories.map((item) => {
                return (
                  <div
                    key={item.name}
                    className={` ${item.background} w-36 h-52 `}
                  >
                    <img className="px-6 pt-6" src={item.img} alt="product" />
                    <p className="text-xl text-center text-main font-semibold">
                      {item.name}
                    </p>
                    <p className="text-grey pl-7">{item.units} items</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Categories */}

      {/* FEATURED */}

      <div className="py-10">
        <div className="flex md:flex-row flex-col justify-between items-center  ">
          <p className=" font-main text-main text-3xl sm:text-4xl font-semibold md:pl-20">
            Featured Products
          </p>

          <div className="flex md:mr-20 pt-3">
            <button className="pr-4 text-sm md:text-xl text-main font-semibold hover:text-green">
              All
            </button>
            <button className="pr-4 text-sm md:text-xl text-main font-semibold hover:text-green">
              Vegetables
            </button>
            <button className="pr-4 text-sm md:text-xl text-main font-semibold hover:text-green">
              Fruits
            </button>
            <button className="pr-4 text-sm md:text-xl text-main font-semibold hover:text-green">
              Coffee & Tea
            </button>
            <button className="pr-4 text-sm md:text-xl text-main font-semibold hover:text-green">
              Meat
            </button>
          </div>
        </div>

        {/* cards */}

        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 grid-rows-2 xl:grid-rows-1 place-items-center">
          {Featured.map((item) => {
            return (
              <div className="mt-10 sm:w-56 border-2 border-[#ADADAD] border-opacity-25">
                <div className="">
                  <img
                    className="h-36 "
                    src={item.img}
                    alt="featured products"
                  />
                </div>
                <div>
                  <div className="pl-5 pb-2">
                    <p className="text-grey font-main">{item.type}</p>
                    <p className="text-main font-main font-semibold text-xl">
                      {item.name}
                    </p>
                  </div>
                  <div>
                    <div className="flex h-4 items-center pl-4">
                      <img className="px-1" src={star} alt="star-yellow" />
                      <img className="px-1" src={star} alt="star-yellow" />
                      <img className="px-1" src={star} alt="star-yellow" />
                      <img className="px-1" src={star} alt="star-yellow" />
                      <img className="px-1" src={starGrey} alt="star-grey" />
                      <p className="text-grey pl-2">(4)</p>
                    </div>
                    <p className="text-grey pl-5">
                      By
                      <span className="font-main pl-1 text-green">Mr.food</span>
                    </p>
                  </div>
                  <div className="flex justify-between mx-4 my-4">
                    <div className="flex items-center">
                      <p className="text-green font-main pr-2">
                        {item.priceNew}
                      </p>
                      <p className="text-grey font-main line-through">
                        {item.priceOld}
                      </p>
                    </div>
                    <div className="bg-[#DEF9EC] flex justify-around px-4 py-2 hover:scale-110">
                      <img
                        className="px-2 object-contain"
                        src={cart}
                        alt="Cart"
                      />
                      <p className="text-green font-main">Add</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/*Deals*/}

      <div className="flex justify-around flex-col items-center lg:flex-row">
        {dealCards.map((item) => {
          return (
            <div
              className={`mb-20 w-10/12 lg:w-5/12 flex justify-between items-end bg-[url(../src/assets/heroBg.png)] ${item.background}`}
            >
              <div className="relative z-10 my-5 ml-10 md:ml-5 md:w-full ">
                <div className={`${item.buttonbg} px-1 w-fit mb-5`}>
                  <p className="text-white px-2 py-1">{item.topButtonText}</p>
                </div>

                <div className="">
                  <p className="text-main font-main text-3xl font-semibold pb-3">
                    {item.heading}
                  </p>
                  <p className="font-main text-grey text-xl font-semibold">
                    {item.text1}
                  </p>
                  <p className="font-main text-grey text-xl font-semibold">
                    {item.text2}
                  </p>
                </div>


                <div className="py-3 px-4 w-fit mt-5 bg-green text-white flex ">
                  <p className="pr-4 text-lg">Shop Now </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <img
                  className={`relative z-10 ${item.pad} hidden md:block`}
                  src={item.img}
                  alt="dude with groceries"
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Best Sells */}

      <div>
        <div className=" flex md:flex-row flex-col justify-between items-center  ">
          <p className=" font-main text-main text-3xl sm:text-4xl font-semibold md:pl-20">
            Daily Best Sells
          </p>

          <div className="flex md:mr-20 pt-3">
            <button className="pr-4 text-sm md:text-xl text-main font-semibold hover:text-green">
              Featured
            </button>
            <button className="pr-4 text-sm md:text-xl text-main font-semibold hover:text-green">
              Popular
            </button>
            <button className="pr-4 text-sm md:text-xl text-main font-semibold hover:text-green">
              New
            </button>
          </div>
        </div>

        {/* Best Sells  CARDS */}

        <div className=" mx-10 lg:mx-20 grid place-items-center xl:grid-cols-5 xl:grid-rows-1 md:grid-cols-3 md:grid-rows-2 sm:grid-cols-2 md:gap-20 ">
          {bestSells.map((item) => {
            return (
              <div className="border-2 w-56 mt-10">
                <div>
                  <p className={`${item.dealStyle} text-white w-fit px-2 py-1`}>
                    {item.deal}
                  </p>
                  <img src={item.img} alt="product" />

                  <div>
                    <div className="pl-5 pb-2">
                      <p className="text-grey font-main">{item.type}</p>
                      <p className="text-main font-main font-semibold text-lg">
                        {item.heading}
                      </p>
                    </div>
                    <div>
                      <div className="flex h-4 items-center pl-4">
                        <img className="px-1" src={star} alt="star-yellow" />
                        <img className="px-1" src={star} alt="star-yellow" />
                        <img className="px-1" src={star} alt="star-yellow" />
                        <img className="px-1" src={star} alt="star-yellow" />
                        <img className="px-1" src={starGrey} alt="star-grey" />
                        <p className="text-grey pl-2">(4)</p>
                      </div>
                      <p className="text-grey pl-5">
                        By
                        <span className="font-main pl-1 py-1 text-green">
                          Mr.food
                        </span>
                      </p>
                    </div>

                    <div>
                      <div className="flex px-5 py-2">
                        <p className="text-xl font-main pr-2 font-semibold text-green">
                          {item.priceNow}
                        </p>
                        <p className="text-xl font-main font-semibold line-through text-grey">
                          {item.priceOld}
                        </p>
                      </div>
                      <div className="flex px-4 py-1">
                        <div
                          className={`h-2 w-[20%] bg-green  rounded-xl`}
                        ></div>
                        <div className={`h-2 w-full bg-[#F4F6FA]`}></div>
                      </div>
                      <p className="text-main font-main font-semibold pl-5">
                        {item.sold}
                      </p>

                      <div className="flex justify-center py-3">
                        <button className="bg-green h-10  text-white font-main flex justify-center items-center w-10/12 ">
                          <img
                            className="object-contain w-6 pr-2"
                            src={cartW}
                            alt="cart"
                          />
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          <div className="w-56 h-96 border-2 mb-3 mt-10 md:mt-0 ">
            <img
              className="bg-[#FFF7E6] w-56 h-card object-cover absolute"
              src={heroBg}
              alt="background"
            />
            <div className="relative font-main">
              <div className="w-56 flex flex-col justify-center items-center pt-10 font-semibold pb-5">
                <p className="text-4xl text-main pb-4">10% OFF</p>
                <p className="text-main">For new member sign up at</p>
                <p className="text-main">the first time</p>
              </div>

              <p className="font-semibold ml-4 py-1">Email Address</p>
              <input className="border-2 h-9 ml-4 mb-4" type="text" />
              <p className="font-semibold ml-4 py-1">Password</p>
              <input className="border-2 h-9 ml-4 mb-4" type="text" />

              <button className="bg-green mt-10 text-white font-main py-2 mx-4 w-48">
                Register Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* VERTICAL LISTS */}
      <div className=" grid sm:grid-cols-2 grid-rows-2 lg:grid-rows-1 lg:grid-cols-4 px-10 gap-x-10 place-items-center py-10">
        <div className="">
          <p className="font-main w-fit pt-10  text-main border-b-2 text-2xl   font-semibold border-green pb-4">
            Top Sells
          </p>

          {topSells.map((item) => {
            return (
              <div>
                <VerticalList key={item.heading} item={item} />
              </div>
            );
          })}
        </div>

        <div className="">
          <p className="font-main w-fit  pt-10 text-main border-b-2 border-green text-2xl font-semibold pb-4">
            Top Rated
          </p>

          {topRated.map((item) => {
            return (
              <div>
                <VerticalList key={item.heading} item={item} />
              </div>
            );
          })}
        </div>

        <div className="">
          <p className="font-main w-fit pt-10  text-main border-b-2 border-green text-2xl font-semibold pb-4">
            Trending Items
          </p>

          {trendingItems.map((item) => {
            return (
              <div>
                <VerticalList key={item.heading} item={item} />
              </div>
            );
          })}
        </div>

        <div className="">
          <p className="font-main w-fit pt-10  text-main border-b-2 border-green text-2xl font-semibold pb-4">
            Recently Added
          </p>

          {recentlyAdded.map((item) => {
            return (
              <div>
                <VerticalList key={item.heading} item={item} />
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Hero */}
      <div className=" bg-[#C5EAD9] bg-[url('../src/assets/heroBg.png')]">
        <FooterBanner />
      </div>

      {/* top Footer */}

      <div className="flex flex-col sm:flex-row sm:justify-around items-center pt-20 pb-10 border-b-2 mx-5 lg:mx-10 xl:mx-20">
        {footerTop.map((item) => {
          return (
            <div className="flex items-center py-5">
              <img
                className="w-14 h-14 mr-3"
                src={item.img}
                alt="green sprites"
              />
              <div className="mr-4">
                <p className="font-main text-main text-xl lg:text-2xl font-semibold">
                  {item.heading}
                </p>
                <p className="font-main lg:font-semibold text-grey">
                  {item.text1} {item.text2}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="pt-10 flex flex-col md:flex-row justify-between border-b-2  mx-10 lg:mx-20 pb-20">
        <div className="flex flex-row md:flex-col justify-around pr-10">
          <div className="flex pt-6 pr-4 md:pb-10">
            <img className="w-14 h-16 pr-2" src={logo} alt="company Logo" />
            <div>
              <p className="text-green text-3xl font-main">Groceryish</p>
              <p className="text-grey font-main">GROCERY</p>
            </div>
          </div>

          <div>
            <div className="flex items-center pb-2">
              <img className="pr-2 w-6 h-5" src={mapPin} alt="small icon" />
              <p>Address: 1762 School House Road</p>
            </div>
            <div className="flex items-center pb-2">
              <img className="pr-2 w-6 h-5" src={phone} alt="small icon" />
              <p>Call us: 1233-777</p>
            </div>
            <div className="flex items-center pb-2">
              <img className="pr-2 w-6 h-5" src={mail} alt="small icon" />
              Email: groceryish@contact.com
            </div>
            <div className="flex items-center pb-2">
              <img className="pr-2 w-6 h-5" src={clock} alt="small icon" />
              <p>Work hours: 8:00-20:00, Sunday-Thursday</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between w-full pt-5 px-10">
          <div>
            <p className="pb-5 text-main font-main font-semibold text-2xl lg:text-3xl">
              Account
            </p>
            <p className="pt-1">Wishlist</p>
            <p className="pt-1">Cart</p>
            <p className="pt-1">Track Order</p>
            <p className="pt-1">Shipping Details</p>
          </div>

          <div>
            <p className="font-main text-main pb-5 font-semibold  text-2xl lg:text-3xl">
              Useful links
            </p>
            <p className="pt-1">About Us</p>
            <p className="pt-1">Contact</p>
            <p className="pt-1">Hot deals</p>
            <p className="pt-1">Promotions</p>
            <p className="pt-1">New products</p>
          </div>

          <div>
            <p className="font-main text-main pb-5 font-semibold  text-2xl lg:text-3xl">
              Help Center
            </p>
            <p className="pt-1">Payments</p>
            <p className="pt-1">Refund</p>
            <p className="pt-1">Checkou</p>
            <p className="pt-1">Shipping</p>
            <p className="pt-1">Q&A</p>
            <p className="pt-1">Privacy Policy</p>
          </div>
        </div>
      </div>

      {/* Footer */}

      <div className="flex flex-col md:flex-row items-center justify-between px-5 lg:px-20  py-5">
        <div>
          <p className="pb-4 md:font-main text-sm">
            {"\u00A9"}2022, All rights Reserved{" "}
          </p>
        </div>
        <img
          className="pb-4 object-contain"
          src={payment}
          alt="payment options"
        />

        <div className="flex">
          {socialMedia.map((item) => {
            return (
              <div className="bg-green w-10 h-10 rounded-full flex justify-center items-center mx-1">
                <img src={item} alt="social media logos" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
