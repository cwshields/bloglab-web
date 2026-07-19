import "../../sass/SideNav.scss";
import { Link } from "react-router-dom";
import { primarySideNavLinks, secondarySideNavLinks } from "../../data/sideNavLinks";

export default function SideNav() {
  return (
    <div className="side-nav">
      {primarySideNavLinks.map((item) => (
        <Link className="link" to={item.to} key={item.to}>
          <span className="icon">{item.icon}</span> {item.label}
        </Link>
      ))}
      <div className="other">Other</div>
      {secondarySideNavLinks.map((item) => (
        <Link className="link" to={item.to} key={item.to}>
          <span className="icon">{item.icon}</span> {item.label}
        </Link>
      ))}
    </div>
  );
}
