"use client"
import ResourceRequestCard from '@/components/UI/resource_request_card';
import { useEffect, useState } from 'react';

export default function ResourceRequests() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    // Replace this with your actual data fetching logic (API or static data)
    const fetchRequests = async () => {
      const response = await fetch('/api/getAllResourceRequests'); // Replace with actual API
      const data = await response.json();
      setRequests(data);
    };
    fetchRequests();
  }, []);

  return (
    <div className="max-w-3xl py-5 mx-auto mt-10">
      <h2 className="text-3xl font-bold text-center mb-6">Resource Requests</h2>
      <div>
      {requests.length === 0 ? (
        <p className="text-center text-gray-500">No requests available.</p>
      ) : (
        requests.map((request, index) => <ResourceRequestCard key={index} request={request} />)
      )}
    </div>
    </div>
  );
}
