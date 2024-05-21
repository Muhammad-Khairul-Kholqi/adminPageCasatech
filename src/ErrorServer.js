import React from 'react';
import { Link } from 'react-router-dom';

const ErrorServer = () => {
  return (
    <div className="flex flex-col items-center p-[20px] flex-wrap justify-center h-screen">
      <h2 className="mt-4 text-2xl">500 - Server Error</h2>
      <p>Something went wrong on our end. Please try again later.</p>
      <Link to="/dashboard-admin">
        <button className="border border-blue-600 text-blue-600 p-[5px] mt-[10px]">Back to Dashboard</button>
      </Link>
    </div>
  );
}

export default ErrorServer;
