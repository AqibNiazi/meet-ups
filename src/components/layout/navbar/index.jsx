import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";
import FavouritesContext from "@store/index";
const Navbar = () => {
  const favouriteCtx = useContext(FavouritesContext);
  let favouritesCount = favouriteCtx?.totalFavourites;
  const links = [
    {
      id: 1,
      linkTxt: "All Meetups",
      linkSrc: "/",
    },
    {
      id: 2,
      linkTxt: "New Meetups",
      linkSrc: "/new-meetups",
    },
    {
      id: 3,
      linkTxt: "My Favourites",
      linkSrc: "/my-favourites",
    },
  ];
  return (
    <header className={styles.header}>
      <div className={styles.logo}>React Meetups</div>
      <nav>
        <ul>
          {links?.map((items) => (
            <li key={items?.id}>
              <Link to={items.linkSrc}>
                {items?.linkTxt}
                {items.linkTxt === "My Favourites" && favouritesCount > 0 && (
                  <span className={styles.badge}>{favouritesCount}</span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
