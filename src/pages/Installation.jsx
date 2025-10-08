import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';


const Installation = () => {
    const [installedApps, setInstalledApps] = useState([]);

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

    if (installedApps.length === 0) {
        return <p className="text-center mt-10 text-red-500">No apps installed yet.</p>;
    }

    return (
        <div className="p-6 mb-4 bg-gray-100">
            <div>
                <h1 className="text-4xl font-bold mb-2">Your Installed Apps</h1>
                <p className='font-semibold text-gray-500'>Explore All Trending Apps on the Market developed by us</p>
            </div>

            <div className='flex justify-between mt-6'>
                <div>
                    <h1 className='font-bold text-2xl'>({installedApps.length}) App Found</h1>
                </div>
                <div>
                    <input
                        type="text"
                        placeholder='Sort By Size'
                        className='rounded p-2 text-center shadow-lg'
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 gap-3 mt-6">
                {installedApps.map((app) => (
                    <div
                        key={app.id}
                        className="flex justify-between items-center p-4 rounded-lg shadow bg-white"
                    >
                        {/* Left part: image + info */}
                        <div className="flex gap-6 items-center">
                            <img src={app.image} alt={app.title} className="w-24 h-24 object-cover rounded" />
                            <div>
                                <h2 className="text-xl font-semibold">{app.title}</h2>
                                <div className='flex gap-5 mt-1'>
                                    <p className="font-semibold text-sm text-green-500">{app.downloads}</p>
                                    <p className="font-semibold text-sm text-orange-400">{app.ratingAvg}</p>
                                    <p className="font-semibold text-sm text-gray-600">{app.size}</p>
                                </div>
                            </div>
                        </div>

                        {/* Right part: uninstall button */}
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
