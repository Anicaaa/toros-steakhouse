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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:4000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setPopup({
          show: true,
          type: "error",
          message: data.error || "Something went wrong.",
        });
        return;
      }

      setPopup({
        show: true,
        type: "success",
        message: "Your message has been sent successfully!",
      });

      setFormData({ name: "", email: "", phone: "", message: "" });

    } catch (err) {
      setPopup({
        show: true,
        type: "error",
        message: "Server error: " + err.message,
      });
    }
  };

  return (
    <>
      {/* Page Background */}
      <section
        className="w-full bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url('/white-wood.jpg')` }}
      >
        <div className="bg-black/50 w-full h-full py-16">

          {/* FORM + MAP WRAPPER */}
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-10">

            {/* Content blurred when popup shows */}
            <div className={`w-full flex justify-center mt-24 transition-all duration-300
              ${popup.show ? "blur-sm brightness-75 pointer-events-none" : ""}
            `}>
              <div className="shadow-xl rounded-2xl p-6 bg-white md:w-1/2">

                <h1 className="text-3xl font-bold mb-4 text-center">Contact Us</h1>

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
                    className="bg-red-700 text-white py-2 rounded-md font-semibold hover:bg-red-800"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* MAP */}
              <div className="w-full md:w-1/2 h-[500px] rounded-2xl overflow-hidden shadow-xl ml-6">
                <iframe
                  title="Toro's Steakhouse Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2436.123456!2d-0.123456!3d51.123456"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* POPUP */}
      {popup.show && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50">
          <div className="bg-white shadow-2xl rounded-2xl max-w-md w-full p-6 relative">

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