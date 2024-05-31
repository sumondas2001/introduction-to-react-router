import { Link } from 'react-router-dom';
import './post.css'

const Post = ({ post }) => {
     const { userId, title, id } = post;
     // console.log(id)

     return (
          <div className="post">
               <h5>User Id: {userId}</h5>
               <h3>{title}</h3>
               <Link to={`/post/${id}`}>Read Details</Link>
          </div>
     );
};

export default Post;