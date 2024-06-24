import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RoutesConfig from "./constants/Routes";
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
          <Route path={RoutesConfig.CateringComponent.path} element={<RoutesConfig.CateringComponent.component />} />
          <Route path={RoutesConfig.CatalogComponent.path} element={<RoutesConfig.CatalogComponent.component />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
