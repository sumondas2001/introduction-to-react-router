import { Outlet, useNavigation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


const Home = () => {
     const navigation = useNavigation();
     return (
          <div>
               <Header></Header>
               <hr />
               {
                    navigation.state === "Loading" ? <p>loading.......</p> : <Outlet></Outlet>

               }

               <hr />
               <Footer></Footer>

          </div>
     );
};

export default Home;