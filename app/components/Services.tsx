import Image from "next/image";

const services = [
  {
    id: 1,
    title: "Garden Maintenance",
    description:
      "Our garden maintenance service offers comprehensive care for your outdoor space.",
    image: "/garden_maintenance.jpg",
  },
  {
    id: 2,
    title: "Grass Cutting",
    description:
      "We understand that a healthy lawn is an important feature of the garden.",
    image: "/grass.jpeg",
  },
  {
    id: 3,
    title: "Hedge Cutting",
    description:
      "Our hedge cutting service is designed to keep your hedges in perfect shape.",
    image: "/hedge.jpg",
  },
  {
    id: 4,
    title: "Soft Landscaping",
    description:
      "Work with us to create a customized landscaping plan for your property.",
    image: "/soft-landscaping.jpg",
  },
  {
    id: 5,
    title: "Planting",
    description:
      "Perfect for those who want to add color to their garden without hassle.",
    image: "/planting.jpg",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-12 bg-gray-100 text-center">
      <h2 className="text-2xl md:text-4xl font-bold mb-8 text-gray-800">
        Services We Offer
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-12">
        {services.map((service) => (
          <div
            key={service.id}
            className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
          >
            <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden relative">
              <Image
                src={service.image}
                alt={service.title}
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-green-700">
              {service.title}
            </h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
