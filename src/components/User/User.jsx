import { Link, useNavigate } from 'react-router-dom';
import './user.css'

const User = ({ user }) => {
     const { name, id, email, phone, username, website, address } = user;
     // console.log(user)
     const navigate = useNavigate();

     const handelShowDetails = () => {
          navigate(`/user/${id}`)
     }
     return (
          <div className="user">

               <h2>{name}</h2>
               <h4>Email: {email}</h4>
               <h4>Phone : {phone} </h4>
               <Link to={`/user/${id}`}>Show Details</Link>
               <br />
               <button onClick={handelShowDetails}>Click Details</button>
          </div >
     );
};

export default User;