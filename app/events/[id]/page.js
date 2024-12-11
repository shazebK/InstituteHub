"use client";
import { useEffect, useState } from "react";

export default function EventInfo({ params }) {
  const [eventData, setEventData] = useState(null);

  useEffect(() => {
    async function fetchEvent() {
      const response = await fetch(`/api/getEvent/${params.id}`);
      const data = await response.json();
      setEventData(data);
    }
    fetchEvent();
  }, [params.id]);

  if (!eventData) return <div>Loading...</div>;

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-xl rounded-lg">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-6 text-center">{eventData.title}</h1>
      <div className="space-y-4">
        <div className="flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold text-gray-700">Location</h2>
          <p className="text-gray-800">{eventData.location}</p>
        </div>
        <div className="flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold text-gray-700">Date</h2>
          <p className="text-gray-800">{eventData.date}</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg shadow-sm flex justify-center items-center">
          <p className="text-gray-800">{eventData.description}</p>
        </div>
      </div>
    </div>
  );
}
