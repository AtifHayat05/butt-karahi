const locations = [
  {
    name: "F-8 Markaz",
    address: "F-8 Markaz, Islamabad",
    phone: "+92 308 0666605",
  },
  {
    name: "F-10 Markaz",
    address: "F-10 Markaz, Islamabad",
    phone: "+92 306 0666605",
  },
];

function Locations() {
  return (
    <section id="locations" className="bg-stone-900 py-24 text-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-amber-500">
            Find Us
          </p>

          <h2 className="mt-4 text-4xl font-black sm:text-5xl">
            Visit Our Locations
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {locations.map((location) => (
            <div
              key={location.name}
              className="rounded-2xl border border-white/10 bg-stone-950 p-8"
            >
              <div className="flex items-start justify-between gap-5">
                <div>
                  <h3 className="text-2xl font-black">{location.name}</h3>

                  <p className="mt-3 text-gray-400">{location.address}</p>

                  <p className="mt-2 text-gray-400">{location.phone}</p>
                </div>

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-red-700 text-xl">
                  📍
                </div>
              </div>

              <div className="mt-7 flex gap-3">
                <a
                  href="#contact"
                  className="rounded-full bg-red-700 px-5 py-2.5 text-sm font-bold transition hover:bg-red-800"
                >
                  Get Directions
                </a>

                <a
                  href="#contact"
                  className="rounded-full border border-white/20 px-5 py-2.5 text-sm font-bold transition hover:bg-white hover:text-black"
                >
                  Call Us
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Locations;
