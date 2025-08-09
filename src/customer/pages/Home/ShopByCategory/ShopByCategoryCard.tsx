import "./ShopByCategory.css";

const ShopByCategoryCard = () => {
  return (
    <div className="flex flex-col items-center group cursor-pointer">
      {/* Image Container */}
      <div className="custome-border w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] rounded-full overflow-hidden bg-primary-color shadow-md group-hover:shadow-lg transition-shadow duration-300">
        <img
          className="rounded-full h-full w-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
          src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/19873492/2022/9/10/fd72939c-c379-4bab-9fd6-918c89172d161662797928387AquarelleBlue100CottonPrintedTableRunner1.jpg"
          alt="Kitchen & Table"
        />
      </div>

      {/* Title */}
      <h1 className="mt-4 text-lg font-semibold text-gray-800 group-hover:text-primary-color transition-colors duration-300">
        Kitchen & Table
      </h1>
    </div>
  );
};

export default ShopByCategoryCard;
