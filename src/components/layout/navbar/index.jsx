import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./navbar.module.css"
const Navbar = () => {
    const links=[
        {
        linkTxt:"All Meetups",
        linkSrc:"/",
    },
    {
        linkTxt:"New Meetups",
        linkSrc:"/new-meetups",
    },
    {
        linkTxt:"My Favourites",
        linkSrc:"/my-favourites",
    },
]
  return (
    <header className={styles.header}>
        <div className={styles.logo}>React Meetups</div>
        <nav>
            <ul>
                {links?.map((items)=>(
                    <li>
                        <Link to={items.linkSrc}>{items?.linkTxt}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    </header>
  )
}

export default Navbar