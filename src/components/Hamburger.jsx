import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import styles from "../css-modules/hamburger.module.css";

const Hamburger = () => {
  const [isActive, setIsActive] = useState(false);
  const menu = useRef(null);
  const closeOpenMenus = (e) => {
    if (menu.current && isActive && !menu.current.contains(e.target)) {
      setIsActive(false);
    }
  };
  document.addEventListener("mousedown", closeOpenMenus);
  return (
    <div ref={menu} className={styles.dropdown}>
      <button onClick={() => setIsActive(!isActive)}>
        <i class="fas fa-bars"></i>
      </button>
      {isActive && (
        <ul>
          <li>
            {" "}
            <Link to="/games">
              <p>Games</p>
            </Link>
          </li>
          <li>
            <Link to="/review">
              <p>New Review</p>
            </Link>
          </li>
          <li>
            <Link to="/users">
              <p>Users</p>
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Hamburger;
