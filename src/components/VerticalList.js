import star from '../assets/icons/Star.png'
import starGrey from "../assets/icons/starGrey.png"


const VerticalList = (props) => {
  return (
    <div>
      <div className="flex pt-5">
        <div>
          <img className="bg-[#F4F6FA]" src={props.item.img} alt="product" />
        </div>
        <div className="flex flex-col justify-center pl-4">
          <p className="text-xl">{props.item.heading}</p>
          <div className="flex h-4 items-center">
            <img className="px-1" src={star} alt="star-yellow" />
            <img className="px-1" src={star} alt="star-yellow" />
            <img className="px-1" src={star} alt="star-yellow" />
            <img className="px-1" src={star} alt="star-yellow" />
            <img className="px-1" src={starGrey} alt="star-grey" />
            <p className="text-grey">(4)</p>
          </div>
          <div className="flex ">
            <p className="text-green text-xl font-semibold">$2</p>
            <p className="pl-2 text-grey text-xl font-semibold">$3.99</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VerticalList