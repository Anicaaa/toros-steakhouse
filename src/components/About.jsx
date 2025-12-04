function About() {
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

          <div className="flex justify-center md:justify-start">
            <img
              src="/family-business-photo.jpg"
              alt="Our Story"
              className="rounded-full shadow-xl w-64 h-64 md:w-80 md:h-80 object-cover"
            />
          </div>

          <div className="w-full md:w-1/2 text-white flex flex-col justify-center text-center md:text-left">
            <h2 className="text-4xl font-bold mb-4">Our Story</h2>

            <p className="text-lg leading-relaxed">
              Founded in <span className="font-semibold">1998</span>, Toro’s Steakhouse has always been a{" "}
              <span className="font-semibold">family-owned</span> restaurant.
              Built with love by Katia and Jack, the
              restaurant quickly became a warm place for locals and travellers.
              <br />
              <br />
              Today, our grown-up children continue the tradition by helping
              out during the summer, supporting both in the kitchen and front
              of house. Come say hello when you get the chance to visit us!
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;

