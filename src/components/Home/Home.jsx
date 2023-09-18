
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Outlet, useLocation, useNavigation } from 'react-router-dom';

const Home = () => {
    const navigation = useNavigation()
    const location = useLocation();
    console.log(location)
    return (
        <div>
            <Header></Header>
            {
                navigation.state === "loading" ? "loading...." : <Outlet></Outlet>
            }
            
          <Footer></Footer>
        </div>
    );
};

export default Home;