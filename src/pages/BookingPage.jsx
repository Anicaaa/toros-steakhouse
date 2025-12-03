// src/pages/BookingPage.jsx
import BookingForm from "../components/BookingForm";

export default function BookingPage() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold mb-6">Book a Table</h1>
      <BookingForm />
    </div>
  );
}