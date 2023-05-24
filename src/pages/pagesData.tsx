import { routerType } from "../types/router.types";
import Blog from "../pages/Blog/Blog";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";

const pagesData: routerType[] = [
  {
    path: "home",
    element: <Home />,
    title: "Home"
  },
  {
    path: "blog",
    element: <Blog />,
    title: "Blog"
  },
  {
    path: "login",
    element: <Login />,
    title: "Login"
  },
  {
    path: "signup",
    element: <Signup />,
    title: "Signup"
  }
];

export default pagesData;