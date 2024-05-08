import React, { useEffect, useState } from "react";
import { Input } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

function Ex() {
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
    <div>
      <div className="h-screen w-full justify-center align-middle p-20 bg-red-300">
        <div className="text-center">
          <h1>Sign in for Dashboard</h1>
        </div>
        <div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="justify-center align-middle items-center m-auto w-full h-full"
          >
            <div className="justify-center align-middle items-center m-auto">
              <input type="text" className="m-auto"></input>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Ex;
