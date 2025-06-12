import '../stylesheets/styles.css';

const About = () => {
    return (
        <div className={'w-full top-11 absolute'}>
            <div className={'ml-52 mr-52'}>
                <h1 className={'text-center text-4xl'}>About Us</h1>
                <p className={'mt-2 text-2xl'}>Our Story</p>
                <p className={'mt-2'}>Founded in 2025, 876 Explore began as a passion project to highlight hidden gems of Jamaica's beautiful landscape.
                What started as a simple directory has grown into a comprehensive platform, thanks to the support of out community and
                the dedication of the owner. We're committed to continuous improvement and expanding my reach to feature every corner of
                Jamaica's diverse marketplace.</p>
                <p className={'text-2xl mt-2'}>Our Mission</p>
                <p className={'mt-2'}>876 Explore is dedicated to showcasing the vibrant tapestry of Jamaican businesses, from cozy cafes to
                    artisan workshops. Our mission is to connect locals and tourists with the unique offerings that make
                    Jamaica's economy thrive. We believe in the power of community and the importance of supporting entrepreneurs.
                </p>

                <p className={'text-2xl mt-4'}>Meet the Owner</p>
                <div className={'border border-black border-solid rounded-full h-64 w-64 mt-4'}></div>
                <p className={'mt-4 text-2xl'}>Get in Touch</p>
                <p className={'mt-2'}>I'd love to hear from you! Whether you're a business owners, a customer, or just curious about 876 Explore, feel free to reach out.
                Follow on social media for the latest updates and features.
                </p>
                <div className={'flex flex-row gap-2 mt-4'}>
                    <button className={'p-3 bg-gray-300 rounded-3xl'}>Contact Us</button>
                    <button className={'p-3 bg-gray-300 rounded-3xl'}>Follow Us</button>
                </div>
            </div>
        </div>
    )
};

export default About;