import { Link } from 'react-router-dom';
import './Hader.css'

const Header = () => {
     return (
          <nav>
               <h2>Nav bar</h2>
               <Link to="/">Home</Link>
               <Link to="/about">About</Link>
               <Link to="/contact">Contact US</Link>
               <Link to="/users">Users</Link>
          </nav>
     );
};

export default Header;