import '../../sass/SideNav.scss'
import { Link } from "react-router-dom";

export default function SideNav() {
  return (
    <div className="side-nav">
        <Link className="link" to="/">
          <span className="icon">🏠</span> Home
        </Link>
        <Link className="link" to="/">
          <span className="icon">📜</span> Listings
        </Link>
        <Link className="link" to="/">
          <span className="icon">🎙️</span> Podcasts
        </Link>
        <Link className="link" to="/">
          <span className="icon">🎥</span> Videos
        </Link>
        <Link className="link" to="/">
          <span className="icon">📔</span> Guides
        </Link>
        <Link className="link" to="/">
          <span className="icon">🏷️</span> Tags
        </Link>
        <Link className="link" to="/">
          <span className="icon">💡</span> FAQ
        </Link>
        <Link className="link" to="/">
          <span className="icon">🛍️</span> Shop
        </Link>
        <Link className="link" to="/">
          <span className="icon">👽</span> About
        </Link>
        <Link className="link" to="/">
          <span className="icon">🙋</span> Contact
        </Link>
      </div>
  )
}
