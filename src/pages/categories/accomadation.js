import '../../stylesheets/styles.css';
import {useEffect, useState} from "react";
import { IoIosArrowDown } from "react-icons/io";

const Accommodation =()=>{
    const [category, setCategory] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/accommodations')
            .then((res)=>{
                return res.json()
            })
            .then((category)=>{
                setCategory(category)
            })
            .catch((error)=>{
                console.log("Error fetching data: ", error)
            })
    },[])
    return (
        <div className={'absolute mt-11 w-full'}>
            <h1 className={'text-center'}>Accommodations</h1>
            <div className={'ml-28 mr-28 border border-solid border-black'}>
                <p className={'text-center mt-4'}>Explore some of the best air bnb accommodations in Jamaica</p>
                <div className={'flex gap-2 mt-6'}>
                    <button className={'bg-gray-300 flex gap-1 rounded-full pl-2 pr-1'}>Rating<IoIosArrowDown className={'mt-1.5'}/> </button>
                    <button className={'bg-gray-300 flex gap-1 rounded-full pl-2 pr-1'}>Distance<IoIosArrowDown className={'mt-1.5'}/></button>
                    <button className={'bg-gray-300 flex gap-1 rounded-full pl-2 pr-1'}>Popularity<IoIosArrowDown className={'mt-1.5'}/></button>
                    {/*<button></button>*/}
                </div>
                <div className={'flex gap-2 mt-6'}>
                    {category.map((categories, index)=>(
                        <div key={index} className={'border border-black border-solid w-48'}>
                            {/*<img src={''}/>*/}
                            <p>{categories[0]}</p>
                            {/*<p>{categories[1]}</p>*/}
                        </div>
                    ))}
                </div>
            </div>
            {/*<p>{category[0]}</p>*/}
        </div>
    )
}

export default Accommodation;