import { useState } from "react";
import Header from "../components/Header";

const Login = () => {
  const [isSigninForm, setIsSigninForm] = useState(true);

  const toggleForm = () => {
    setIsSigninForm(!isSigninForm);
  }

  return (
    <>
      <Header />
      <div>
        <div className="absolute">
          <img
            className=" object-cover"
            src="https://assets.nflxext.com/ffe/siteui/vlv3/c31c3123-3df7-4359-8b8c-475bd2d9925d/15feb590-3d73-45e9-9e4a-2eb334c83921/IN-en-20231225-popsignuptwoweeks-perspective_alpha_website_large.jpg"
            alt="Netflix Login Background"
          />
        </div>
        <form className="w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
          <p className="text-3xl font-semibold">{isSigninForm ? 'Sign In' : 'Sign Up'}</p>
          <input
            type="text"
            placeholder="Email Address"
            className="p-4 my-4 w-full bg-gray-700"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-4 my-4 w-full bg-gray-700"
          />
          <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
          {isSigninForm ? 'Sign In' : 'Sign Up'}
          </button>
          <p className="" onClick= {() => toggleForm()}>{`New to Netflix? ${isSigninForm ? 'Sign Up' : 'Sign In'} now!`}</p>
        </form>
      </div>
    </>
  );
};

export default Login;
