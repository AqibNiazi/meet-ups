import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "../components/layout";
import { AllMeetupsPage, NewMeetupsPage, FavouritesPage} from "../pages";

const AppRoutes = () => {
  return (
   
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Suspense fallback={<div>All Meetups page is Loading...</div>}> <AllMeetupsPage /></Suspense>} />
          <Route path="/new-meetups" element={<Suspense fallback={<div>New Meetups page is Loading....</div>}><NewMeetupsPage /></Suspense> } />
          <Route path="/my-favourites" element={<Suspense fallback={<div>My Favourites page is loading...</div>}><FavouritesPage /></Suspense>} />
        </Route>
      </Routes>
    </BrowserRouter>
  
  );
};

export default AppRoutes;
