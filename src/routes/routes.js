import {Routes, Route} from 'react-router-dom'
import Home from "../pages/Home/Home";
import Blog from "../pages/Blog/Blog";
import Profile from "../pages/Profile/Profile";
import Error404 from '../pages/Error/Error404';
import Error500 from '../pages/Error/Error500';
import Login from '../pages/Login/Login';
import Signup from '../pages/Signup/Signup';

export default (
  <Routes>
    <Route exact path='/' component={Home} />
    <Route path='/login' component={Login} />
    <Route path='/signup' component={Signup} />
    <Route path='/blog/:id' component={Blog}/>
    <Route path='/profile/:id' component={Profile}/>
    <Route path='/' render={Error404} />
  </Routes>
)