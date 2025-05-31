import {Link, Outlet} from "react-router-dom";
// import '../stylesheets/styles.css';
const Navbar=()=>{
    return (
        <div>
            <nav className={'inline-block w-screen border-b border-solid border-b-gray-100'}>
                <p className={'float-left'}>876 Explore</p>
                <ul className={'float-right flex flex-row gap-3'}>
                    <li className={'navBar p-2'}>
                        <Link to={'/'} className={'self-center'}>Home</Link>
                    </li>
                    <li className={'navBar p-2'}>
                        <Link to={'/categories'}>Categories</Link>
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