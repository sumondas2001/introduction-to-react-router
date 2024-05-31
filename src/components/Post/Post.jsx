import { Link, useNavigate } from 'react-router-dom';
import './post.css'

const Post = ({ post }) => {
     const { userId, title, id } = post;
     const navigate = useNavigate();
     // console.log(id)
     const handelShowDetails = () => {
          navigate(`/post/${id}`)
     }

     return (
          <div className="post">
               <h5>Id: {id}</h5>
               <h3>{title}</h3>
               <Link to={`/post/${id}`}>Read Details</Link>
               <br />
               <button onClick={handelShowDetails}>Click Details</button>
          </div>
     );
};

export default Post;