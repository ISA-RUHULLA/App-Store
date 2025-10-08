import React from 'react';
import { useEffect, useState } from 'react';
import Hero from '../assets/hero.png';
import { useNavigate } from 'react-router-dom';
import DownIcon from '../assets/icon-downloads.png'
import RtIcon from '../assets/icon-ratings.png'

const Home = () => {
 const [apps, setApps] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    useEffect(() => {
        fetch("appData.json")
            .then((response) => response.json())
            .then((data) => {
                setApps(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching app data:", error);
                setLoading(false);
            });
    }, []);
    if (loading) {
        return <div>Loading...</div>;
    }
    return (
        <div className='bg-gray-100'>
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
                <div className="flex justify-center mt-8 gap-4">
                    <a
                        href="https://play.google.com/"
                        target="_blank"
                        className="font-semibold border border-gray-500 px-6 py-2 rounded-lg"
                    >
                        Play Store
                    </a>
                    <a
                        href="https://www.apple.com/app-store/"
                        target="_blank"
                        className="font-semibold border border-gray-500 px-6 py-2 rounded-lg"
                    >
                        App Store
                    </a>
                </div>
                <div className='mt-10 flex justify-center'>
                    <img src={Hero} alt="Hero" />
                </div>
            </section>
                                    {/* Features Section */}
            <section className="bg-gradient-to-r from-purple-700 to-purple-500 text-white py-12">
                <div className="container mx-auto text-center">
                    <h1 className="text-3xl font-bold mb-12">
                        Trusted By Millions, Built For You
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <p className="text-sm mb-1">Total Downloads</p>
                            <h2 className="text-4xl font-bold">29.6M</h2>
                            <p className="text-sm mt-1 text-purple-200">21% More Than Last Month</p>
                        </div>
                        <div>
                            <p className="text-sm mb-1">Total Reviews</p>
                            <h2 className="text-4xl font-bold">906K</h2>
                            <p className="text-sm mt-1 text-purple-200">46% More Than Last Month</p>
                        </div>
                        <div>
                            <p className="text-sm mb-1">Active Apps</p>
                            <h2 className="text-4xl font-bold">132+</h2>
                            <p className="text-sm mt-1 text-purple-200">31 More Will Launch</p>
                        </div>
                    </div>
                </div>
            </section>
                                          {/* App Section */}
            <section>
                <div>
                    <h1 className='text-4xl font-bold text-center mt-12'>Trending Apps</h1>
                    <p className='text-center text-gray-600 mt-4'>Explore All Trending Apps on the Market developed by us</p>
                    
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6'>
                    {
                        apps.slice(0, 8).map((app) => (
                            <div
                                key={app.id}
                                onClick={() => navigate(`/apps/${app.id}`)}
                                className="border p-4 rounded-lg shadow-md hover:shadow-lg cursor-pointer transition">
                                <img src={app.image} alt={app.title}
                                    className="w-full h-48 object-cover rounded-md mb-4" />
                                <h2 className="text-xl font-bold mb-2">{app.title}</h2>
                                <div className='flex justify-between items-center'>
                                    <p className='flex font-bold text-green-500 rounded bg-green-100 px-2'><img src={DownIcon} alt="Download" className='w-3 h-4 mt-1 mr-1' />{app.downloads}</p>
                                    <p className='flex font-bold text-orange-500 rounded bg-orange-200 px-2'><img src={RtIcon} alt="" className='w-3 h-4 mt-1 mr-1' />{app.ratingAvg}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div>
                    <button onClick={() => navigate("/apps")} className='mt-4 bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 cursor-pointer'>Show All </button>
                </div>
            </section>

        </div>
    );
};

export default Home;