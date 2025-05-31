import '../stylesheets/styles.css';
const Home=()=>{
    return (
        <div>
            <div className={'line1'}>
                {/*<hr className={'line1'}/>*/}
            </div>
            <div className={'line2'}></div>
            <div className={'line3'}></div>
            <div className={'home-container top-11 absolute w-screen h-80'}>
                <div className={'back-img test'}>
                    <h1 className={'text1 font-bold text-center text-white'}>Discover the best of Jamaica</h1>
                    <h1 className={'text2 text-center text-white'}>Find amazing local businesses, from cozy cafes to thrilling adventures, all in one place.</h1>
                    <div className={'text-center'}>
                        <span>
                            <input className={'w-6/12 rounded-2xl h-10 border-none'} placeholder={'Search for business, services, or location'}/>
                            <button className={'p-1 px-2.5 bg-green-400 rounded-xl relative -left-20'}>Search</button>
                        </span>
                    </div>
                </div>
                <div>
                    <div className={'ml-48 mr-48 mt-2'}>
                        <h1>Featured Businesses</h1>
                        <div className={'business_container flex flex-row gap-2 overflow-x-scroll flex-nowrap overflow-y-hidden'}>
                            <div className={'business'}>
                                <img src={'dunnsriver.jpg'}  alt={'River Falls'}/>
                                <p>Business 1</p>
                            </div>
                            <div className={'business'}>
                                <img src={'dunnsriver.jpg'}  alt={'River Falls'}/>
                                <p>Business 1</p>
                            </div>
                            <div className={'business'}>
                                <img src={'river.jpg'}  alt={'River Falls'}/>
                                <p>Business 2</p>
                            </div>
                            <div className={'business'}>
                                <img src={'river.jpg'}  alt={'River Falls'}/>
                                <p>Business 3</p>
                            </div>
                            <div className={'business'}>
                                <img src={'dunnsriver.jpg'}  alt={'River Falls'}/>
                                <p>Business 4</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'mt-8'}>
                    <div className={'ml-48 mr-48 mt-2'}>
                        <h1>Popular Categories</h1>
                        <div className={'flex flex-row gap-2'}>
                            <p className={'categories'}>Restaurants</p>
                            <p className={'categories'}>Accommodations</p>
                            <p className={'categories'}>Transportations</p>
                            <p className={'categories'}>Shopping</p>
                            <p className={'categories'}>Services</p>
                            <p className={'categories'}>Tours</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Home;