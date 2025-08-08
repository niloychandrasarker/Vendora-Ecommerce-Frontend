import { ThemeProvider } from "@mui/material";
import "./App.css";
import Navbar from "./customer/component/Navbar/Navbar";
import customTheme from "./theme/CustomeTheme";
import Home from "./customer/pages/Home/Home";

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <div>
        <Navbar />
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
