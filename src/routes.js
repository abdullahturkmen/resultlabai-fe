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
import DoktorProfile from "views/examples/Profile.js";
import HastaProfile from "views/examples/HastaProfile.js";
import HastaRontgenResult from "views/examples/HastaRontgenResult.js";
import Maps from "views/examples/Maps.js";
import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
import Tables from "views/examples/Tables.js";
import Favories from "views/examples/Favories.js";
import Icons from "views/examples/Icons.js";

var routes = [
  {
    path: "/index",
    name: "Tüm Hastalar",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin"
  },
  {
    path: "/favories",
    name: "Favoriler",
    icon: "ni ni-planet text-blue",
    component: Favories,
    layout: "/admin"
  },
  {
    path: "/maps",
    name: "Arşiv",
    icon: "ni ni-pin-3 text-orange",
    component: Maps,
    layout: "/admin"
  },
  {
    path: "/hasta-profile",
    name: "Hasta Profil",
    icon: "ni ni-single-02 text-yellow",
    component: HastaProfile,
    layout: "/admin"
  },
  {
    path: "/hasta-rontgen-result",
    name: "Hasta Rontgen Sonucu",
    icon: "ni ni-single-02 text-yellow",
    component: HastaRontgenResult,
    layout: "/admin"
  },
  {
    path: "/user-profile",
    name: "Doktor Profil",
    icon: "ni ni-single-02 text-yellow",
    component: DoktorProfile,
    layout: "/admin"
  },
  {
    path: "/tables",
    name: "Tables",
    icon: "ni ni-bullet-list-67 text-red",
    component: Tables,
    layout: "/admin"
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth"
  },
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: Register,
    layout: "/auth"
  }
];
export default routes;
