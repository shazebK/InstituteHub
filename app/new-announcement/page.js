"use client";
import React, { useState } from "react";

const NewAnnouncement = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedFormData = {
      ...formData,
      date: new Date().toLocaleDateString(),
    };

    const response = await fetch("/api/saveAnnouncement", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedFormData),
    });

    const data = await response.json();

    if (response.ok) {
      alert("Event was created successfully");
      setFormData({
        title: "",
        description: "",
        date: "",
      });
    } else {
      alert(`Error: ${data.error}`);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="w-full px-4 py-20 flex flex-col items-center justify-center">
      <div className="w-full md:w-2/3">
        <h2 className="text-2xl font-bold mb-4">Create Announcement</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium mb-2">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter announcement title"
            />
          </div>

          <div>
            <label className="block font-medium mb-2">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter announcement description"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Add Announcement
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewAnnouncement;
