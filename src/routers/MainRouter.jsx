import Home from "../pages/Home/Home";
import Pages from "./../pages/PagesPage/Pages";
import Products from "./../pages/Products/Products";
import Blog from "./../pages/Blog/Blog";
import Shop from "./../pages/Shop/Shop";
import Contact from "./../pages/Contact/Contact";

export const main_pages = [
  {
    component: <Home />,
  },
  {
    component: <Pages />,
    path: "pages",
  },
  {
    component: <Products />,
    path: "products",
  },
  {
    component: <Blog />,
    path: "blog",
  },
  {
    component: <Shop />,
    path: "shop",
  },
  {
    component: <Contact />,
    path: "contact",
  },
];
