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
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">{eventData.title}</h1>
      <p>Location: {eventData.location}</p>
      <p>Date: {eventData.date}</p>
      <p>Description: {eventData.description}</p>
    </div>
  );
}
