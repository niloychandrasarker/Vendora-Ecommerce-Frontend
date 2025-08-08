import ElectricCategoryCard from "./ElectricCategoryCard";

const ElectricCategory = () => {
  return (
    <div className="flex flex-wrap justify-between  gap-5 py-5 lg:px-20 border-b">
      {[1, 1, 1, 1, 1, 1, 1].map((item, index) => (
        <ElectricCategoryCard key={index} />
      ))}
    </div>
  );
};

export default ElectricCategory;
