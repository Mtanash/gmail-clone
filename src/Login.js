import React from "react";
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";
import { provider, auth } from "./firebase";
import "./Login.css";

function Login() {
  const dispatch = useDispatch();
  const handleLogin = () => {
    auth.signInWithPopup(provider).then((result) => {
      const user = result.user;
      dispatch(
        login({
          name: user.displayName,
          email: user.email,
          photoUrl: user.photoURL,
        })
      );
    });
  };
  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://www.gizmochina.com/wp-content/uploads/2020/10/Screenshot-145.png"
          alt="Gmail"
        />
        <button className="login__btn" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
