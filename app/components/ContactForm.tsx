"use client";

import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
  dropdown: string;
  details: string;
}

interface ErrorMessages {
  name: string;
  email: string;
  message: string;
  dropdown: string;
  details: string;
}

interface ValidationRule {
  required: boolean;
  message: string;
  pattern?: {
    regex: RegExp;
    message: string;
  };
}

type ValidationRules = Record<keyof FormData, ValidationRule>;

export default function TabbedContactForm() {
  const [activeTab, setActiveTab] = useState<"contact" | "quote">("quote");
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
    dropdown: "",
    details: "",
  });
  const [errors, setErrors] = useState<ErrorMessages>({
    name: "",
    email: "",
    message: "",
    dropdown: "",
    details: "",
  });

  const validationRules: ValidationRules = {
    name: {
      required: true,
      message: "Please enter your name.",
    },
    email: {
      required: true,
      message: "Please enter your email.",
      pattern: {
        regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: "Please enter a valid email address.",
      },
    },
    message: {
      required: activeTab === "contact",
      message: "Message is required.",
    },
    dropdown: {
      required: activeTab === "quote",
      message: "Please select a request type.",
    },
    details: {
      required: activeTab === "quote",
      message: "Additional details are required.",
    },
  };

  const handleTabChange = (tab: "contact" | "quote") => {
    setActiveTab(tab);
    setFormData({
      name: "",
      email: "",
      message: "",
      dropdown: "",
      details: "",
    });
    setErrors({
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
    setErrors({ ...errors, [name]: "" });
  };

  const validate = (): boolean => {
    const newErrors: ErrorMessages = {
      name: "",
      email: "",
      message: "",
      dropdown: "",
      details: "",
    };
    let isValid = true;

    Object.entries(validationRules).forEach(([field, rules]) => {
      const value = formData[field as keyof FormData];
      if (rules.required && !value.trim()) {
        newErrors[field as keyof ErrorMessages] = rules.message;
        isValid = false;
      } else if (rules.pattern && !rules.pattern.regex.test(value)) {
        newErrors[field as keyof ErrorMessages] = rules.pattern.message;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      alert(`${activeTab === "contact" ? "Contact" : "Quote"} form submitted!`);
      console.log("Form Data:", formData);
      setFormData({
        name: "",
        email: "",
        message: "",
        dropdown: "",
        details: "",
      });
      setErrors({
        name: "",
        email: "",
        message: "",
        dropdown: "",
        details: "",
      });
    }
  };

  return (
    <div className="space-y-6 mx-auto max-w-lg bg-white p-12 rounded-lg shadow-lg">
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
            className={`w-full p-3 border rounded-md ${
              errors.name ? "border-red-500" : "border-gray-300"
            } focus:ring focus:ring-green-300`}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
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
            className={`w-full p-3 border rounded-md ${
              errors.email ? "border-red-500" : "border-gray-300"
            } focus:ring focus:ring-green-300`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
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
              className={`w-full p-3 border rounded-md resize-none h-48 ${
                errors.message ? "border-red-500" : "border-gray-300"
              } focus:ring focus:ring-green-300`}
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
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
                className={`w-full p-3 border rounded-md ${
                  errors.dropdown ? "border-red-500" : "border-gray-300"
                } focus:ring focus:ring-green-300`}
              >
                <option value="">Select an option</option>
                <option value="personal">Personal</option>
                <option value="business">Business</option>
              </select>
              {errors.dropdown && (
                <p className="text-red-500 text-sm mt-1">{errors.dropdown}</p>
              )}
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
                className={`w-full p-3 border rounded-md resize-none h-48 ${
                  errors.details ? "border-red-500" : "border-gray-300"
                } focus:ring focus:ring-green-300`}
              ></textarea>
              {errors.details && (
                <p className="text-red-500 text-sm mt-1">{errors.details}</p>
              )}
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
