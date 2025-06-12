import '../../stylesheets/styles.css';
import {useState, useEffect} from "react";

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
            <p>{category[0]}</p>
            <p>{category[1]}</p>
        </div>
    )
};

export default Restaurants;