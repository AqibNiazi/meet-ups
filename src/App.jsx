import React from 'react'
import AppRoutes from './routes'
import { Toaster } from "react-hot-toast";
import { FavouritesContextProvider } from "./store/favourites-context";
const App = () => {
  return (
    <FavouritesContextProvider>
      <AppRoutes />
      <Toaster />
    </FavouritesContextProvider>
  );
};

export default App