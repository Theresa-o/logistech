import { useState } from "react";
import signUp from "../../assets/images/signup.svg";
import { Link } from "react-router-dom";
import { DarkModeProps } from "../../types/types";

const CreateAccount = ({ theme }: DarkModeProps) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div
      className={`${
        theme === "dark" ? "bg-gray-500 text-white" : "bg-purple-20 text-black"
      } flex-grow flex justify-center items-center`}
    >
      <div className="rounded-lg lg:max-w-[75%] flex justify-center items-center mx-auto ">
        {" "}
        <div className="flex">
          <div
            className={`flex-1 shadow-xl hidden md:block rounded-l-lg ${
              theme === "dark" ? "bg-purple-200 text-gray-500" : "bg-white"
            } w-1/2`}
          >
            <div className="flex justify-center items-center mx-auto my-10">
              <p>Logistech</p>
            </div>
            <div className="mt-40 mx-auto w-[80%]">
              <img
                src={signUp}
                className="object-cover "
                alt="Sign Up Illustration"
              />
            </div>
          </div>
          <div
            className={`flex-1 ${
              theme === "dark" ? "bg-gray-400" : "bg-purple-200"
            } rounded-r-lg text-center w-1/2`}
          >
            <div className="flex justify-center md:hidden items-center mx-auto my-10">
              <p
                className={`${
                  theme === "dark" ? "text-white" : "text-gray-500"
                }`}
              >
                Logistech
              </p>
            </div>
            <div>
              <h4 className="text-white text-base md:text-lg mt-8 mb-1">
                Let's get started
              </h4>
              <p className="text-white mb-3 text-base ">
                Sign up and make money with your car
              </p>
            </div>
            <form className="mx-12">
              <div className="mb-4 text-left text-white">
                <label htmlFor="username" className="block mb-1 text-base">
                  Username
                </label>

                <input
                  type="text"
                  name="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter your username"
                  className={`w-full p-3 rounded-md ${
                    theme === "dark"
                      ? "bg-purple-200 text-white"
                      : "bg-purple-100 text-purple-50"
                  } hover:outline-none focus:outline-none font-light text-sm`}
                />
              </div>
              <div className="mb-4 text-left text-white">
                <label htmlFor="email" className="block mb-1 text-base">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className={`w-full p-3 rounded-md ${
                    theme === "dark"
                      ? "bg-purple-200 text-white"
                      : "bg-purple-100 text-purple-50"
                  } hover:outline-none focus:outline-none font-light text-sm`}
                />
              </div>
              <div className="mb-4 text-left text-white">
                <label htmlFor="password" className="block mb-1 text-base">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className={`w-full p-3 rounded-md ${
                    theme === "dark"
                      ? "bg-purple-200 text-white"
                      : "bg-purple-100 text-purple-50"
                  } hover:outline-none focus:outline-none font-light text-sm`}
                />
              </div>
              <div className="mb-4 text-left text-white">
                <input type="checkbox" name="t&c" id="t&c" />
                <label htmlFor="t&c" className="mx-1 leading-3 text-sm">
                  I agree to the{" "}
                  <span className="underline">Terms and conditions</span>
                </label>
              </div>
              <div className="my-5">
                <button
                  type="button"
                  className={`${
                    theme === "dark"
                      ? "bg-purple-200 text-white"
                      : "bg-white text-black"
                  } w-full p-3 rounded-md`}
                >
                  Sign Up
                </button>
              </div>
              <p className="text-white text-sm leading-3 mb-10 mt-4">
                Already have an account?{" "}
                <Link to="/sign-in" className="underline">
                  Sign In{" "}
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
