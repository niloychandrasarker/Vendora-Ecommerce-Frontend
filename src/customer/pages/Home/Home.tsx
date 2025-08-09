import { Storefront } from "@mui/icons-material";
import CategoryGrid from "./CategoryGrid/CategoryGrid";
import Deals from "./Deals/Deals";
import ElectricCategory from "./EllectricCategory/ElectricCategory";
import ShopByCategory from "./ShopByCategory/ShopByCategory";
import { Button } from "@mui/material";

const Home = () => {
  return (
    <>
      <div className="space-y-5 lg:space-y-2 relative ">
        <ElectricCategory />
        <CategoryGrid />

        <section className="mt-20">
          <div className="text-center pb-4 pt-10 lg:pb-10">
            <h1 className="text-3xl lg:text-5xl font-bold bg-gradient-to-r from-primary-color to-purple-600 bg-clip-text text-transparent mb-4">
              Special Deals
            </h1>
            <p className="text-lg text-gray-600 max-w-md mx-auto">
              Amazing offers and exclusive discounts
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-color to-purple-500 mx-auto mt-4 rounded-full"></div>
          </div>
          <Deals />
        </section>

        <section className="py-20">
          <div className="text-center pb-5  lg:pb-20">
            <h1 className="text-3xl lg:text-5xl font-bold bg-gradient-to-r from-primary-color to-purple-600 bg-clip-text text-transparent mb-4">
              Shop by Category
            </h1>
            <p className="text-lg text-gray-600 max-w-lg mx-auto">
              Explore our diverse collection across multiple categories
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-color to-purple-500 mx-auto mt-4 rounded-full"></div>
          </div>
          <ShopByCategory />
        </section>

        <section className="lg:px-20  relative h-[200px] lg:h-[500px] object-cover">
          <img
            className="w-full h-full"
            src="/assets/BecomeSeller.png"
            alt=""
          />

          <div className="absolute top-1/2 left-4 lg:left-[15rem] transform -translate-y-1/2 text-black max-w-lg space-y-4 lg:space-y-6">
            <h1 className="text-2xl lg:text-5xl font-bold leading-tight drop-shadow-lg">
              Sell your Product
            </h1>
            <p className="text-lg lg:text-2xl font-semibold">
              With{" "}
              <span className="text-primary-color font-bold bg-white/20 px-3 py-1 rounded-lg backdrop-blur-sm">
                Vendora
              </span>
            </p>
            <p className="text-sm lg:text-lg opacity-90 leading-relaxed">
              Join thousands of sellers and grow your business
            </p>

            <div className="pt-6">
              <Button
                startIcon={<Storefront />}
                variant="contained"
                size="large"
                className="!bg-primary-color !text-white !font-bold !px-8 !py-3 !rounded-full !shadow-xl hover:!bg-blue-700 !transition-all !duration-300 !transform hover:!scale-105"
              >
                Become Seller
              </Button>
            </div>
          </div>
        </section>

        {/* Spacer */}
        <div className="py-6"></div>

        {/* Simple Footer */}
        <footer className="bg-gray-800 text-white py-8">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h3 className="text-xl font-bold text-primary-color mb-2">
              Vendora
            </h3>
            <p className="text-gray-300 mb-4">
              Your trusted marketplace for quality products
            </p>
            <p className="text-gray-400 text-sm">
              © 2025 Vendora. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home;
