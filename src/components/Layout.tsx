import { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";
import Navbar from "./Navbar";

const Layout = ({ children }: any) => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("ThemeContext must be used within a ThemeProvider");
  }

  const { theme, toggleTheme } = context;

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
      <main className="flex-grow">{children}</main>
    </div>
  );
};

export default Layout;
