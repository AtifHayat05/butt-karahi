const menuItems = [
  {
    name: "Chicken Karahi",
    description:
      "Tender chicken cooked in a rich tomato base with green chilies, ginger, and traditional Pakistani spices.",
    price: "Rs. 2,700",
    image: "/Images/ChickenKarahi.jpg",
  },

  {
    name: "Mutton Karahi",
    description:
      "Tender mutton slow-cooked with fresh tomatoes, green chilies, ginger, and aromatic spices for a rich traditional flavor.",
    price: "Rs. 4,999",
    image: "/Images/MuttonKarahi.jpg",
  },

  {
    name: "Butt Special Handi",
    description:
      "A creamy and flavorful chicken handi prepared with a rich blend of spices, tomatoes, and our signature sauce.",
    price: "Rs. 1,999",
    image: "/Images/ChickenHandi.jpg",
  },

  {
    name: "Murgh Achari",
    description:
      "Tender chicken cooked with aromatic achari spices, herbs, and a flavorful blend of traditional Pakistani ingredients.",
    price: "Rs. 1,899",
    image: "/Images/ChickenAchari.jpg",
  },

  {
    name: "Chicken Special Boti (10pc)",
    description:
      "Ten pieces of juicy chicken marinated in traditional spices and grilled to perfection for a smoky, flavorful bite.",
    price: "Rs. 1,849",
    image: "/Images/ChickenTikkaBoti.jpg",
  },

  {
    name: "Chicken Kabab (4pc)",
    description:
      "Four tender and juicy chicken kababs seasoned with traditional spices and grilled to perfection.",
    price: "Rs. 1,699",
    image: "/Images/ChickenKabab.jpg",
  },
];

function Menu() {
  return (
    <section id="menu" className="bg-stone-900 py-24 text-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-amber-500">
            Our Menu
          </p>

          <h2 className="mt-4 text-4xl font-black sm:text-5xl">
            Made Fresh. Served Hot.
          </h2>

          <p className="mt-5 leading-7 text-gray-400">
            Explore our selection of Pakistani favorites, prepared with
            authentic spices and fresh ingredients.
          </p>
        </div>

        <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {menuItems.map((item) => (
            <div
              key={item.name}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-stone-950"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute right-4 top-4 rounded-full bg-red-700 px-4 py-2 text-sm font-bold">
                  {item.price}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-black">{item.name}</h3>

                <p className="mt-3 text-sm leading-6 text-gray-400">
                  {item.description}
                </p>

                <button className="mt-5 font-bold text-amber-500 transition hover:text-amber-400">
                  Order This →
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-block rounded-full border border-red-600 px-7 py-3 font-bold text-red-500 transition hover:bg-red-700 hover:text-white"
          >
            View Full Menu
          </a>
        </div>
      </div>
    </section>
  );
}

export default Menu;
