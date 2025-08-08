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

const Navbar = () => {
  const theme = useTheme();
  const islarge = useMediaQuery(theme.breakpoints.up("lg"));
  return (
    <>
      <Box>
        <div className="flex justify-between items-center px-5 lg:px-20 h-[70px] border-b">
          <div className="flex items-center gap-9">
            <div className="flex items-center gap-2 ">
              <IconButton>
                <MenuIcon />
              </IconButton>
              <div className="flex items-center gap-2 cursor-pointer">
                <h1 className="logo text-lg md:text-3xl text-primary-color font-semibold">
                  Vendora
                </h1>
              </div>

              <ul className="flex items-center font-medium text-gray-800">
                {["Men", "Women", "Home & Furniture", "Electronics"].map(
                  (item) => (
                    <li className="mainCategory hover:text-primary-color hover:border-b-2 h-[70px] px-4 border-primary-color flex items-center">
                      {item}
                    </li>
                  )
                )}
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
      </Box>
    </>
  );
};

export default Navbar;
