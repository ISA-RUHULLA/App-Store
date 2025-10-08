import React, { useEffect, useState } from 'react';

const Installation = () => {
    const [installedApps, setInstalledApps] = useState([]);

    useEffect(() => {
        const installedIds = JSON.parse(localStorage.getItem("installedApps")) || [];

        // fetch app data
        fetch("/public/appData.json")
            .then((res) => res.json())
            .then((data) => {
                const apps = data.filter((app) => installedIds.includes(app.id));
                setInstalledApps(apps);
            });
    }, []);

    if (installedApps.length === 0) {
        return <p className="text-center mt-10 text-red-500">No apps installed yet.</p>;
    }

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">Installed Apps</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {installedApps.map((app) => (
                    <div key={app.id} className="border p-4 rounded-lg shadow">
                        <img src={app.image} alt={app.title} className="w-32 h-32 object-cover rounded mb-2" />
                        <h2 className="text-xl font-semibold">{app.title}</h2>
                        <p className="text-gray-600">{app.companyName}</p>
                        <p className="text-sm">Size: {app.size}</p>
                        <p className="text-sm">Rating: {app.ratingAvg}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Installation;
