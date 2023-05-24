import '../../sass/Navbar.scss'
import {ReactComponent as BlogLabLogo} from '../../assets/BlogLab-logo-light.svg'
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className='navbar-container'>
      <div className='navbar-left-wrap'>
        <div className='logo-wrap'>
          <BlogLabLogo width={150} />
        </div>
      </div>
      <div className='navbar-right-wrap'>
        <Link to='/login' className='link'>Login</Link>
        <button type="button" className="btn btn-outline-primary">Signup</button>
      </div>
    </div>
  )
}
