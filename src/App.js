import {Routes, Route} from 'react-router-dom';

import HomeComponent from "./routes/home/home.component";
import ShopComponent from "./routes/shop/shop-component";
import NavigationComponent from "./routes/navigation/navigation.component";


const App = () => {
    return (
        <Routes>
            <Route path='/' element={<NavigationComponent/>}>
                <Route index element={<HomeComponent/>}/>
                <Route path='shop' element={<ShopComponent/>}/>
            </Route>
        </Routes>
    )
};

export default App;
