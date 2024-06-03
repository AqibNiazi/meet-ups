import React from 'react'
import styles from "./meetupitems.module.css"
const MeetupItems = ({image,title,address,description}) => {
  return (
    <li className={styles.item}>
        <div className={styles.image}>
            <img src={image} alt={title}/>
        </div>
        <div className={styles.content}>
            <h3>{title}</h3>
            <address>{address}</address>
            <p>{description}</p>
        </div>
        <div className={styles.actions}>
            <button>To Favourite</button>
        </div>
    </li>
  )
}

export default MeetupItems