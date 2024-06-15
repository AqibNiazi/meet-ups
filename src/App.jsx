import React from 'react'
import AppRoutes from './routes'
import { Toaster } from "react-hot-toast";
const App = () => {
  return (
    <div>
      <AppRoutes />
      <Toaster />
    </div>
  );
};

export default App