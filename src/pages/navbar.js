import {Link, Outlet} from "react-router-dom";
import '../stylesheets/styles.css';
const Navbar=()=>{
    return (
        <div>
            <nav className={'inline-block w-screen border-b border-solid border-b-gray-100'}>
                <p className={'float-left ml-5'}>876 Explore</p>
                <ul className={'float-right flex flex-row gap-3 mr-5'}>
                    <li className={'navBar p-2'}>
                        <Link to={'/'} className={'self-center'}>Home</Link>
                    </li>
                    <li className={'dropdown-categories navBar p-2 inline-block'}>
                        Categories
                        <div className={'dropdown absolute h-24 hidden w-64 z-10 mt-2 -ml-2'}>
                            <Link to={'/restaurants'} className={'category-links'}>Restaurants</Link>
                            <Link to={'/accommodations'} className={'category-links'}>Accommodation</Link>
                            <Link to={'/services'} className={'category-links'}>Services</Link>
                            <Link to={'/transportation'} className={'category-links'}>Transportation</Link>
                            <Link to={'/tours'} className={'category-links'}>Tours</Link>
                            <Link to={'/shopping'} className={'category-links'}>Shopping</Link>
                        </div>
                    </li>
                    <li className={'navBar p-2'}>
                        <Link to={'/featured'}>Featured</Link>
                    </li>
                    <li className={'navBar p-2'}>
                        <Link to={'/about'}>About Us</Link>
                    </li>
                    <li className={'navBar p-2'}>
                        <Link to={'/contact'}>Contact</Link>
                    </li>
                    <li className={'addBtn p-2'}>
                        <Link to={'/add-business'}>List Your Business</Link>
                    </li>
                    <li className={'navBar register p-2'}>
                        <Link to={'/signin'}>Register</Link>
                    </li>
                </ul>
                <Outlet></Outlet>
            </nav>
        </div>
    );
};

export default Navbar;