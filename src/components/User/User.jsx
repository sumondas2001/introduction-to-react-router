import { Link } from 'react-router-dom';
import './user.css'

const User = ({ user }) => {
     const { name, id, email, phone, username, website, address } = user
     // console.log(user)
     return (
          <div className="user">

               <h2>{name}</h2>
               <h4>Email: {email}</h4>
               <h4>Phone : {phone} </h4>
               <Link to={`/user/${id}`}>Show Details</Link>
               {/* <h4>username: {username}</h4>
               <h4>Website: {website}</h4>
               <h4>address: {address.city}</h4> */}
          </div >
     );
};

export default User;