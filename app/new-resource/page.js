"use client"
import { useState } from 'react';

export default function ResourceRequestForm() {
  const [formData, setFormData] = useState({
    name: '',
    contactEmail: '',
    purpose: '',
    specialRequests: '',
    date: '',
  });

  const handleChange = (e) => {
    const { name, value} = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedFormData = {
      ...formData,
      date: new Date().toLocaleDateString(),
    };
    
    const response = await fetch("/api/saveResourceRequest", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedFormData),
    });

    const data = await response.json();
    setFormData({
      ...formData,
      date: new Date().toLocaleDateString(),
    });
    if (response.ok) {
      alert("Event was created successfully");
      setFormData({
        name: '',
        contactEmail: '',
        purpose: '',
        specialRequests: '',
        date: '',
      });
    } 
    else {
      alert(`Error: ${data.error}`);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Resource Request Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Student Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="contactEmail" className="block text-sm font-medium text-gray-700">Contact Email</label>
          <input
            type="email"
            id="contactEmail"
            name="contactEmail"
            value={formData.contactEmail}
            onChange={handleChange}
            required
            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="purpose" className="block text-sm font-medium text-gray-700">Purpose of Request</label>
          <textarea
            id="purpose"
            name="purpose"
            value={formData.purpose}
            onChange={handleChange}
            required
            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            rows="4"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="specialRequests" className="block text-sm font-medium text-gray-700">Special Requests</label>
          <textarea
            id="specialRequests"
            name="specialRequests"
            value={formData.specialRequests}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            rows="4"
          />
        </div>

        <div className="mb-4 text-center">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none"
          >
            Submit Request
          </button>
        </div>
      </form>
    </div>
  );
}
