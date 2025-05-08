import React, { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/jobs")
      .then(response => setJobs(response.data))
      .catch(error => console.error("Error fetching jobs:", error));
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold">Job Tracker Dashboard</h1>
      <div className="grid grid-cols-3 gap-4 mt-6">
        {jobs.map(job => (
          <div key={job._id} className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">{job.company}</h2>
            <p className="text-lg">{job.position}</p>
            <p className="text-sm text-gray-500">{job.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
