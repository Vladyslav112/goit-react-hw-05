import { NavLink } from "react-router-dom";
import clsx from "clsx";
import style from "./Navigation.module.css";

const getClassName = (props) => {
  return clsx(style.link, props.isActive && style.isActive);
};

export default function Navigation() {
  return (
    <header className={style.header}>
      <ul className={style.navList}>
        <li>
          <NavLink to="/" className={getClassName}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/movies" className={getClassName}>
            Movies
          </NavLink>
        </li>
      </ul>
    </header>
  );
}
