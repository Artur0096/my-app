import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signIn, signOut } from "../store/authSlice";
import { RootState } from "../store/store";
import styles from "./styles/Header.module.css";

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.auth.user);

  const handleSignIn = () => {
    navigate("/login");
  };

  const handleSignOut = () => {
    dispatch(signOut());
    navigate("/");
  };

  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>Best Application</h1>
      <nav>
        {user ? (
          <button className={styles.button} onClick={handleSignOut}>
            Log Out
          </button>
        ) : (
          <button className={styles.button} onClick={handleSignIn}>
            Sign In
          </button>
        )}
      </nav>
    </header>
  );
};

export default Header;
