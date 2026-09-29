import { useState } from "react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Menu", href: "#menu" },
  { name: "Gallery", href: "#gallery" },
  { name: "Why Choose Us", href: "#why-choose-us" },
  { name: "Locations", href: "#locations" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/85 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full">
            <img
              src="/Images/Logo.jpg"
              alt="Butt Karahi By Usman Tahir"
              className="h-full w-full object-contain"
            />
          </div>

          <div>
            <h1 className="text-lg font-black tracking-wide text-white">
              BUTT KARAHI
            </h1>

            <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-amber-500">
              By Usman Tahir
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-200 transition hover:text-amber-500"
            >
              {link.name}
            </a>
          ))}

          <a
            href="#contact"
            className="rounded-full bg-red-700 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-red-800"
          >
            Order Now
          </a>
        </nav>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl text-white lg:hidden"
          aria-label="Toggle navigation"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="border-t border-white/10 bg-black px-5 py-5 lg:hidden">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-base font-medium text-gray-200 transition hover:text-amber-500"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 rounded-full bg-red-700 px-5 py-3 text-center font-bold text-white"
            >
              Order Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;
