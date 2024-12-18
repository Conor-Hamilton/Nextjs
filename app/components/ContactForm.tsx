"use client";

import { useState } from "react";

export default function TabbedContactForm() {
  const [activeTab, setActiveTab] = useState("contact"); 
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    dropdown: "",
    details: "",
  });

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setFormData({
      name: "",
      email: "",
      message: "",
      dropdown: "",
      details: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`${activeTab === "contact" ? "Contact" : "Quote"} form submitted!`);
    console.log("Form Data:", formData);
    setFormData({
      name: "",
      email: "",
      message: "",
      dropdown: "",
      details: "",
    });
  };

  return (
    <div className="space-y-6 mx-auto max-w-lg bg-white p-12 rounded-lg shadow-lg">
      {/* Tab Navigation */}
      <div className="flex justify-center mb-6">
        <button
          className={`px-6 py-2 rounded-l-lg ${
            activeTab === "contact"
              ? "bg-green-700 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => handleTabChange("contact")}
        >
          Contact
        </button>
        <button
          className={`px-6 py-2 rounded-r-lg ${
            activeTab === "quote"
              ? "bg-green-700 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => handleTabChange("quote")}
        >
          Quote
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-gray-700 font-medium mb-1"
          >
            Name:
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-md focus:ring focus:ring-green-300"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-gray-700 font-medium mb-1"
          >
            Email:
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-md focus:ring focus:ring-green-300"
          />
        </div>

        {activeTab === "contact" ? (
          <div>
            <label
              htmlFor="message"
              className="block text-gray-700 font-medium mb-1"
            >
              Message:
            </label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-md focus:ring focus:ring-green-300 resize-none h-48"
            ></textarea>
          </div>
        ) : (
          <>
            <div>
              <label
                htmlFor="dropdown"
                className="block text-gray-700 font-medium mb-1"
              >
                Request Type:
              </label>
              <select
                name="dropdown"
                id="dropdown"
                value={formData.dropdown}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-md focus:ring focus:ring-green-300"
              >
                <option value="">Select an option</option>
                <option value="personal">Personal</option>
                <option value="business">Business</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="details"
                className="block text-gray-700 font-medium mb-1"
              >
                Additional Details:
              </label>
              <textarea
                name="details"
                id="details"
                value={formData.details}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-md focus:ring focus:ring-green-300 resize-none h-48"
              ></textarea>
            </div>
          </>
        )}

        <button
          type="submit"
          className="w-full bg-green-700 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-300"
        >
          Send {activeTab === "contact" ? "Message" : "Request"}
        </button>
      </form>
    </div>
  );
}
