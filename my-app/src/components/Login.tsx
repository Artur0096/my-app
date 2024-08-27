import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { unwrapResult } from "@reduxjs/toolkit"; // To handle unwrapping the result
import { signIn } from "../store/authSlice";
import { fetchUser } from "../store/authThunks";
import styles from "./styles/Login.module.css";
import { useAppDispatch } from "../store/useAppDispatch";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const resultAction = await dispatch(fetchUser(username));
      const user = unwrapResult(resultAction);
      dispatch(signIn(user));
      navigate("/");
    } catch (err) {
      if (err instanceof Error) {
        toast.error("User not found!", {
          position: "top-center",
        });
      } else {
        toast.error("User not found!", {
          position: "top-center",
        });
      }
    }
  };

  return (
    <div className={styles.login}>
      <h1>Sign In</h1>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        className={styles.input}
      />
      <button className={styles.button} onClick={handleSubmit}>
        Submit
      </button>
      <ToastContainer />
    </div>
  );
};

export default Login;
