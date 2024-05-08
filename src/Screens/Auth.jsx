import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@material-tailwind/react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const usenavigate = useNavigate();

  useEffect(() => {
    sessionStorage.clear();
  }, []);

  const handleLogin = () => {
    if (username == "hi" && password == "123") {
      setLoggedIn(true);
      console.log(username, password);
      sessionStorage.setItem("username", username);
      usenavigate("/");
    } else {
      alert("Please enter correct crededntials.");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-50  ">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="-mt-6 text-center text-3xl font-extrabold text-orange-400">
            Sign in for Dashboard
          </h2>
        </div>
        <form className="mt-8 space-y-6 " onSubmit={(e) => e.preventDefault()}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px gap-10">
            <div className="py-4">
              <Input
                type="text"
                placeholder="Username"
                variant="outlined"
                label="Username"
                onChange={(e) => setUsername(e.target.value)}
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              ></Input>
            </div>
            <div className="py-4">
              <Input
                type="text"
                placeholder="Password"
                variant="outlined"
                label="Password"
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              ></Input>
            </div>
          </div>

          <div>
            <button
              type="submit"
              onClick={() => {
                handleLogin();
              }}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-400 hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Let's Go
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
