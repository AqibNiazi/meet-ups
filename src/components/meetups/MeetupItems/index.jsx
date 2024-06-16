import React from 'react'
import styles from "./meetupitems.module.css"
import Card from "@components/ui/Card";
const MeetupItems = ({ image, title, address, description }) => {
  return (
    <li className={styles.item}>
      <Card>
        <div className={styles.image}>
          <img src={image} alt={title} />
        </div>
        <div className={styles.content}>
          <h3>{title}</h3>
          <address>{address}</address>
          <p>{description}</p>
        </div>
        <div className={styles.actions}>
          <button>To Favourite</button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItems