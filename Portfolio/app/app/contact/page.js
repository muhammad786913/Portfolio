"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("Sending...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(form),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("Message sent successfully! ✅");

        setForm({
          name: "",
          email: "",
          message: "",
        });
      } else {
        setStatus(result.error || "Message could not be sent.");
      }
    } catch (error) {
      setStatus("Something went wrong. Try again.");
    }
  };

  return (
    <main className="min-h-screen px-6 py-20">

      <div className="max-w-6xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-14">

          <p className="text-purple-400 font-semibold tracking-widest">
            CONTACT ME
          </p>

          <h1 className="text-5xl font-bold text-white mt-3">
            Let's Work Together
          </h1>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Have a project, idea or question?
            Send me a message and I will get back to you.
          </p>

        </div>


        <div className="grid md:grid-cols-2 gap-10">


          {/* LEFT SIDE */}

          <div className="space-y-6">

            <div className="p-7 rounded-2xl bg-white/5 border border-white/10">

              <h2 className="text-2xl font-bold text-white mb-4">
                Get In Touch
              </h2>

              <p className="text-gray-400 leading-7">
                I'm available for web development projects,
                frontend development and collaboration.
              </p>

            </div>


            {/* EMAIL */}

            <div className="p-7 rounded-2xl bg-white/5 border border-white/10">

              <p className="text-gray-400 text-sm">
                EMAIL
              </p>

              <a
                href="mailto:muhammadrashid786114786@gmail.com"
                className="text-white mt-2 block hover:text-purple-400 transition break-all"
              >
                muhammadrashid786114786@gmail.com
              </a>

            </div>


            {/* INSTAGRAM */}

            <div className="p-7 rounded-2xl bg-white/5 border border-white/10">

              <p className="text-gray-400 text-sm">
                INSTAGRAM
              </p>

              <a
                href="https://www.instagram.com/_x_muhammad_1/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white mt-2 block hover:text-pink-400 transition"
              >
                @_x_muhammad_1
              </a>

            </div>


            {/* GITHUB */}

            <div className="p-7 rounded-2xl bg-white/5 border border-white/10">

              <p className="text-gray-400 text-sm">
                GITHUB
              </p>

              <a
                href="https://github.com/muhammad786913"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white mt-2 block hover:text-purple-400 transition"
              >
                github.com/muhammad786913
              </a>

            </div>


            {/* AVAILABILITY */}

            <div className="p-7 rounded-2xl bg-white/5 border border-white/10">

              <p className="text-gray-400 text-sm">
                AVAILABILITY
              </p>

              <p className="text-green-400 mt-2">
                ● Available for projects
              </p>

            </div>

          </div>


          {/* RIGHT SIDE - FORM */}

          <form
            onSubmit={handleSubmit}
            className="p-8 rounded-2xl bg-white/5 border border-white/10 space-y-6"
          >

            {/* NAME */}

            <div>

              <label className="text-white block mb-2">
                Your Name
              </label>

              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
                className="w-full p-4 rounded-xl bg-black/30 border border-white/10 text-white outline-none focus:border-purple-500"
              />

            </div>


            {/* EMAIL */}

            <div>

              <label className="text-white block mb-2">
                Your Email
              </label>

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                className="w-full p-4 rounded-xl bg-black/30 border border-white/10 text-white outline-none focus:border-purple-500"
              />

            </div>


            {/* MESSAGE */}

            <div>

              <label className="text-white block mb-2">
                Message
              </label>

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Write your message..."
                rows="7"
                required
                className="w-full p-4 rounded-xl bg-black/30 border border-white/10 text-white outline-none focus:border-purple-500 resize-none"
              />

            </div>


            {/* BUTTON */}

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold hover:opacity-90 transition"
            >
              Send Message 🚀
            </button>


            {/* STATUS */}

            {status && (
              <p className="text-center text-purple-300">
                {status}
              </p>
            )}

          </form>

        </div>

      </div>

    </main>
  );
}