export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white text-center py-6">
      <p>
        &copy; {new Date().getFullYear()} Bluebell Robin Gardens. All rights
        reserved.
      </p>
      <div className="flex justify-center mt-2 space-x-4">
        <a
          href="https://www.facebook.com/profile.php?id=100088366265236"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit our Facebook page"
          className="hover:underline focus:outline-none focus:ring-2 focus:ring-white"
        >
          Facebook
        </a>
        <a
          href="https://www.instagram.com/bluebellandrobingardens/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit our Instagram page"
          className="hover:underline focus:outline-none focus:ring-2 focus:ring-white"
        >
          Instagram
        </a>
      </div>
    </footer>
  );
}
