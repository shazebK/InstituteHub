"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Events() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchEvents() {
      try {
        const response = await fetch("/api/getAllEvents");
        const data = await response.json();
        setEvents(data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch events:", error);
      }
    }

    fetchEvents();
  }, []);

  if (loading) return <p className="text-lg font-semibold text-center py-4">Loading Events...</p>;

  return (
    <div className="px-6 py-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Events</h1>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {events.length>0?
        events.map((event) => (
          <EventCard key={event._id} event={event} />
        ))
        :
        <p>No Event was Found</p>
      }
      </div>
    </div>
  );
}

const EventCard = ({ event }) => {
  return (
    <Link href = {`/events/${event._id}`}>
      <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
        <h1 className="text-xl font-semibold text-gray-700 mb-2">
          {event.title}
        </h1>
        <h3 className="text-gray-500 text-sm mb-1">
          <span className="font-medium text-gray-700">Date:</span> {event.date}
        </h3>
        <h3 className="text-gray-500 text-sm">
          <span className="font-medium text-gray-700">Location:</span>{" "}
          {event.location}
        </h3>
      </div>
    </Link>
  );
};
