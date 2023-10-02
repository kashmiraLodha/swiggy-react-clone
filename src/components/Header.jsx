import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [loginBtn, setloginBtn] = useState("login");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between m-4 p-4 rounded-lg bg-blue-100">
      <div className="logo-app">
        <img className="w-20" src={LOGO_URL} />
      </div>
      <div className=" flex items-center">
        <ul className="flex ">
          <li className="p-2 m-2">
            <Link to="/">
              Online status : {onlineStatus ? "online" : "offline"}
            </Link>
          </li>
          <li className="p-2 m-2">
            <Link to="/">Home</Link>
          </li>
          <li className="p-2 m-2">
            <Link to="/about">About</Link>
          </li>
          <li className="p-2 m-2">
            <Link to="/contact"> Contact us</Link>
          </li>
          <li className="p-2 m-2">Cart</li>
          <button
            className="bg-blue-200 px-4 m-2 rounded-lg"
            onClick={() => {
              loginBtn == "login"
                ? setloginBtn("logout")
                : setloginBtn("login");
            }}
          >
            {loginBtn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
