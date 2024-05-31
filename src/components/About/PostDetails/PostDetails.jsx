import { useLoaderData, useNavigate } from "react-router-dom";


const PostDetails = () => {

     const postDetailsCss = {
          backgroundColor: 'white',
          borderRadius: '20px',
          padding: '20px',
          color: 'black',
          marginBottom: '50px',
          marginTop: '50px',
     }

     const postDetails = useLoaderData()
     // console.log(postDetails)
     const navigate = useNavigate();
     const handelGoBack = () => {
          navigate(-1)
     }
     const { userId, title, body } = postDetails;
     return (
          <div style={postDetailsCss}>
               <h4>This my post</h4>
               <hr />
               <h5>User Id: {userId}</h5>
               <h3>{title}</h3>
               <p>{body}</p>
               <button onClick={handelGoBack}>Go Back</button>
          </div>
     );
};

export default PostDetails;