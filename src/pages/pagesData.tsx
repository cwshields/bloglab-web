import { routerType } from "../types/router.types";
import { Navigate } from "react-router-dom";
import BlogCard from "./BlogCard/BlogCard";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import BlogProps from "../types/BlogProps";
import Listings from "./Listings/Listings";
import Podcasts from "./Podcasts/Podcasts";

const blogArgs:BlogProps = {
  id: 0,
  title: "",
  description: "",
  readTime: 0,
  tags: [],
  date: "",
  user: {
    name: "",
    avatar: ""
  },
 }

 const homeArgs: any = {
  index: true
 }

const pagesData: routerType[] = [
  {
    path: "",
    element: <Navigate replace to="/home/latest" />,
    title: ""
  },
  {
    path: "home/*",
    element: <Home {...homeArgs} />,
    title: "Home"
  },
  {
    path: "blog",
    element: <BlogCard {...blogArgs} />,
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
  },
  {
    path: "listings/*",
    element: <Listings />,
    title: "Listings"
  },
  {
    path: "podcasts",
    element: <Podcasts />,
    title: "Podcasts"
  }
];

export default pagesData;