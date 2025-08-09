import {
  Avatar,
  Box,
  Button,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

import {
  AddShoppingCart,
  FavoriteBorder,
  Storefront,
} from "@mui/icons-material";
import CategorySheet from "./CategorySheet";
import { mainCategory } from "../../../data/Category/MainCategory";
import { useState } from "react";

const Navbar = () => {
  const theme = useTheme();
  const islarge = useMediaQuery(theme.breakpoints.up("lg"));
  const [selectedCategory, setSelectedCategory] = useState("men");
  const [showCategorySheet, setShowCategorySheet] = useState(false);
  return (
    <>
      <Box
        sx={{ zIndex: 2 }}
        className=" sticky top-0 left-0 right-0 bg-white "
      >
        <div className="flex justify-between items-center px-5 lg:px-20 h-[70px] border-b">
          <div className="flex items-center gap-9">
            <div className="flex items-center gap-2 ">
              {!islarge && (
                <IconButton>
                  <MenuIcon />
                </IconButton>
              )}
              <div className="flex items-center gap-2 cursor-pointer">
                <h1 className="logo text-lg md:text-3xl text-primary-color font-semibold">
                  Vendora
                </h1>
              </div>

              <ul className="flex items-center font-medium text-gray-800">
                {mainCategory.map((item) => (
                  <li
                    onMouseLeave={() => {
                      setShowCategorySheet(false);
                    }}
                    onMouseEnter={() => {
                      setShowCategorySheet(true);
                      setSelectedCategory(item.categoryId);
                    }}
                    className="mainCategory hover:text-primary-color hover:border-b-2 h-[70px] px-4 border-primary-color flex items-center"
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex items-center gap-1 lg:gap-6">
            <IconButton>
              <SearchIcon sx={{ fontSize: 30 }} />
            </IconButton>

            {false ? (
              <Button className="flex items-center gap-2">
                <Avatar
                  sx={{ width: 30, height: 30 }}
                  src="https://media.licdn.com/dms/image/v2/D5635AQEVKWSry5HCZw/profile-framedphoto-shrink_400_400/B56ZfvYzfiHQAg-/0/1752067946826?e=1755259200&v=beta&t=LAR0799JvXA78XggI4MTfSX-BdN0gh3FPq5QxJGWUXU"
                />
                <h1 className="font-semibold text-lg hidden lg:block">Niloy</h1>
              </Button>
            ) : (
              <Button variant="contained">Login</Button>
            )}

            <IconButton>
              <FavoriteBorder sx={{ fontSize: 30 }} />
            </IconButton>
            <IconButton>
              <AddShoppingCart
                sx={{ fontSize: 30 }}
                className="text-gray-700"
              />
            </IconButton>

            {islarge && (
              <Button
                startIcon={<Storefront />}
                variant="outlined"
                className="ml-2"
              >
                Become a Seller
              </Button>
            )}
          </div>
        </div>

        {showCategorySheet && (
          <div
            onMouseLeave={() => setShowCategorySheet(false)}
            onMouseEnter={() => setShowCategorySheet(true)}
            className="categorySheet absolute top-[4.41rem] left-20 right-20 border"
          >
            <CategorySheet selectedCategory={selectedCategory} />
          </div>
        )}
      </Box>
    </>
  );
};

export default Navbar;
