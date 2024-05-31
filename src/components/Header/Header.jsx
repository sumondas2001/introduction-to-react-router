import { NavLink, } from 'react-router-dom';
import './Hader.css'

const Header = () => {
     return (
          <nav>
               <h2>Nav bar</h2>
               <NavLink to="/">Home</NavLink>
               <NavLink to='/about'> About</NavLink>

               <NavLink to="/contact">Contact US</NavLink>
               <NavLink to="/users">Users</NavLink>
               <NavLink to={'/posts'}>Posts</NavLink>
          </nav>
     );
};

export default Header;