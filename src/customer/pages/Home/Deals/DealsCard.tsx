const DealsCard = () => {
  return (
    <div className="w-[17rem] cursor-pointer">
      <img
        className="border-x-[7px] border-t-[7px] border-pink-600 w-full h-[16rem] object-cover object-top"
        src="https://rukminim2.flixcart.com/image/416/416/xif0q/smartwatch/u/r/h/-original-imagyxxfgz52vzqn.jpeg?q=70&crop=false"
        alt=""
      />
      <div className="border-4 border-black bg-black text-white p-4 text-center">
        <p className="text-xl font-semibold">Smart Watch</p>
        <p className="text-3xl font-bold">20% OFF</p>
        <p className="text-balance text-lg">shop now</p>
      </div>
    </div>
  );
};

export default DealsCard;
