import { useState } from "react";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    guestNumber: "",
    date: "",
    startTime: "",
    notes: "",
  });

  const [popup, setPopup] = useState({
    show: false,
    type: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const API_URL = import.meta.env.VITE_API_URL || "https://toros-steakhouse-server.onrender.com";

    try {
      const res = await fetch(`${API_URL}/api/bookings`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.status === 409) {
      setPopup({
        show: true,
        type: "unavailable",
        message: "This time slot is already booked.",
      });
      setLoading(false);
      return;
      }

      if (!res.ok) {
      setPopup({
        show: true,
        type: "error",
        message: data.error || "Something went wrong.",
      });
        setLoading(false);
        return;
      }

      setPopup({
        show: true,
        type: "success",
        message: `Thank you for booking!`,
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        guestNumber: 1,
        date: "",
        startTime: "",
        notes: "",
      });

    } catch (err) {
      setPopup({
        show: true,
        type: "error",
        message: "Server error: " + err.message,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
     <section
      className="w-full bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `url('/white-wood.avif')`,
      }}
    >
      <div className="bg-black/50 w-full h-full py-16">
      <div className="max-w-6xl mx-auto px-6 
          flex flex-col md:flex-row 
          items-center justify-center gap-10">
    <>
      <div className={`w-full flex justify-center mt-24 transition-all duration-300 
        ${popup.show ? "blur-sm brightness-75 pointer-events-none" : ""}`}
      >
        <div className="shadow-xl rounded-2xl p-6 bg-white w-[500px]">
          <h1 className="text-3xl font-bold mb-4 text-center">Book a Table</h1>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">

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

            <input
              type="number"
              name="guestNumber"
              placeholder="Number of Guests"
              min="1"
              className="border border-gray-300 rounded-md px-3 py-2 text-sm"
              value={formData.guestNumber}
              onChange={handleChange}
              required
            />

            <input
              type="date"
              name="date"
              className="border border-gray-300 rounded-md px-3 py-2 text-sm"
              value={formData.date}
              onChange={handleChange}
              required
            />

            <input
              type="time"
              name="startTime"
              className="border border-gray-300 rounded-md px-3 py-2 text-sm"
              value={formData.startTime}
              onChange={handleChange}
              required
            />

            <textarea
              name="notes"
              placeholder="Notes (optional)"
              className="border border-gray-300 rounded-md px-3 py-2 text-sm min-h-[60px]"
              value={formData.notes}
              onChange={handleChange}
            ></textarea>

            <button disabled={loading}
              type="submit"
              className="bg-red-700 text-white py-2 rounded-md font-semibold hover:bg-red-800"
            >
              {loading ? "Booking..." : "Book Now"}
            </button>
          </form>
        </div>
      </div>

      {popup.show && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50">
          <div className="bg-white shadow-2xl rounded-2xl max-w-md mx-4 w-full p-6 relative">

            <button
              onClick={() => setPopup({ ...popup, show: false })}
              className="absolute top-3 right-3 text-2xl font-bold text-gray-600 hover:text-black"
            >
              ×
            </button>

            <h2 className={`text-2xl font-bold text-center mb-4 
              ${popup.type === "success" ? "text-green-700" : ""}
              ${popup.type === "error" ? "text-red-700" : ""}
              ${popup.type === "unavailable" ? "text-orange-600" : ""}`}
            >
              {popup.type === "success" && "Booking Confirmed!"}
              {popup.type === "error" && "Something Went Wrong"}
              {popup.type === "unavailable" && "Unavailable"}
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
    </div>
    </div>
    </section>
  );
}