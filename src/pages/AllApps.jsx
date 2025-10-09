import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NotFoundPage from './NotFoundPage';
import DownIcon from '../assets/icon-downloads.png';
import RtIcon from '../assets/icon-ratings.png';
import Loader from "../components/Loader";

const AllApps = () => {
  const [apps, setApps] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [searchLoading, setSearchLoading] = useState(false); 
  const navigate = useNavigate();

  
  useEffect(() => {
    fetch('appData.json')
      .then((res) => res.json())
      .then((data) => {
        setApps(data);
        setFiltered(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  
  useEffect(() => {
    if (!apps.length) return;

    setSearchLoading(true); 

    const delay = setTimeout(() => {
      const result = apps.filter((app) =>
        app.title.toLowerCase().includes(search.toLowerCase())
      );
      setFiltered(result);
      setSearchLoading(false);
    }, 500); 

    return () => clearTimeout(delay); 
  }, [apps, search]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="bg-gray-100 p-4">
      <div>
        <h1 className="text-5xl text-black font-bold">Our All Applications</h1>
        <p className="mt-4 text-gray-400">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      <div className="flex justify-between items-center mt-8">
        <p className="mt-4 font-bold text-black text-2xl">
          ({filtered.length}) Apps Found
        </p>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search Apps..."
          className="text-black mt-2 p-2 w-full md:w-1/3 border border-gray-300 rounded"
        />
      </div>

      
      {searchLoading ? (
        <div className="flex justify-center items-center mt-8">
          <Loader />
        </div>
      ) : filtered.length > 0 ? (
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((app) => (
            <div
              key={app.id}
              onClick={() => navigate(`/apps/${app.id}`)}
              className="border p-4 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer"
            >
              <img
                src={app.image}
                alt={app.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h2 className="text-xl text-black font-bold mb-2">{app.title}</h2>
              <div className="flex justify-between items-center">
                <p className="flex font-bold text-green-500 rounded bg-green-100 px-2">
                  <img
                    src={DownIcon}
                    alt="Download"
                    className="w-3 h-4 mt-1 mr-1"
                  />
                  {app.downloads}
                </p>
                <p className="flex font-bold text-orange-500 rounded bg-orange-200 px-2">
                  <img
                    src={RtIcon}
                    alt=""
                    className="w-3 h-4 mt-1 mr-1"
                  />
                  {app.ratingAvg}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="mt-8 text-gray-500">
          <NotFoundPage />
        </p>
      )}
    </div>
  );
};

export default AllApps;
