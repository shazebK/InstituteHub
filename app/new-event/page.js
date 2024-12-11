"use client"
import { useState } from "react";

export default function NewEvent() {

  const [formData, setFormData] = useState({
    title: "",
    location: "",
    date: "",
    description: "",
    access: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/saveEvent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (response.ok) {
      alert("Event was created successfully");
      setFormData({
        title: "",
        location: "",
        date: "",
        description: "",
        access: false,
      });
    } 
    else {
      alert(`Error: ${data.error}`);
    }
  };


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className="w-full p-4 flex flex-col items-center">
      <h1 className="mt-4 text-2xl font-bold">Create Event</h1>
      <form onSubmit={handleSubmit} className="mt-2">
        <div className="my-4">
          <label htmlFor="title" className="text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-2 border border-gray-700 rounded-md focus:outline-none focus:border-indigo-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="location"
            className="text-sm font-medium text-gray-700"
          >
            Location
          </label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full p-2 border border-gray-700 rounded-md focus:outline-none focus:border-indigo-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="date" className="text-sm font-medium text-gray-700">
            Date
          </label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full p-2 border border-gray-700 rounded-md focus:outline-none focus:ring-blue-500 focus:border-indigo-500"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="description"
            className="text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            className="w-full p-2 border border-gray-700 rounded-md focus:outline-none focus:border-indigo-500"
          ></textarea>
        </div>

        <div className="mb-6 flex items-center">
          <input
            name="access"
            value={formData.access}
            onChange={handleChange}
            type="checkbox"
            className="h-4 w-4 text-indigo-600"
          />
          <label className="ml-3 text-sm">
            <span className="text-gray-700 font-medium">
              Registration Required
            </span>
            <span className="text-gray-600 text-sm">
              {" "}
              (This will require the authentication of user while registering)
            </span>
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-indigo-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
