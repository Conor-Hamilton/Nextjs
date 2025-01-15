import ContactForm from "../components/ContactForm";

export default function ContactPage() {
  return (
    <div>
      <section
        className="relative h-72 md:h-96 flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: "url('/garden2.jpg')", // Replace with your image
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold">Contact Us</h1>
          <p className="text-lg md:text-2xl mt-2">
            Let's create the garden of your dreams.
          </p>
        </div>
      </section>

      <section className="relative">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-green-700 bg-opacity-75"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto py-16 px-4 text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Get in Touch
              </h2>
              <p className="text-lg mb-8">
                We’d love to hear from you. Reach out to us via phone or email,
                or use the form to send us a message.
              </p>
              <div className="space-y-6">
                <div className="flex items-center">
                  <span className="material-icons text-3xl mr-4">phone</span>
                  <span className="text-xl">+44 123 456 7890</span>
                </div>
                <div className="flex items-center">
                  <span className="material-icons text-3xl mr-4">email</span>
                  <span className="text-xl">info@example.com</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Send Us a Message
              </h3>
              <p className="text-gray-600 mb-6">
                Fill out the form below, and we’ll get back to you as soon as
                possible.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
