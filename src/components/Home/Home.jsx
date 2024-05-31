import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


const Home = () => {
     return (
          <div>
               <Header></Header>
               <hr />

               <Outlet></Outlet>
               <hr />
               <Footer></Footer>

          </div>
     );
};

export default Home;