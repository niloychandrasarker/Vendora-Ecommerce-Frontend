import { Box } from "@mui/material";
import { electronicsLevelThree } from "../../../data/Category/LavelThree/electronicsLavelThree";
import { furnitureLevelThree } from "../../../data/Category/LavelThree/furnitureLavelTree";
import { menLevelThree } from "../../../data/Category/LavelThree/menLavelThree";
import { womenLevelThree } from "../../../data/Category/LavelThree/WomanLavelThree";
import { electronicsLevelTwo } from "../../../data/Category/lavelTwo/electronicsLavelTwo";
import { furnitureLevelTwo } from "../../../data/Category/lavelTwo/furnitueLavelTwo";
import { menLevelTwo } from "../../../data/Category/lavelTwo/menLavelTwo";
import { womenLevelTwo } from "../../../data/Category/lavelTwo/womanLaveltwo";

const categoryTwo:{[key: string]: any[]} = {
  men: menLevelTwo,
  women: womenLevelTwo,
  electronics: electronicsLevelTwo,
  home_furniture: furnitureLevelTwo,
};

const categoryThree:{[key: string]: any[]} = {
  men: menLevelThree,
  women: womenLevelThree,
  electronics: electronicsLevelThree,
  home_furniture: furnitureLevelThree,
};

const CategorySheet = ({selectedCategory, setShowSheet}:any) => {

  const childCategory = (category: any, parentCategoryId: any) => {
    return category.filter(
      (child: any) => child.parentCategoryId == parentCategoryId
    );
  };

  return (
    <Box
      sx={{ zIndex: 2 }}
      className="bg-white shadow-lg lg:h-[550px] overflow-y-auto"
    >
      <div className="flex text-sm flex-wrap">
        {categoryTwo[selectedCategory]?.map((item:any,index) => (

            <div  className={`p-8 lg:w-[20%] ${index % 2 === 0 ? "bg-slate-50" : "bg-white"}`}>
              <p className="text-primary-color mb-5 font-semibold">
                {item.name}
              </p>
              <ul className="space-y-3">
                {childCategory(categoryThree[selectedCategory], item.categoryId).map(
                  (item: any) => (
                    <div>
                      <li className="hover:text-primary-color cursor-pointer">
                        {item.name}
                      </li>
                    </div>
                  )
                )}
              </ul>
            </div>

        ))}
      </div>
    </Box>
  );
};

export default CategorySheet;
