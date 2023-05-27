import { routerType } from "../types/router.types";
import Blog from "./BlogCard/BlogCard";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import BlogProps from "../types/BlogProps";

const blogArgs:BlogProps = {
  id: 0,
  title:"",
  description: "",
  readTime: 0,
  tags: [],
  date: "",
  user: "",
  avatar: ""
 }

const pagesData: routerType[] = [
  {
    path: "",
    element: <Home />,
    title: "Home"
  },
  {
    path: "blog",
    element: <Blog {...blogArgs} />,
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