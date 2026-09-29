const galleryImages = [
  {
    image: "/Images/BBQ-Platter.jpg",
    title: "BBQ Platter",
  },
  {
    image: "/Images/ButtKarahiChickenTikka.jpg",
    title: "BK Chicken Tikka",
  },
  {
    image: "/Images/ButtKarahiSpecial.jpg",
    title: "BK Special",
  },
  {
    image: "/Images/Chicken-Karahi.jpg",
    title: "Chicken Karahi",
  },
  {
    image: "/Images/Chicken-Achari-Handi.jpg",
    title: "Chicken Achari Handi",
  },
  {
    image: "/Images/ButtKarahiMutton.jpg",
    title: "Butt Karahi Mutton",
  },
  {
    image: "/Images/ButtKarahiTikka.jpg",
    title: "Special Tikka",
  },
];

function Gallery() {
  return (
    <section id="gallery" className="bg-stone-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-amber-500">
              Gallery
            </p>

            <h2 className="mt-3 text-4xl font-black sm:text-5xl">
              A Taste You Can See.
            </h2>
          </div>

          <p className="max-w-md text-gray-400">
            Take a look at our food, atmosphere and the moments that make Butt
            Karahi special.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3">
          {galleryImages.map((item, index) => (
            <div
              key={item.image}
              className={`group relative overflow-hidden rounded-2xl ${
                index === 0 || index === 3
                  ? "md:row-span-2 md:h-[520px]"
                  : "h-64"
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />

              <div className="absolute bottom-5 left-5 translate-y-4 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="font-bold">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
