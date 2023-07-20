/*!

=========================================================
* Argon Dashboard React - v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/resultlab-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/resultlab-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Index from "views/Index.js";
import DoktorProfile from "views/screens/Profile.js";
import HastaProfile from "views/screens/HastaProfile.js";
import HastaRontgenResult from "views/screens/HastaRontgenResult.js";
import Maps from "views/screens/Maps.js";
import Register from "views/screens/Register.js";
import Login from "views/screens/Login.js";
import Tables from "views/screens/Tables.js";
import Favories from "views/screens/Favories.js";
import Icons from "views/screens/Icons.js";
import Managers from "views/screens/Managers.js";
import Organizations from "views/screens/Organizations.js";

var routes = [
  {
    path: "/index",
    name: "Tüm Hastalar",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin",
    display: true
  },
  {
    path: "/favories",
    name: "Favoriler",
    icon: "ni ni-planet text-blue",
    component: Favories,
    layout: "/admin",
    display: true
  },
  {
    path: "/maps",
    name: "Arşiv",
    icon: "ni ni-pin-3 text-orange",
    component: Maps,
    layout: "/admin",
    display: true
  },
  {
    path: "/hasta-profile",
    name: "Hasta Profil",
    icon: "ni ni-single-02 text-yellow",
    component: HastaProfile,
    layout: "/admin",
    display: true
  },
  {
    path: "/hasta-rontgen-result",
    name: "Hasta Rontgen Sonucu",
    icon: "ni ni-single-02 text-yellow",
    component: HastaRontgenResult,
    layout: "/admin",
    display: true
  },
  // {
  //   path: "/user-profile",
  //   name: "Doktor Profil",
  //   icon: "ni ni-single-02 text-yellow",
  //   component: DoktorProfile,
  //   layout: "/admin",
  //   display: true
  // },
  // {
  //   path: "/tables",
  //   name: "Tables",
  //   icon: "ni ni-bullet-list-67 text-red",
  //   component: Tables,
  //   layout: "/admin",
  //   display: true
  // },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth",
    display: false
  },
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: Register,
    layout: "/auth",
    display: false
  },
  {
    path: "/managers",
    name: "Menajerler",
    icon: "ni ni-tv-2 text-primary",
    component: Managers,
    layout: "/admin",
    display: true
  },
  {
    path: "/organizations",
    name: "Organizasyonlar",
    icon: "ni ni-tv-2 text-primary",
    component: Organizations,
    layout: "/admin",
    display: true
  },
];
export default routes;
