import Image from "next/image";
import ContactForm from "./components/ContactForm";
import Carousel from "./components/Carousel";
import ServicesSection from "./components/Services";

export default function HomePage() {
  return (
    <div className="relative">
      <section className="relative h-[65vh] md:h-[75vh] overflow-hidden">
        <Image
          src="/garden.jpg"
          alt="Beautiful Garden"
          layout="fill"
          objectFit="cover"
          priority
          className="brightness-75"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-3xl md:text-6xl font-bold text-white">
            Transform Your Garden
          </h1>
          <p className="text-lg md:text-2xl text-gray-200 mt-4 max-w-2xl">
            Quality landscaping and garden design services that inspire.
          </p>
          <a
            href="#contact"
            className="mt-6 inline-block bg-green-700 text-white py-2 px-6 rounded hover:bg-green-600 transition-transform duration-300 transform hover:scale-105"
          >
            Get a Free Quote
          </a>
        </div>
      </section>

      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 w-32 h-32 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-green-700 bg-white shadow-lg">
        <Image
          src="/logo.jpg"
          alt="Bluebell Robin Gardens Logo"
          width={270}
          height={270}
          className="object-cover"
        />
      </div>

      <section className="py-20 bg-gray-100 text-center">
        <ServicesSection />
      </section>

      <section className="py-24 bg-gray-100 text-center">
        <Carousel />
      </section>

      <section
        id="contact"
        className="py-8 px-6 bg-gray-100 text-center text-xl"
      >
        <h3 className="text-gray-600 mb-6">
          Have a question or need a quote? Fill out the form below, and we will
          get back to you.
        </h3>
        <ContactForm />
      </section>
    </div>
  );
}
