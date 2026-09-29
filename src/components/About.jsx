function About() {
  return (
    <section id="about" className="bg-stone-950 py-24 text-white">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-2 lg:items-center lg:px-8">
        <div className="relative">
          <img
            src="/Images/About.jpg"
            alt="Butt Karahi restaurant"
            className="h-[520px] w-full rounded-2xl object-cover"
          />

          <div className="absolute -bottom-7 -right-5 hidden rounded-2xl bg-red-700 p-7 shadow-2xl sm:block">
            <p className="text-3xl font-black">Authentic</p>
            <p className="text-sm text-red-100">Pakistani Flavors</p>
          </div>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-amber-500">
            Our Story
          </p>

          <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
            A Love for Karahi,
            <span className="block text-red-600">Served Hot.</span>
          </h2>

          <p className="mt-7 leading-8 text-gray-400">
            Butt Karahi By Usman Tahir brings the traditional taste of Pakistani
            cuisine to the table. Our food is prepared with quality ingredients,
            bold spices and recipes inspired by the timeless flavors of
            Pakistan.
          </p>

          <p className="mt-5 leading-8 text-gray-400">
            From sizzling karahi straight from the wok to freshly baked naan,
            every dish is made to be shared, enjoyed and remembered.
          </p>

          <div className="mt-9 grid grid-cols-2 gap-5">
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <p className="text-2xl font-black text-amber-500">01</p>
              <p className="mt-2 font-bold">Traditional Taste</p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <p className="text-2xl font-black text-amber-500">02</p>
              <p className="mt-2 font-bold">Fresh Ingredients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
