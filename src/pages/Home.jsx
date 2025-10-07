import React from 'react';

const Home = () => {
    return (
        <div className='container mx-auto p-6 bg-gray-100'>
            {/* Banner Section */}
            <section>
                <h1 className='text-7xl font-bold'>We Build
                    <br />
                    <span className='text-purple-500'>Productive</span> Apps
                </h1>
                <p className='mt-4 text-gray-600 font-semibold'>
                    At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.
                    <br /> Our goal is to turn your ideas into digital experiences that truly make an impact.
                </p>
                
            </section>
        </div>
    );
};

export default Home;