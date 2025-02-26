import { useState } from "react";

const Login = () => {
  const [current, setcurrent] = useState("Sign Up");
  const hadlesubmit = async (event) => {
    event.preventDefault();
  };
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <form
          onSubmit={(e) => hadlesubmit(e)}
          className="flex flex-col items-center w-[50%] sm:max-auto mt-14 gap-4 text-gray-800"
        >
          <div className="inline-flex items-center gap-2 mt-10">
            <p className="prata-regular text-3xl">{current}</p>
            <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
          </div>
          {current === "Login" ? (
            ""
          ) : (
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-800"
              placeholder=" Name"
              required
            />
          )}

          <input
            type="email"
            className="w-full px-3 py-2 border border-gray-800"
            placeholder=" Email"
            required
          />

          <input
            type="password"
            className="w-full px-3 py-2 border border-gray-800"
            placeholder=" Password"
            required
          />
          <div className="w-full flex justify-between text-sm mt-[-8px]">
            <p className="cursor-pointer">Forgot your password?</p>
            {current === "Login" ? (
              <p
                onClick={() => setcurrent("Sign Up")}
                className="cursor-pointer"
              >
                Create account
              </p>
            ) : (
              <span
                onClick={() => setcurrent("Login")}
                className="cursor-pointer"
              >
                Login Here
              </span>
            )}
          </div>
          <button className="bg-black text-white font-light px-8 py-2 mt-4">
            {current === "Login" ? "Sign Ip" : "Sign Up"}
          </button>
        </form>
      </div>
    </>
  );
};
export default Login;
