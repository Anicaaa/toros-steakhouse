import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  return (
    <header
      className="w-full h-screen bg-cover bg-center flex items-center justify-end"
      style={{ backgroundImage: `url('/steakhousetwo.jpg')` }}
    >
      <div className="max-w-xl bg-black/60 p-8 mx-auto text-center rounded-md text-white">
        <h2 className="text-4xl font-bold mb-4">Welcome to Toro's Steakhouse</h2>
        <p className="text-lg leading-relaxed mb-6">
          Open & smokin' 7 days a week.<br />
          Discover the bold flavours & warm hospitality in our<br />
          family-friendly restaurant.
        </p>

        <div className="flex justify-center gap-4">
          <button
            onClick={() => navigate("/booking")}
            className="bg-red-700 hover:bg-red-800 text-white px-6 py-3 rounded-sm font-semibold tracking-wide"
          >
            Book Now
          </button>

          <button
            onClick={() => navigate("/menu")}
            className="bg-white hover:bg-neutral-300 text-black px-6 py-3 rounded-sm font-semibold tracking-wide border border-black"
          >
            View Menu
          </button>
        </div>
      </div>
    </header>
  );
}
export default Hero;