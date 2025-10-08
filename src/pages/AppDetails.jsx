import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import DownIcon from '../assets/icon-downloads.png'
import RetIcon from '../assets/icon-ratings.png'
import RevIcon from '../assets/icon-review.png'

const AppDetails = () => {
    const { id } = useParams();
    const [app, setApp] = useState();
    const [loading, setLoading] = useState();
    const [isInstalled, setInstalled] =  useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        fetch("/public/appData.json")
            .then((res) => res.json())
            .then((data) => {
                const found = data.find((item) => item.id === parseInt(id))
                console.log(found)
                setApp(found);
                setLoading(false);

                
            })
    },[id]);

    useEffect (() => {
        if(app) {
            const installedApps =JSON.parse(localStorage.getItem("installedApps")) || [];
                if(installedApps.includes(app.id)){
                    setInstalled(true);
                }
        }
    },[app]);


    const handleInstall = () => {
       const installedApps = JSON.parse(localStorage.getItem("installedApps")) || [];

       if(!installedApps.includes(app.id)){
        installedApps.push(app.id)
        localStorage.setItem("installedApps", JSON.stringify(installedApps))
        setInstalled(true);
       }
       localStorage.setItem("installationAppData", JSON.stringify(app));
    //    navigate("/installation");
    }
    
    if (!app) return <h2 className="text-center mt-20 text-gray-500">App Not Found</h2>;
    return (
        <div>
            <div className="flex flex-col md:flex-row gap-10  mb-10">
                <img src={app.image} alt={app.title} className="w-68 h-68 object-cover rounded-lg" />
                <div className='w-full'>
                    <div className='text-start'>
                        <h1 className="text-3xl font-bold">{app.title}</h1>
                        <p className="text-gray-600 mb-2">{app.companyName}</p>
                        <hr className="border-t-1 border-gray-400 w-full" />
                        <div className='flex gap-10 mt-6'>
                            <div >
                                <img src={DownIcon} alt="" />
                                <p>downloads</p>
                                <p className='font-black text-2xl'>{app.downloads.toLocaleString()}</p>
                            </div>
                            <div >
                                <img src={RetIcon} alt="" />
                                <p>Average Ratings</p>
                                <p className='font-black text-2xl'>{app.ratingAvg.toLocaleString()}</p>
                            </div>
                            <div >
                                <img src={RevIcon} alt="" />
                                <p>Total Reviews</p>
                                <p className='font-black text-2xl'>{app.reviews.toLocaleString()}</p>
                            </div>
                        </div>
                        <button onClick={handleInstall} disabled={isInstalled} className='btn font-bold text-2xl text-white mt-4 px-5 py-2 rounded-lg border bg-green-400'>{isInstalled ? "Installed" : `Install Now (${app.size})`}</button>
                    </div>
                    
                   
                </div>
            </div>
        </div>
    );
};

export default AppDetails;
