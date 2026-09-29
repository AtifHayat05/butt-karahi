function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-black">BUTT KARAHI</h2>

            <p className="mt-1 text-xs font-bold uppercase tracking-[0.25em] text-amber-500">
              By Usman Tahir
            </p>

            <p className="mt-5 max-w-md leading-7 text-gray-500">
              Authentic Pakistani cuisine, traditional flavors and memorable
              dining experiences.
            </p>
          </div>

          <div>
            <h3 className="font-bold">Quick Links</h3>

            <div className="mt-5 flex flex-col gap-3">
              <a href="#home" className="text-gray-500 hover:text-white">
                Home
              </a>
              <a href="#about" className="text-gray-500 hover:text-white">
                About Us
              </a>
              <a href="#menu" className="text-gray-500 hover:text-white">
                Menu
              </a>
              <a href="#gallery" className="text-gray-500 hover:text-white">
                Gallery
              </a>
              <a href="#contact" className="text-gray-500 hover:text-white">
                Contact
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold">Follow Us</h3>

            <div className="mt-5 flex gap-3">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-sm transition hover:bg-red-700"
              >
                IG
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-sm transition hover:bg-red-700"
              >
                FB
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-sm transition hover:bg-red-700"
              >
                WA
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-7 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} Butt Karahi By Usman Tahir. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
