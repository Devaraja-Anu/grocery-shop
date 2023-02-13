import heroBg from "../assets/heroBg.png"
import heroVeg from "../assets/heroVeg.png"

const Banner = () => {
  return (
    <div>
      <div className="h-80 lg:h-96 absolute">
        <img
          className=" w-screen mb-10 h-full bg-[#C5EAD9] object-cover opacity-50"
          src={heroBg}
          alt="hero"
        />
      </div>

      <div className="relative z-10 h-full flex justify-between ">
        <div className="ml-10 sm:ml-20 h-477px flex flex-col justify-center ite md:items-start">
          <p className="text-2xl pt-10 md:text-3xl lg:text-5xl xl:text-6xl font-bold text-main font-main">
            Don't miss our daily amazing deals.
          </p>
          {/* <p className="text-2xl md:text-3xl lg:text-5xl xl:text-6xl font-bold text-main font-main">
            amazing deals.
          </p> */}

          <p className="pb-2 md:text-2xl pt-3 font-semibold text-[#838383]  font-main">
            Save up to 60% off on your first order
          </p>

          {/* email */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center pt-8">
            <input
              className=" h-10 w-60  sm:w-96  border-2 md:h-14 xl:w-96 px-5"
              placeholder="Enter your Email address"
              type="text"
            />
            <button className="h-10  w-60  sm:w-auto md:h-14 px-5 mt-4 sm:mt-0 bg-[#3BB77E] text-white  font-main">
              Subscribe
            </button>
          </div>
        </div>

        <div>
          <img
            className="object-cover hidden md:block h-[240px] lg:h-[340px] xl:h-[400px] "
            src={heroVeg}
            alt="hero veg"
          />
        </div>
      </div>
    </div>
  );
}

export default Banner