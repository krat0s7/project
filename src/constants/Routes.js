import MainPage from "../components/pages/MainPage"
import AboutPage from "../components/pages/AboutPage"
import ContactsPage from "../components/pages/ContactsPage"
import CateringComponent from "../components/pages/CateringComponent"
import CatalogComponent from "../components/pages/CatalogComponent"

const RoutesConfig = {
  Main: {
    path: "/",
    component: MainPage ,
  },
  About: {
    path: "/about",
    component: AboutPage,
  },
  Contacts: {
    path: "/contacts",
    component: ContactsPage,
  },
  CateringComponent: {
    path: "/CateringComponent",
    component: CateringComponent,
  },
  CatalogComponent: {
    path: "/CatalogComponent",
    component: CatalogComponent,
  },
};

export default RoutesConfig;
