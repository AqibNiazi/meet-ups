import React from 'react'
import styles from "./meetuplist.module.css"
import MeetupItems from '../MeetupItems'
const MeetupList = ({meetups}) => {
  return (
    <ul className={styles.list}>
      {meetups?.map((meetup) => (
        <MeetupItems
          key={meetup.id}
          id={meetup.id}
          imageUrl={meetup.imageUrl}
          title={meetup.title}
          address={meetup.address}
          description={meetup.description}
        />
      ))}
    </ul>
  );
}

export default MeetupList