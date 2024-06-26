import React from 'react';
import IlustrasiNotFound from './Assets/not-found.png';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center p-[20px] flex-wrap justify-center h-screen">
      <img className="w-[200px] max-w-[100%]" src={IlustrasiNotFound} alt="Not Found Illustration" draggable="false" />
      <h2 className="mt-4 text-2xl">404 - Not Found</h2>
      <p>The page you are looking for does not exist</p>
      <Link to="/dashboard-admin">
        <button className="border border-blue-600 text-blue-600 p-[5px] mt-[10px]">Back to Dashboard</button>
      </Link>
    </div>
  );
}

export default NotFound;
