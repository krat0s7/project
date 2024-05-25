import MainPage from "../components/pages/MainPage"
import AboutPage from "../components/pages/AboutPage"
import ContactsPage from "../components/pages/ContactsPage"
import CabinetPage from "../components/pages/CabinetPage"

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
  Cabinet: {
    path: "/cabinet",
    component: CabinetPage,
  },
};

export default RoutesConfig;
