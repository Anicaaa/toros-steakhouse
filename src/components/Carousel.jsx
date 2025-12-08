export default function Carousel() {
  const images = ["/image1.avif", "/image2.avif", "/image3.avif"];

  return (
    <div className="w-full py-8 px-4 mt-20 mb-20">
      <div className="flex justify-center gap-6 flex-wrap md:flex-nowrap">
        {images.map((img, i) => (
          <div
            key={i}
            className="w-full sm:w-80 md:w-96"
          >
            <img
              src={img}
              alt={`carousel-${i}`}
              className="object-cover rounded-2xl shadow-lg w-full h-72 mx-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
