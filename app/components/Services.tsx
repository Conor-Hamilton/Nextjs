"use client";

import { useState } from "react";
import Image from "next/image";

type Service = {
  id: number;
  title: string;
  description: string;
  image: string;
  details: string;
  list?: string[];
};

const services: Service[] = [
  {
    id: 1,
    title: "Garden Maintenance",
    description:
      "Comprehensive garden maintenance services tailored to keep your garden in pristine condition year-round.",
    image: "/garden_maintenance.jpg",
    details:
      "Our garden maintenance service offers comprehensive care for your outdoor space. Our team of experienced professionals will keep your garden looking its best all year round. We offer a range of services, including lawn cutting and edging, weeding, border care, pruning of shrubs and trees, cleanup of leaves and debris, and hedge cutting. We also offer customizable maintenance plans to meet your specific needs.",
    list: [
      "Lawn Cutting and Edging",
      "Weeding",
      "Border Care",
      "Pruning of Shrubs and Trees",
      "Cleanup of Leaves and Debris",
      "Hedge Cutting",
    ],
  },
  {
    id: 2,
    title: "Lawn Care",
    description:
      "Professional lawn care services to keep your garden healthy and visually appealing.",
    image: "/grass.jpeg",
    details:
      "Our lawn care services include lawn feeding, seeding and turfing, mowing, and scarifying. We understand that a healthy lawn is an important feature of the garden—a place for relaxation, play, and enjoyment!",
    list: ["Lawn Feeding", "Seeding and Turfing", "Mowing", "Scarifying"],
  },
  {
    id: 3,
    title: "Hedge Cutting",
    description:
      "Precision trimming services to keep your hedges neat and well-shaped.",
    image: "/hedge.jpg",
    details:
      "Our hedge cutting service is designed to help you keep your hedges and shrubs in perfect shape. Our team uses professional tools to trim and shape hedges, providing a clean, well-manicured look. This service is available as a one-time visit or as part of regular maintenance.",
  },
  {
    id: 4,
    title: "Planting",
    description:
      "Expert planting services to enhance your garden’s beauty and sustainability.",
    image: "/planting.jpg",
    details:
      "Our planting service is perfect for those who want to add color to their garden but lack the time or expertise to do so. We help you select the right plants for your space and plant them in optimal locations to ensure their growth and success. We also provide ongoing care instructions to help your plants thrive for years to come.",
  },
  {
    id: 5,
    title: "Soft Landscaping",
    description:
      "Transform your garden with beautiful designs and non-structural elements.",
    image: "/soft-landscaping.jpg",
    details:
      "Our soft landscaping services include the installation and maintenance of plants, flowers, and other foliage. We help with planting, designing flower beds, sowing grass seeds, pruning plants, and much more. This service is customizable to meet the needs of both small residential gardens and large commercial properties.",
    list: [
      "Planting and maintaining flowers, shrubs, and trees",
      "Designing and installing flower beds",
      "Sowing grass seed for lawns",
      "Pruning and trimming plants",
      "Fertilizing and mulching",
      "Controlling weeds and pests",
      "Designing and installing irrigation systems",
    ],
  },
];

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState<Service>(services[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleTabChange = (service: Service) => {
    setActiveTab(service);
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="py-12 bg-gray-100 text-center">
      <h2 className="text-2xl md:text-4xl font-bold mb-8 text-gray-800">
        Services We Offer
      </h2>

      <div className="flex flex-col md:flex-row max-w-6xl mx-auto">
        <div className="flex-shrink-0 w-full md:w-1/4 bg-white shadow-md rounded-lg p-4 space-y-4">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => handleTabChange(service)}
              className={`block w-full text-left px-4 py-2 rounded-lg ${
                activeTab.id === service.id
                  ? "bg-green-700 text-white"
                  : "bg-gray-200 text-gray-700"
              } hover:bg-green-600 transition`}
            >
              {service.title}
            </button>
          ))}
        </div>

        <div className="flex-grow bg-white shadow-md rounded-lg p-6 ml-0 md:ml-6">
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
            <div className="w-48 h-48 relative rounded-lg overflow-hidden shadow-md">
              <Image
                src={activeTab.image}
                alt={activeTab.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="text-left">
              <h3 className="text-xl font-bold text-green-700 mb-4">
                {activeTab.title}
              </h3>
              <p className="text-gray-600 mb-6">{activeTab.description}</p>
              <button
                onClick={handleModalOpen}
                className="px-4 py-2 bg-green-700 text-white rounded hover:bg-green-600 transition"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-11/12 md:w-1/2 relative shadow-lg overflow-y-auto max-h-[80vh]">
            <button
              onClick={handleModalClose}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-2xl"
            >
              &times;
            </button>
            <Image
              src={activeTab.image}
              alt={activeTab.title}
              width={500}
              height={300}
              className="rounded-md mx-auto mb-4 object-cover"
            />
            <h3 className="text-2xl font-bold text-green-700 mb-4">
              {activeTab.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">{activeTab.details}</p>

            {activeTab.list && (
              <ul className="mt-6 text-gray-600 list-disc pl-6">
                {activeTab.list.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
