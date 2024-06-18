import { createContext, useState } from "react";

const FavouritesContext = createContext({
  favourites: [],
  totalFavourites: 0,
  addFavourite: (favouriteMeetups) => {},
  removeFavourite: (meetupId) => {},
  checkFavourite: (meetupId) => {},
});

export const FavouritesContextProvider = ({ children }) => {
  const [userFavourites, setUserFavourites] = useState([]);

  const addFavouriteHandler = (favouriteMeetups) => {
    setUserFavourites((prevUserFavourites) =>
      prevUserFavourites?.concat(favouriteMeetups)
    );
  };
  const removeFavouriteHandler = (meetupId) => {
    setUserFavourites((prevUserFavourites) =>
      prevUserFavourites.filter((meetup) => meetup.id !== meetupId)
    );
  };
  const itemIsFavouriteHandler = (meetupId) => {
    return userFavourites?.some((meetup) => meetup?.id === meetupId);
  };

  const context = {
    favourites: userFavourites,
    totalFavourites: userFavourites.length,
    addFavourite: addFavouriteHandler,
    removeFavourite: removeFavouriteHandler,
    checkFavourite: itemIsFavouriteHandler,
  };
  return (
    <FavouritesContext.Provider value={context}>
      {children}
    </FavouritesContext.Provider>
  );
};

export default FavouritesContext;
