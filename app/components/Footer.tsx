export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white text-center py-6">
      <p>&copy; {new Date().getFullYear()} Bluebell Robin Gardens</p>
      <div className="flex justify-center mt-2 space-x-4">
        <a
          href="https://www.facebook.com/profile.php?id=100088366265236"
          target="_blank"
          className="hover:underline"
        >
          Facebook
        </a>
        <a
          href="https://www.instagram.com/bluebellandrobingardens/?hl=en"
          target="_blank"
          className="hover:underline"
        >
          Instagram
        </a>
      </div>
    </footer>
  );
}
