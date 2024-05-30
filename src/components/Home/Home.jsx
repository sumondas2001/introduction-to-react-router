import { Outlet } from "react-router-dom";
import Header from "../Header/Header";


const Home = () => {
     return (
          <div>
               <Header></Header>
               <hr />
               <h2>This is the Home component</h2>

               <hr />
               <Outlet></Outlet>
          </div>
     );
};

export default Home;