import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {Toaster} from 'react-hot-toast';

import {Routes, Route} from 'react-router-dom';

import './App.scss'

import {setCurrentUser} from "./store/user/user.actions";
import {createUserDocumentFromAuth, onAuthStateChangedListener} from "./utils/firebase/firebase.utils";
import CheckoutComponent from './routes/checkout/checkout.component';
import HomeComponent from "./routes/home/home.component";
import ShopComponent from "./routes/shop/shop.component";
import NavigationComponent from "./routes/navigation/navigation.component";
import AuthenticationComponent from "./routes/authentication/authentication.component";

const App = () => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            if (user) {
                createUserDocumentFromAuth(user);
            }
            dispatch(setCurrentUser(user));
        });
        return unsubscribe;
    }, []);
    
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
                    <Route  path='/shop/*' element={<ShopComponent/>}/>
                    <Route  path='/auth' element={<AuthenticationComponent/>}/>
                    <Route  path='/checkout' element={<CheckoutComponent/>}/>
                </Route>
            </Routes>
        </>
    )
};

export default App;
