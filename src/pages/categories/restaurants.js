import '../../stylesheets/styles.css';
import {useState, useEffect} from "react";
import {IoIosArrowDown} from "react-icons/io";

const Restaurants = () => {
    const [category, setCategory ] = useState([]);
    // const category = ['Tours, Restaurants, Accommodation, Restaurants']
    useEffect(()=>{
        fetch('http://localhost:5000/restaurants')
            .then((res)=>{
                return res.json()
            })
            .then((category)=>{
                setCategory(category)
                console.log(category)
            })
            .catch((error)=>{
                console.log("Error fetching data: ", error)
            })
    }, [])
    return (
        <div className={'absolute mt-11 w-full'}>
            <h1 className={'text-center text-2xl'}>Restaurants</h1>
            <div className={'ml-28 mr-28 border border-solid border-black'}>
                <p>Explore some of the best local cuisine the island has to offer</p>
                <div className={'flex gap-2 mt-6'}>
                    <button className={'bg-gray-300 flex gap-1 rounded-full pl-2 pr-1'}>Rating<IoIosArrowDown className={'mt-1.5'}/> </button>
                    <button className={'bg-gray-300 flex gap-1 rounded-full pl-2 pr-1'}>Distance<IoIosArrowDown className={'mt-1.5'}/></button>
                    <button className={'bg-gray-300 flex gap-1 rounded-full pl-2 pr-1'}>Popularity<IoIosArrowDown className={'mt-1.5'}/></button>
                    {/*<button></button>*/}
                </div>
                <div className={'mt-2 flex flex-row gap-2'}>
                    {category.map((businesses, index)=>(
                        <div key={index}>
                            <img src={`http://localhost:5000/upload/${businesses[2]}`} alt={'Restaurant'} className={'w-48 h-36 rounded-xl'}/>
                            <p>{businesses[0]}</p>
                            <p className={'text-green-600 text-xs'}>{businesses[1]}</p>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
};

export default Restaurants;