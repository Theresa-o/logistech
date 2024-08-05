import { useState } from "react";
import signUp from "../../assets/images/signup.svg";
import Logo from "../../assets/images/logo2.svg";

const CreateAccount = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="bg-red  rounded-lg ">
      {" "}
      <div className="flex  bg-purple-20 ">
        <div className="flex-1 shadow-xl hidden md:block rounded-l-lg">
          <div className="flex justify-center items-center">
            <img src={Logo} alt="Logistech logo" className="h-60 w-60" />
          </div>
          <div>
            <img
              src={signUp}
              className=" object-contain"
              alt="Sign Up Illustration"
            />
          </div>
        </div>
        <div className="flex-1 bg-purple-200  rounded-r-lg ">
          <div className="flex justify-center items-center md:hidden">
            <img src={Logo} alt="Logistech logo" className="h-60 w-60" />
          </div>
          <div>
            <h4 className="text-white text-xl mt-8 mb-1">Let's get started</h4>
            <p className="text-white mb-3">
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
                className="w-full p-3 rounded-md bg-purple-100 hover:outline-none focus:outline-none text-purple-50 font-light text-sm"
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
                className="w-full p-3 rounded-md bg-purple-100 hover:outline-none focus:outline-none text-purple-50 font-light text-sm"
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
                className="w-full p-3 rounded-md bg-purple-100 hover:outline-none focus:outline-none text-purple-50 font-light text-sm"
              />
            </div>
            <div className="mb-4 text-left text-white">
              <input type="checkbox" name="t&c" id="t&c" />
              <label htmlFor="t&c" className="mx-1 leading-3 text-sm">
                I agree to the{" "}
                <span className="text-orange-200 hover:underline">
                  Terms and conditions
                </span>
              </label>
            </div>
            <div className="my-5">
              <button type="button" className="w-full p-3 rounded-md bg-white">
                Sign Up
              </button>
            </div>
            <p className="text-white text-sm leading-3 mb-10 mt-4">
              Already have an account?{" "}
              <span className="underline">Sign In</span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
