import { useState } from "react";
import signIn from "../../assets/images/signIn.svg";
import Username from "../../assets/images/username.svg";
import EyeCheckerIcon from "../../assets/images/eyeChecker.svg";
import EyeOffIcon from "../../assets/images/eyeOff.svg";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [pwInputType, setPwInputType] = useState("password");

  const onPasswordVisibleClick = (e: MouseEvent) => {
    e.preventDefault();
    setPwInputType(pwInputType === "password" ? "text" : "password");
  };

  const inputIcon = (
    <span
      className="cursor-pointer absolute right-4"
      onClick={(e: any) => onPasswordVisibleClick(e)}
    >
      <img
        src={pwInputType === "password" ? EyeOffIcon : EyeCheckerIcon}
        alt="Toggle Password Visibility"
        className="w-4 h-4 "
      />
    </span>
  );

  return (
    <div className="bg-purple-20">
      <div className="rounded-lg lg:max-w-[75%] flex justify-center items-center mx-auto  h-screen ">
        {" "}
        <div className="flex  ">
          <div className="flex-1 shadow-xl hidden md:block rounded-l-lg bg-white w-1/2">
            <div className="flex justify-center items-center mx-auto my-10">
              <p>Logistech</p>
            </div>
            <div className="mt-40 mx-auto w-[80%]">
              <img
                src={signIn}
                className="object-cover "
                alt="Sign in Illustration"
              />
            </div>
          </div>
          <div className="flex-1 bg-purple-200 text-center rounded-r-lg">
            <div className="flex justify-center md:hidden items-center mx-auto my-4 md:my-10">
              <p className="text-white">Logistech</p>
            </div>
            <div>
              <h4 className="text-white text-base md:text-lg mt-4 md:mt-8 mb-1">
                Welcome Back!
              </h4>
              <p className="text-white mb-3 text-base ">
                Sign in to continue with Logistech
              </p>
            </div>
            <form className="mx-12">
              <div className="mb-4 text-left text-white">
                <label htmlFor="username" className="block mb-1 text-base">
                  Username
                </label>
                <div className="relative flex items-center">
                  <input
                    type="text"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter your username"
                    className="w-full p-3 rounded-md bg-purple-100 hover:outline-none focus:outline-none text-purple-50 font-light text-sm"
                  />
                  <img
                    src={Username}
                    alt="username icon"
                    className="w-4 h-4 absolute right-4"
                  />
                </div>
              </div>

              <div className="mb-4 text-left text-white">
                <label htmlFor="password" className="block mb-1 text-base">
                  Password
                </label>

                <div className="relative flex items-center">
                  <input
                    type={pwInputType}
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="w-full p-3 rounded-md bg-purple-100 hover:outline-none focus:outline-none text-purple-50 font-light text-sm"
                  />

                  {inputIcon}
                </div>
              </div>

              <div className="flex flex-col md:flex-row justify-between text-white leading-3 text-sm md:text-base mt-6 mb-4">
                <div className="flex items-center mb-2 md:mb-0">
                  <input type="checkbox" name="t&c" id="t&c" />
                  <label htmlFor="t&c" className="ml-2">
                    Remember me
                  </label>
                </div>
                <div className="mt-2 md:mt-0">
                  <a href="/forgot-password" className="underline">
                    Forgot password?
                  </a>
                </div>
              </div>

              <div className="mt-5">
                <button
                  type="button"
                  className="w-full p-3 rounded-md bg-white"
                >
                  Sign Up
                </button>
              </div>
              <p className="text-white text-sm leading-3 mb-10 md:mb-2 mt-4">
                Don't have an account?{" "}
                <Link to="/" className="underline">
                  Sign Up{" "}
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
