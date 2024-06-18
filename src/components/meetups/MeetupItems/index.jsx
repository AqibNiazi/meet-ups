import React from 'react'
import styles from "./meetupitems.module.css"
import Card from "@components/ui/Card";
import { useContext } from "react";
import FavouritesContext from "@store";
const MeetupItems = ({ id, imageUrl, title, description, address }) => {
  const favouriteCtx = useContext(FavouritesContext);
  const itemIsFavourite = favouriteCtx?.checkFavourite(id);
  const toggleFavouriteCheck = () => {
    if (itemIsFavourite) {
      favouriteCtx?.removeFavourite(id);
    } else {
      favouriteCtx?.addFavourite({
        id,
        title,
        description,
        imageUrl,
        address,
      });
    }
  };
  return (
    <li className={styles.item}>
      <Card>
        <div className={styles.image}>
          <img src={imageUrl} alt={title} />
        </div>
        <div className={styles.content}>
          <h3>{title}</h3>
          <address>{address}</address>
          <p>{description}</p>
        </div>
        <div className={styles.actions}>
          <button onClick={toggleFavouriteCheck}>
            {itemIsFavourite ? "Remove Favourite" : "Add Favourite"}
          </button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItems