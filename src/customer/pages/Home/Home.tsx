import CategoryGrid from "./CategoryGrid/CategoryGrid";
import ElectricCategory from "./EllectricCategory/ElectricCategory";

const Home = () => {
  return (
    <>
      <div className="space-y-5 lg:space-y-2 relative pb-20">
        <ElectricCategory />
        <CategoryGrid />
      </div>
    </>
  );
};

export default Home;
