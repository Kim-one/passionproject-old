import {BrowserRouter, Route, Routes} from "react-router-dom";
import ReactDOM from "react-dom/client";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Navbar from "./pages/navbar";
import Signin from "./pages/signin";
import NoPage from "./pages/NoPage";
import AddBusiness from "./pages/add_business";
import Featured from "./pages/featured";
import Restaurants from "./pages/categories/restaurants";

export default function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Navbar/>}>
                    <Route index element={<Home />} />
                    <Route path={'about'} element={<About />} />
                    <Route path={'contact'} element={<Contact/>} />
                    <Route path={'signin'} element={<Signin/>} />
                    <Route path={'add-business'} element={<AddBusiness/>}/>
                    <Route path={'featured'} element={<Featured/>}/>
                    <Route path={'restaurants'} element={<Restaurants/>}/>
                    <Route path={'*'} element={<NoPage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App></App>);