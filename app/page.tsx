import Image from "next/image";
import ContactForm from "./components/ContactForm";
import Carousel from "./components/Carousel";

export default function HomePage() {
  return (
    <div className="relative">
      <section className="relative h-[75vh] md:h-screen overflow-hidden">
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

      <div className="absolute top-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 w-32 h-32 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-green-700 bg-white shadow-lg">
        <Image
          src="/logo.jpg"
          alt="Bluebell Robin Gardens Logo"
          width={270}
          height={270}
          className="object-cover"
        />
      </div>

      <section className="py-32 bg-gray-100 text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-8 text-gray-800">
          Services We Offer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 px-6 md:px-12">
          <div className="p-6 rounded-lg">
            <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden relative">
              <Image
                src="/garden_maintenance.jpg"
                alt="Garden Maintenance"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>

            <h3 className="text-xl font-semibold mb-2 text-green-700">
              Garden Maintenance
            </h3>
            <p className="text-gray-600">
              Our garden maintenance service offers comprehensive care for your
              outdoor space.
            </p>
          </div>

          <div className="p-6 rounded-lg">
            <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden relative">
              <Image
                src="/grass.jpeg"
                alt="Grass Cutting"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-green-700">
              Grass Cutting
            </h3>
            <p className="text-gray-600">
              We understand that a healthy lawn is an important feature of the
              garden. The place for relaxation, play and enjoyment!
            </p>
          </div>

          <div className="p-6 rounded-lg">
            <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden relative">
              <Image
                src="/hedge.jpg"
                alt="Hedge Cutting"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-green-700">
              Hedge Cutting
            </h3>
            <p className="text-gray-600">
              Our hedge cutting service is designed to help you keep your hedges
              and shrubs in perfect shape.
            </p>
          </div>
          <div className="p-6 rounded-lg">
            <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden relative">
              <Image
                src="/soft-landscaping.jpg"
                alt="Soft Landscaping"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-green-700">
              Soft Landscaping
            </h3>
            <p className="text-gray-600">
              Our soft landscaping service will be able to work with you to
              create a customised plan that meets your needs and budget, whether
              you have a small residential garden or a large commercial
              property.
            </p>
          </div>

          <div className="p-6 rounded-lg">
            <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden relative">
              <Image
                src="/planting.jpg"
                alt="Planting"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-green-700">
              Planting
            </h3>
            <p className="text-gray-600">
              Our planting service is perfect for those who want to add colour
              to their garden, but don’t have the time or expertise to complete
              that.
            </p>
          </div>
        </div>
      </section>

      <section className="py-52 bg-gray-100 text-center">
<div className="py-12">

          <Carousel />
</div>
      </section>

      <section
        id="contact"
        className="py-12 px-6 bg-gray-100 text-center text-xl"
      >
        <h3 className="text-gray-600 mb-8">
          Have a question or need a quote? Fill out the form below, and we will
          get back to you.
        </h3>
        <ContactForm />
      </section>
    </div>
  );
}
