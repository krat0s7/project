import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RoutesConfig from "./constants/Routes";
import Footer from "./components/Footer";
import Header from "./components/Header";

export const App = () => {
  
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={RoutesConfig.Main.path} element={<RoutesConfig.Main.component />} />
          <Route path={RoutesConfig.About.path} element={<RoutesConfig.About.component />} />
          <Route path={RoutesConfig.Contacts.path} element={<RoutesConfig.Contacts.component />} />
          <Route path={RoutesConfig.Cabinet.path} element={<RoutesConfig.Cabinet.component />} />
        </Routes>

        <Footer/>
      </BrowserRouter>
    </>
  );
};

export default App;
