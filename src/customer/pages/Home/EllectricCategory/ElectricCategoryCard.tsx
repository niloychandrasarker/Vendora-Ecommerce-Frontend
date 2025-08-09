const ElectricCategoryCard = () => {
  return (
    <div className="group bg-white rounded-xl border border-gray-200 p-6 cursor-pointer hover:shadow-xl hover:border-primary-color/20 transition-all duration-300 transform hover:-translate-y-1">
      <div className="flex flex-col items-center text-center space-y-4">
        {/* Image container with gradient background */}
        <div className="relative w-20 h-20 bg-gradient-to-br from-primary-color/5 to-primary-color/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-color/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          <img
            className="relative z-10 object-contain h-14 w-14 drop-shadow-sm"
            src="https://rukminim2.flixcart.com/image/312/312/xif0q/computer/x/9/j/-original-imahyjzh7m2zsqdg.jpeg?q=70"
            alt="Laptop"
          />
        </div>

        {/* Category title with enhanced typography */}
        <div className="space-y-1">
          <h3 className="text-base font-semibold text-gray-800 group-hover:text-primary-color transition-colors duration-200">
            Laptop
          </h3>
          <p className="text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Explore Collection
          </p>
        </div>

        {/* Subtle bottom accent */}
        <div className="w-8 h-0.5 bg-gradient-to-r from-primary-color/0 via-primary-color to-primary-color/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Corner decoration */}
      <div className="absolute top-2 right-2 w-2 h-2 bg-primary-color/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
};

export default ElectricCategoryCard;
