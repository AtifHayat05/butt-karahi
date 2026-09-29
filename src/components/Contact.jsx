function Contact() {
  return (
    <section id="contact" className="bg-red-700 py-24 text-white">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-amber-300">
            Contact Us
          </p>

          <h2 className="mt-4 text-5xl font-black leading-tight sm:text-6xl">
            Hungry Yet?
          </h2>

          <p className="mt-6 max-w-lg text-lg leading-8 text-red-100">
            Come experience authentic Pakistani flavors or get in touch with us
            to place your order.
          </p>

          <div className="mt-10 space-y-5">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-red-200">
                Phone
              </p>
              <p className="mt-1 text-lg font-bold">+92 306 0666605</p>
            </div>

            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-red-200">
                Opening Hours
              </p>
              <p className="mt-1 text-lg font-bold">
                Daily · 12:00 PM – 12:00 AM
              </p>
            </div>

            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-red-200">
                Location
              </p>
              <p className="mt-1 text-lg font-bold">Islamabad, Pakistan</p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-7 text-stone-900 shadow-2xl sm:p-9">
          <h3 className="text-2xl font-black">Send Us a Message</h3>

          <form className="mt-7 space-y-5">
            <div>
              <label className="mb-2 block text-sm font-bold">Your Name</label>

              <input
                type="text"
                placeholder="Enter your name"
                className="w-full rounded-xl border border-stone-200 px-4 py-3 outline-none transition focus:border-red-600"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold">
                Phone Number
              </label>

              <input
                type="tel"
                placeholder="03XX XXXXXXX"
                className="w-full rounded-xl border border-stone-200 px-4 py-3 outline-none transition focus:border-red-600"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold">Message</label>

              <textarea
                rows="4"
                placeholder="How can we help?"
                className="w-full resize-none rounded-xl border border-stone-200 px-4 py-3 outline-none transition focus:border-red-600"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-red-700 px-5 py-3.5 font-bold text-white transition hover:bg-red-800"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
