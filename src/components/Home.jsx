function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-black"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/Images/Hero.jpg')",
        }}
      />

      <div className="absolute inset-0 bg-black/65" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />

      <div className="relative mx-auto w-full max-w-7xl px-5 py-32 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.35em] text-amber-500">
            Authentic Pakistani Cuisine
          </p>

          <h1 className="text-5xl font-black leading-tight text-white sm:text-6xl lg:text-8xl">
            The Taste of
            <span className="block text-red-600">Real Karahi.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-200">
            Rich flavors, traditional recipes and freshly prepared karahi served
            with the warmth of true Pakistani hospitality.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#menu"
              className="rounded-full bg-red-700 px-7 py-3.5 font-bold text-white transition hover:bg-red-800"
            >
              Explore Menu
            </a>

            <a
              href="#contact"
              className="rounded-full border border-white/40 bg-white/10 px-7 py-3.5 font-bold text-white backdrop-blur-sm transition hover:bg-white hover:text-black"
            >
              Order Now
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-8 border-t border-white/20 pt-7">
            <div>
              <p className="text-2xl font-black text-white">Fresh</p>
              <p className="text-sm text-gray-400">Daily Ingredients</p>
            </div>

            <div>
              <p className="text-2xl font-black text-white">Authentic</p>
              <p className="text-sm text-gray-400">Pakistani Recipes</p>
            </div>

            <div>
              <p className="text-2xl font-black text-white">Family</p>
              <p className="text-sm text-gray-400">Friendly Dining</p>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-xs uppercase tracking-[0.3em] text-white/70 md:block"
      >
        Scroll Down ↓
      </a>
    </section>
  );
}

export default Hero;
