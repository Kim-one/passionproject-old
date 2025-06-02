import '../stylesheets/styles.css';
const AddBusiness = () => {
    return (
        <div className={'test top-11 absolute w-screen'}>
            <h1 className={'text-center mt-1'}>Submit your business!</h1>
            <form className={'flex flex-col w-4/12 mt-1 mr-auto ml-auto relative'}>
                <label className={'mt-1'}>Business Name</label>
                <input type={'text'}
                       className={'border-gray-400 border rounded h-10 mt-1 focus:outline-0 pl-1'}
                       placeholder={'Enter Business Name'}
                       required={true}
                />
                <label className={'mt-1'}>Category</label>
                <select className={'border-gray-400 border rounded h-10 mt-1'} required={true}>
                    <option>Select an Option</option>
                    <option>Restaurant</option>
                    <option>Transportation</option>
                    <option>Accommodation</option>
                    <option>Tours</option>
                </select>
                <label className={'mt-1'}>Description</label>
                <textarea className={'border border-gray-400 h-24 rounded mt-1 resize-none focus:outline-0 pl-1'}
                          placeholder={'Describe your business in detail'} required={true}></textarea>
                <label className={'mt-1'}>Address</label>
                <input className={'h-10 border border-gray-400 rounded mt-1 focus:outline-0 pl-1'}
                       placeholder={'Enter Address'}
                       required={true}
                />
                <label className={'mt-1'}>Phone Number</label>
                <input className={'border border-gray-400 rounded h-10 mt-1 focus:outline-0 pl-1'}
                       placeholder={'Enter Phone Number'}
                       required={true}
                />
                <label className={'mt-1'}>Email</label>
                <input type={'email'} className={'border border-gray-400 h-10 rounded mt-1 focus:outline-0 pl-1'}
                       placeholder={'Enter email'}
                       required={true}
                />
                <label className={'mt-1'}>Website</label>
                <input className={'border border-gray-400 rounded h-10 mt-1 focus:outline-0 pl-1'}
                       placeholder={'Enter URL'}
                       required={true}
                />
                <label className={'mt-1'}>Upload Photos</label>
                {/*<input type={'file'} className={'mt-1 border-dashed'} required={true}/>*/}
                <div className={'dropzone mt-1 border border-gray-400 border-dashed h-36 w-full rounded-xl justify-center items-center'}>
                    <p className={'text-center mt-4'}>Drag and Drop or Browse</p>
                    <p className={'text-center'}>Upload up to 5 photos that best represent your business</p>
                    <input type={'file'} placeholder={'Browse files'} className={'ml-28 mt-2'}/>
                </div>
                <button type={'submit'} className={'p-1 bg-green-400 ml-32 mr-32 mt-2 rounded-xl flex-nowrap'}>Submit Business</button>
            </form>
        </div>
    );
};

export default AddBusiness;