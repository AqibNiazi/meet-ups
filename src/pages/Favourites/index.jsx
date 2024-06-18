import MeetupList from "@components/meetups/MeetupList";
import FavouritesContext from "@store/index";
import React, { useContext } from "react";

const FavouritesPage = () => {
  const favouriteCtx = useContext(FavouritesContext);
  console.log("Favourites Ctx", favouriteCtx?.favourites);
  return (
    <section>
      <h1>My Favourites</h1>
      <MeetupList meetups={favouriteCtx?.favourites} />
    </section>
  );
};

export default FavouritesPage;
