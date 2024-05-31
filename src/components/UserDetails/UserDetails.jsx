import { useLoaderData } from "react-router-dom";
import './userDetails.css'

const UserDetails = () => {
     const details = useLoaderData()
     const { name, id, email, phone, username, website, address, company } = details
     console.log(details)
     return (
          <div>
               <h2>Details about User</h2>

               <div className="userDetails">
                    <h4>user ID: {id}</h4>
                    <h2>{name}</h2>
                    <h3>Email: {email}</h3>
                    <h3>Phone : {phone} </h3>


                    <h3>username: {username}</h3>
                    <h3>Website: {website}</h3>
                    <h3>address: {address.city}</h3>
                    <h3>company: {company.bs}</h3>
               </div>

          </div>
     );
};

export default UserDetails;