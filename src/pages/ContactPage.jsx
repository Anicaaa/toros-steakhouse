export default function ContactPage() {
  return (
    <section
      className="w-full bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `url('/white-wood.jpg')`,
      }}
    >
      <div className="bg-black/50 w-full h-full py-16">
      <div className="max-w-6xl mx-auto px-6 
          flex flex-col md:flex-row 
          items-center justify-center gap-10">
    <div className="w-full min-h-screen flex justify-center items-start py-20">
      <div className="max-w-7xl w-full px-6 flex flex-col md:flex-row gap-10 mt-30">

        {/* Contact Form */}
        <div className="shadow-xl rounded-2xl p-6 bg-white md:w-1/2 flex flex-col justify-between">
          <h1 className="text-3xl font-bold mb-4 text-center">Contact Us</h1>

          <form className="flex flex-col gap-6">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="border border-gray-300 rounded-md px-3 py-2 text-sm"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              className="border border-gray-300 rounded-md px-3 py-2 text-sm"
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone"
              className="border border-gray-300 rounded-md px-3 py-2 text-sm"
            />

            <textarea
              name="message"
              placeholder="Message"
              className="border border-gray-300 rounded-md px-3 py-2 text-sm min-h-[60px]"
              required
            ></textarea>

            <button
              type="submit"
              className="bg-red-700 text-white py-2 rounded-md font-semibold hover:bg-red-800"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Map */}
        <div className="w-full md:w-1/2 h-[500px] rounded-2xl overflow-hidden shadow-xl">
          <iframe
            title="Toro's Steakhouse Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2436.123456!2d-0.123456!3d51.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b123456789%3A0xabcdef123456!2sToro's%20Steakhouse!5e0!3m2!1sen!2suk!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

      </div>
    </div>
    </div>
    </div>
    </section>
  );
}