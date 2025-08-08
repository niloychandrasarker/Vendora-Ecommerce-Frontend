import { ThemeProvider } from "@mui/material";
import "./App.css";
import Navbar from "./customer/component/Navbar/Navbar";
import customTheme from "./theme/CustomeTheme";

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <div>
        <Navbar />
      </div>
    </ThemeProvider>
  );
}

export default App;
