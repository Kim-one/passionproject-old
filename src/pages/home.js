import '../stylesheets/styles.css';
import { FaBed } from "react-icons/fa";
import { GrRestaurant } from "react-icons/gr";
import { MdEmojiTransportation } from "react-icons/md";
import { FaShoppingBag } from "react-icons/fa";
import { MdRoomService } from "react-icons/md";
// import { MdTour } from "react-icons/md";
import { FaCarSide } from "react-icons/fa";
import {useEffect, useState} from "react";
import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet';

const Home=()=>{
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000')
            .then((res)=>{
                return res.json();
            })
            .then((data)=>{
                setData(data)
                // console.log(data)
                // console.log(typeof(data))
            })
            .catch((error)=>{
                console.log("Error fetching data: ", error)
            })
    }, []);

    return (
        <div>
            <div className='home-container top-11 absolute w-screen h-80'>
                <div className={'back-img test'}>
                    <h1 className={'text1 font-bold text-center text-white'}>Discover the best of Jamaica</h1>
                    <h1 className={'text2 text-center text-white'}>Find amazing local businesses, from cozy cafes to thrilling adventures, all in one place.</h1>
                    <div className={'text-center'}>
                        <span>
                            <input type={'text'} className={'search-bar w-6/12 rounded-2xl h-10 border-none'} placeholder={'Search for business, services, or location'}/>
                            <button className={'p-1 px-2.5 bg-green-400 rounded-xl relative -left-20'}>Search</button>
                        </span>
                    </div>
                </div>
                <div>
                    <div className={'ml-48 mr-48 mt-2'}>
                        <h1 className={'mt-4 font-bold'}>Featured Businesses</h1>
                        <div className={'business_container mt-4 flex flex-row gap-2 overflow-x-scroll flex-nowrap overflow-y-hidden'}>
                            {data.map((businesses, index)=>(
                                <div key={index} className={'business'}>
                                    <img src={`http://localhost:5000/upload/${businesses[2]}`} alt={'Company images'} className={'h-40 w-full'}/>
                                    <p className={'font-bold'}>{businesses[0]}</p>
                                    <p className={'text-xs'}>{businesses[1]}</p>
                                </div>
                            ))}
                            {/*<div className={'business h-1/3'}>*/}
                            {/*    <img src={'dunnsriver.jpg'}  alt={'River Falls'}/>*/}
                            {/*    <p className={'font-bold'}>Dunn's River Falls</p>*/}
                            {/*    <p className={'text-xs'}>Dunn’s River Falls is one of Jamaica’s national treasures. Globally, it is as well known as reggae and equally stimulating.</p>*/}
                            {/*</div>*/}
                            {/*<div className={'business'}>*/}
                            {/*    <img src={'dunnsriver.jpg'}  alt={'River Falls'}/>*/}
                            {/*    <p className={'font-bold'}>Dunn's River Falls</p>*/}
                            {/*    <p className={'text-xs'}>Dunn’s River Falls is one of Jamaica’s national treasures. Globally, it is as well known as reggae and equally stimulating.</p>*/}
                            {/*</div>*/}
                            {/*<div className={'business'}>*/}
                            {/*    <img src={'river.jpg'}  alt={'River Falls'}/>*/}
                            {/*    <p className={'font-bold'}>Business 2</p>*/}
                            {/*    <p className={'text-xs'}>Dunn’s River Falls is one of Jamaica’s national treasures. Globally, it is as well known as reggae and equally stimulating.</p>*/}
                            {/*</div>*/}
                            {/*<div className={'business'}>*/}
                            {/*    <img src={'river.jpg'}  alt={'River Falls'}/>*/}
                            {/*    <p className={'font-bold'}>Business 3</p>*/}
                            {/*    <p className={'text-xs'}>Dunn’s River Falls is one of Jamaica’s national treasures. Globally, it is as well known as reggae and equally stimulating.</p>*/}
                            {/*</div>*/}
                            {/*<div className={'business'}>*/}
                            {/*    <img src={'dunnsriver.jpg'}  alt={'River Falls'}/>*/}
                            {/*    <p className={'font-bold'}>Business 4</p>*/}
                            {/*    <p className={'text-xs'}>Dunn’s River Falls is one of Jamaica’s national treasures. Globally, it is as well known as reggae and equally stimulating.</p>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </div>
                <div className={'mt-4 mr-48 ml-48 border border-solid border-black'}>
                    <h1 className={'font-bold'}>Filter by Parish</h1>
                    <div className={'flex gap-2 flex-wrap'}>
                        <div className={'parishes'}>
                            <p>Kingston</p>
                        </div>
                        <div className={'parishes'}>
                            <p>St Thomas</p>
                        </div>
                        <div className={'parishes'}>
                            <p>St Andrew</p>
                        </div>
                        <div className={'parishes'}>
                            <p>Portland</p>
                        </div>
                        <div className={'parishes'}>
                            <p>St James</p>
                        </div>
                        <div className={'parishes'}>
                            <p>St Elizabeth</p>
                        </div>
                        <div className={'parishes'}>
                            <p>Westmoreland</p>
                        </div>
                        <div className={'parishes'}>
                            <p>St Mary</p>
                        </div>
                        <div className={'parishes'}>
                            <p>Trelawny</p>
                        </div>
                        <div className={'parishes'}>
                            <p>Clarendon</p>
                        </div>
                        <div className={'parishes'}>
                            <p>Hanover</p>
                        </div>
                        <div className={'parishes'}>
                            <p>St Ann</p>
                        </div>
                        <div className={'parishes'}>
                            <p>St Catherine</p>
                        </div>
                        <div className={'parishes'}>
                            <p>Manchester</p>
                        </div>
                    </div>
                    <div>
                        <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={[51.505, -0.09]}>
                                <Popup>
                                    A pretty CSS3 popup. <br /> Easily customizable.
                                </Popup>
                            </Marker>
                        </MapContainer>
                    </div>
                    {/*<p>Kingston</p>*/}
                    {/*<p>St.Andrew</p>*/}
                    {/*<p>St Ann</p>*/}
                    {/*<p>St Thomas</p>*/}
                    {/*<p>St James</p>*/}
                    {/*<p>Portland</p>*/}
                    {/*<p>Manchester</p>*/}
                    {/*<p>St Elizabeth</p>*/}
                    {/*<p>Westmoreland</p>*/}
                    {/*<p>St Mary</p>*/}
                    {/*<p>Trelawny</p>*/}
                    {/*<p>Hanover</p>*/}
                    {/*<p>Clarendon</p>*/}
                    {/*<p>St Catherine</p>*/}
                </div>
                <div className={'mt-8'}>
                    <div className={'ml-48 mr-48 mt-2'}>
                        <h1 className={'font-bold'}>Popular Categories</h1>
                        <div className={'flex flex-row gap-2 mt-4'}>
                            <a href={'/restaurants'} className={'categories flex flex-row gap-2'}><GrRestaurant className={'mt-1'}/> Restaurants</a>
                            <a href={'/accommodations'} className={'categories flex flex-row gap-2'}><FaBed className={'mt-1'}/> Accommodations</a>
                            <a href={'/transportation'} className={'categories flex flex-row gap-2'}><FaCarSide className={'mt-1'}/>Transportations</a>
                            <a href={'/shopping'} className={'categories flex flex-row gap-2'}><FaShoppingBag className={'mt-1'}/>Shopping</a>
                            <a href={'/services'} className={'categories flex flex-row gap-2'}><MdRoomService className={'mt-1'}/>Services</a>
                            <a href={'/tours'} className={'categories flex flex-row gap-2'}><MdEmojiTransportation className={'mt-1'}/>Tours</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Home;

