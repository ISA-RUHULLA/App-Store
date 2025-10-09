import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import DownIcon from '../assets/icon-downloads.png'
import RtIcon from '../assets/icon-ratings.png'


const Installation = () => {
    const [installedApps, setInstalledApps] = useState([]);
    const [sortBy, setSortBy] = useState("");

    useEffect(() => {
        const installedIds = JSON.parse(localStorage.getItem("installedApps")) || [];

    
        fetch("/public/appData.json")
            .then((res) => res.json())
            .then((data) => {
                const apps = data.filter((app) => installedIds.includes(app.id));
                setInstalledApps(apps);
            });
    }, []);

    const handleUninstall = (appId) => {
        const existingIds = JSON.parse(localStorage.getItem("installedApps")) || [];
        const updateIds = existingIds.filter(id => id !== appId);
        localStorage.setItem("installedApps", JSON.stringify(updateIds));

        toast.success(`Uninstalled Successfully`);

        const updatedApps =installedApps.filter(app => app.id !== appId);
        setInstalledApps(updatedApps);
    }
    const sortedApps = [...installedApps].sort((a, b) => {
        if (sortBy === "rating") return b.ratingAvg - a.ratingAvg;
        if (sortBy === "size") return b.size - a.size;
        return 0;
    });

    if (installedApps.length === 0) {
        return <p className="text-center mt-10 text-red-500">No apps installed yet.</p>;
    }

    return (
        <div className="p-6 bg-gray-100">
            <div>
                <h1 className="text-4xl text-black font-bold mb-2">Your Installed Apps</h1>
                <p className='font-semibold text-gray-500'>Explore All Trending Apps on the Market developed by us</p>
            </div>

            <div className='flex justify-between mt-6 items-center'>
                <h1 className='font-bold text-black text-2xl'>
                    ({installedApps.length}) App Found
                </h1>
                <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className='rounded p-2 text-black text-center shadow-lg font-semibold cursor-pointer'
                >
                    <option value="">Sort By</option>
                    <option value="rating">Sort By Rating</option>
                    <option value="size">Sort By Size</option>
                </select>
            </div>
            <div className="grid grid-cols-1 gap-3 mt-6">
                {sortedApps.map((app) => (
                    <div
                        key={app.id}
                        className="flex justify-between items-center p-4 rounded-lg shadow bg-white"
                    >
                        <div className="flex gap-6 items-center">
                            <img src={app.image} alt={app.title} className="w-24 h-24 object-cover rounded" />
                            <div className='text-start'>
                                <h2 className="text-xl text-black font-semibold">{app.title}</h2>
                                <div className='flex gap-5 mt-1'>
                                    <p className="flex font-semibold text-sm text-green-500">
                                        <img src={DownIcon} alt="Download" className='w-3 h-3 mt-1 mr-1' />{app.downloads}
                                    </p>
                                    <p className="flex font-semibold text-sm text-orange-400">
                                        <img src={RtIcon} alt="Rating" className='w-3 h-3 mt-1 mr-1' />{app.ratingAvg}
                                    </p>
                                    <p className="font-semibold text-sm text-gray-600">{app.size} MB</p>
                                </div>
                            </div>
                        </div>

                        <button
                            className='bg-green-400 hover:bg-green-500 text-white font-bold px-6 py-2 rounded'
                            onClick={() => handleUninstall(app.id)}
                        >
                            Uninstall
                        </button>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default Installation;
