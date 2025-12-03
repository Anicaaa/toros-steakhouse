function Footer() {
  return (
    <footer className="bg-black text-white py-10 mt-20">
      <div className="max-w-6xl mx-auto px-6 
        flex flex-col md:flex-row 
        items-center md:items-start 
        justify-center 
        gap-12
        text-center md:text-left">

        <div>
          <h3 className="text-xl font-semibold mb-3">Address</h3>
          <p className="text-gray-300">123 Toro’s Street</p>
          <p className="text-gray-300">London, UK</p>
          <p className="text-gray-300">SW1A 1AA</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Opening Times</h3>
          <p className="text-gray-300">Monday – Sunday</p>
          <p className="text-gray-300">17:00 – 23:30</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Contact</h3>
          <p className="text-gray-300">Phone: +44 1234 567890</p>

          <div className="flex gap-4 mt-4">
            <a
              href="#"
              className="text-white hover:text-red-600 transition text-2xl"
            >
              <i className="fab fa-facebook"></i>
            </a>

            <a
              href="#"
              className="text-white hover:text-red-600 transition text-2xl"
            >
              <i className="fab fa-instagram"></i>
            </a>

            <a
              href="#"
              className="text-white hover:text-red-600 transition text-2xl"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-400 mt-10 text-sm">
        © {new Date().getFullYear()} Toro’s Steakhouse - All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;