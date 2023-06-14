import SideNav from "../../components/SideNav/SideNav";
import { Outlet } from "react-router-dom";

export default function Podcasts() {
  return (
    <div className="container">
      <SideNav />
      <Outlet />
    </div>
  )
}
