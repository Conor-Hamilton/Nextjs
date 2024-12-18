import Image from "next/image";

export default function HomePage() {
  return (
    <div className="relative">
      {/* Hero Section with Background Image */}
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
            href="/quote"
            className="mt-6 inline-block bg-green-700 text-white py-2 px-6 rounded hover:bg-green-600 transition-transform duration-300 transform hover:scale-105"
          >
            Get a Free Quote
          </a>
        </div>
      </section>

      <div className="absolute top-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-32 h-32 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-green-700 bg-white shadow-lg">
        <Image
          src="/logo.jpg"
          alt="Bluebell Robin Gardens Logo"
          width={270}
          height={270}
          className="object-cover"
        />
      </div>

      <section className="py-12 bg-gray-100 text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-8 text-gray-800">
          Services We Offer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-6 md:px-12">
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
              Regular care to keep your garden looking its best.
            </p>
          </div>

          <div className="p-6 rounded-lg">
            <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden relative">
              <Image
                src="/grass.jpeg"
                alt="Garden Maintenance"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-green-700">
              Grass Cutting
            </h3>
            <p className="text-gray-600">
              Professional mowing for a clean, healthy lawn.
            </p>
          </div>

          <div className="p-6 rounded-lg">
            <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden relative">
              <Image
                src="/hedge.jpg"
                alt="Garden Maintenance"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-green-700">
              Hedge Cutting
            </h3>
            <p className="text-gray-600">
              Precise trimming to keep your hedges in shape.
            </p>
          </div>

          <div className="p-6 rounded-lg">
            <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden relative">
              <Image
                src="/planting.jpg"
                alt="Garden Maintenance"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-green-700">
              Planting
            </h3>
            <p className="text-gray-600">
              Beautify your space with professional planting.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 text-center bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 text-gray-800">
            Stress-Free Garden Care
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Life can be busy, and maintaining your garden takes time. At
            Bluebell & Robin, we care for your garden so you can relax and enjoy
            your outdoor space.
          </p>
        </div>
      </section>
    </div>
  );
}
