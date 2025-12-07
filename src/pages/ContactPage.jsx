import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [popup, setPopup] = useState({
    show: false,
    type: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  const { name, email, phone, message } = formData;

  if (!name || !email || !message) {
    setPopup({
      show: true,
      type: "error",
      message: "Please fill in all required fields!",
    });
    return;
  }

  setPopup({
    show: true,
    type: "success",
    message: "Your message has been sent successfully!",
  });

  setFormData({ name: "", email: "", phone: "", message: "" });
};

  return (
    <>
      <section
        className="w-full bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url('/white-wood.jpg')` }}
      >
        <div className="bg-black/50 w-full h-full py-16">

          <div className="max-w-6xl mx-auto mt-20 px-6 flex flex-col md:flex-row items-start justify-center gap-10">

            <div className={`w-full md:w-1/2 h-[500px] transition-all duration-300
              ${popup.show ? "blur-sm brightness-75 pointer-events-none" : ""}
            `}>
              <div className="shadow-xl rounded-2xl p-6 bg-white h-full">
                <h1 className="text-3xl font-bold mb-10 text-center">Contact Us</h1>

                <form className="flex flex-col gap-6" onSubmit={handleSubmit}>

                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    className="border border-gray-300 rounded-md px-3 py-2 text-sm"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="border border-gray-300 rounded-md px-3 py-2 text-sm"
                    value={formData.email}
                    onChange={handleChange}
                  />

                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    className="border border-gray-300 rounded-md px-3 py-2 text-sm"
                    value={formData.phone}
                    onChange={handleChange}
                  />

                  <textarea
                    name="message"
                    placeholder="Message"
                    className="border border-gray-300 rounded-md px-3 py-2 text-sm min-h-[60px]"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>

                  <button
                    type="submit"
                    className="bg-red-700 text-white py-2 mt-10 rounded-md font-semibold hover:bg-red-800"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            <div className="w-full md:w-1/2 h-[500px] rounded-2xl overflow-hidden shadow-xl md:ml-6 mt-6 md:mt-0">
              <iframe
                title="Toro's Steakhouse Location"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d84935.7823418632!2d-0.073756605718167!3d51.55371582339508!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon!5e0!3m2!1sen!2suk!4v1764851406878!5m2!1sen!2suk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>
            </div>

          </div>
        </div>
      </section>

      {/* POPUP */}
      {popup.show && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50">
          <div className="bg-white shadow-2xl rounded-2xl max-w-md mx-4 w-full p-6 relative">

            <button
              onClick={() => setPopup({ ...popup, show: false })}
              className="absolute top-3 right-3 text-2xl font-bold text-gray-600 hover:text-black"
            >
              ×
            </button>

            <h2
              className={`text-2xl font-bold text-center mb-4 
              ${popup.type === "success" ? "text-green-700" : ""}
              ${popup.type === "error" ? "text-red-700" : ""}`}
            >
              {popup.type === "success" && "Message Sent!"}
              {popup.type === "error" && "Error"}
            </h2>

            <p className="text-center text-gray-700 mb-4">{popup.message}</p>

            <div className="flex justify-center">
              <button
                onClick={() => setPopup({ ...popup, show: false })}
                className="bg-red-700 text-white px-6 py-2 rounded-md hover:bg-red-800"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}