import {Routes, Route} from 'react-router-dom';
import {Toaster} from 'react-hot-toast';

import HomeComponent from "./routes/home/home.component";
import ShopComponent from "./routes/shop/shop.component";
import NavigationComponent from "./routes/navigation/navigation.component";
import AuthenticationComponent from "./routes/authentication/authentication.component";

import './App.scss'

const App = () => {
    return (
        <>
            <Toaster
                toastOptions={{
                    className: '',
                    style: {
                        border: '1px solid black',
                        padding: '16px',
                        color: 'red',
                    },
                }}
            />
            
            <Routes>
                <Route path='/' element={<NavigationComponent/>}>
                    <Route index element={<HomeComponent/>}/>
                    <Route  path='/shop' element={<ShopComponent/>}/>
                    <Route  path='/auth' element={<AuthenticationComponent/>}/>
                </Route>
            </Routes>
        </>
        
    )
};

export default App;
