import "../../sass/SideNav.scss";
import { Link } from "react-router-dom";

export default function SideNav() {
  return (
    <div className="side-nav">
      <Link className="link" to="/">
        <span className="icon">🏠</span> Home
      </Link>
      <Link className="link" to="/listings">
        <span className="icon">📜</span> Listings
      </Link>
      <Link className="link" to="/podcasts">
        <span className="icon">🎙️</span> Podcasts
      </Link>
      <Link className="link" to="/guides">
        <span className="icon">📔</span> Guides
      </Link>
      <Link className="link" to="/tags">
        <span className="icon">🏷️</span> Tags
      </Link>
      <Link className="link" to="/faq">
        <span className="icon">💡</span> FAQ
      </Link>
      <Link className="link" to="/shop">
        <span className="icon">🛍️</span> Shop
      </Link>
      <Link className="link" to="/about">
        <span className="icon">👽</span> About
      </Link>
      <Link className="link" to="/contact">
        <span className="icon">🙋</span> Contact
      </Link>
      <div className="other">Other</div>
      <Link className="link" to="/shop">
        <span className="icon">👍</span> Code of Conduct
      </Link>
      <Link className="link" to="/about">
        <span className="icon">🔒</span> Privacy Policy
      </Link>
      <Link className="link" to="/contact">
        <span className="icon">👀</span> Terms of Use
      </Link>
    </div>
  );
}
