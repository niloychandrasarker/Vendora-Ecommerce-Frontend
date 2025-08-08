const ElectricCategoryCard = () => {
  return (
    <div className="group relative bg-white rounded-xl border border-gray-200/60 p-6 cursor-pointer transition-all duration-300 hover:border-gray-300 hover:shadow-lg overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-gray-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      <div className="relative z-10 flex flex-col items-center text-center space-y-4">
        {/* Icon container */}
        <div className="w-20 h-20 bg-gray-50 rounded-2xl flex items-center justify-center group-hover:bg-gray-100 transition-colors duration-300">
          <img
            className="object-contain h-14 w-14 transition-transform duration-300 group-hover:scale-105"
            src="https://rukminim2.flixcart.com/image/312/312/xif0q/computer/x/9/j/-original-imahyjzh7m2zsqdg.jpeg?q=70"
            alt="Laptop"
          />
        </div>

        {/* Category title */}
        <div>
          <h3 className="text-sm font-semibold text-gray-900 group-hover:text-gray-700 transition-colors duration-200">
            Laptop
          </h3>
        </div>
      </div>

      {/* Subtle hover indicator */}
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
    </div>
  );
};

export default ElectricCategoryCard;
