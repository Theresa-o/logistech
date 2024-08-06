import { useContext } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { ThemeContext } from "./context/ThemeProvider";
import CreateAccount from "./pages/create-account/CreateAccount";

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      id={theme || ""}
      className={`${
        theme === "dark"
          ? "bg-gray-400 text-gray-100"
          : "bg-white text-purple-200"
      } flex flex-col h-screen`}
    >
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      <CreateAccount theme={theme} />
    </div>
  );
}

export default App;
