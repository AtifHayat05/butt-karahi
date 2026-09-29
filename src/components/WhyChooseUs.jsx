const reasons = [
  {
    number: "01",
    title: "Authentic Recipes",
    description:
      "Traditional Pakistani recipes prepared with the flavors you know and love.",
  },
  {
    number: "02",
    title: "Fresh Ingredients",
    description:
      "We believe great food starts with quality, fresh and carefully selected ingredients.",
  },
  {
    number: "03",
    title: "Made to Order",
    description:
      "Our signature dishes are prepared fresh so they reach your table hot and flavorful.",
  },
  {
    number: "04",
    title: "Made for Sharing",
    description:
      "Generous portions and a welcoming atmosphere make every meal better together.",
  },
];

function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="bg-stone-900 py-24 text-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-amber-500">
            Why Butt Karahi
          </p>

          <h2 className="mt-4 text-4xl font-black sm:text-5xl">
            More Than Just a Meal.
          </h2>

          <p className="mt-5 leading-7 text-gray-400">
            From our kitchen to your table, we focus on the things that make
            Pakistani food unforgettable.
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => (
            <div
              key={reason.number}
              className="bg-stone-950 p-7 transition hover:bg-stone-900"
            >
              <span className="text-4xl font-black text-red-700">
                {reason.number}
              </span>

              <h3 className="mt-7 text-xl font-black">{reason.title}</h3>

              <p className="mt-3 text-sm leading-6 text-gray-400">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
