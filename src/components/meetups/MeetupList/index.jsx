import React from 'react'
import styles from "./meetuplist.module.css"
import MeetupItems from '../MeetupItems'
const MeetupList = ({meetups}) => {
  return (
    <ul className={styles.list}>
        {
            meetups?.map((meetup)=>(<MeetupItems key={meetup.id} id={meetup.id} image={meetup.image} title={meetup.title} address={meetup.address} description={meetup.description}/>))
        }
    </ul>
  )
}

export default MeetupList