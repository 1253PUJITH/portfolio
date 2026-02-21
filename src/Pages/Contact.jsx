import React from "react";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaPaperPlane,
} from "react-icons/fa";

const Contact = () => {
  return (
    // 1. Base Container: Adapts to Light and Dark modes
    <div className="relative min-h-screen flex items-center justify-center text-center overflow-hidden bg-gray-50 dark:bg-black transition-colors duration-500">
      <div
        className="absolute -top-20 left-[-10%] w-[40vw] h-[40vw] rounded-full bg-sky-400/50 dark:bg-sky-600/40 blur-[120px] animate-pulse pointer-events-none"
        style={{ animationDuration: "8s" }}
      ></div>
      <div
        className="absolute -bottom-50 right-[-10%] w-[40vw] h-[40vw] rounded-full bg-orange-400/50 dark:bg-orange-700/40 blur-[160px] animate-pulse pointer-events-none"
        style={{ animationDuration: "10s", animationDelay: "2s" }}
      ></div>
      <div
        className="absolute -top-[10%] left-[40%] w-[40vw] h-[40vw] rounded-full bg-lime-300/60 dark:bg-lime-600/30 blur-[100px] animate-pulse pointer-events-none"
        style={{ animationDuration: "12s", animationDelay: "4s" }}
      ></div>
      <div
        className="absolute top-[50%] left-[25%] w-[30vw] h-[30vw] rounded-full bg-indigo-300/60 dark:bg-indigo-600/30 blur-[100px] animate-pulse pointer-events-none"
        style={{ animationDuration: "12s", animationDelay: "4s" }}
      ></div>

      {/* ================= GLASSMORPHISM CARD ================= */}

      <div className="relative z-10 space-y-4 pt-20 rounded-3xl mx-5">
        <div className="relative z-10 w-300 bg-white/40 dark:bg-black/40 backdrop-blur-md border border-white/50 dark:border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_32px_rgba(255,255,255,0.05)] rounded-3xl flex flex-col md:flex-row transition-colors duration-500 overflow-hidden scrollbar-hide">
          <div className="w-full md:w-1/2 p-10 bg-gray-900/90 dark:bg-black/60 text-white flex flex-col justify-between relative transition-colors duration-500 border-r border-white/10">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/10 rounded-full -mr-10 -mt-10 blur-xl"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-500/10 rounded-full -ml-10 -mb-10 blur-xl"></div>

            <div className="relative z-10">
              <h2 className="text-3xl font-black uppercase tracking-wide mb-6 text-white">
                Let's Connect
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed mb-10">
                I'm currently looking for new opportunities in Web Development
                and AI. Whether you have a question or just want to say hi, I'll
                try my best to get back to you!
              </p>

              <div className="space-y-6">
                {/* Email - Unified Blue Accent */}
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-white/10 border border-white/20 rounded-full flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                    <FaEnvelope className="text-xl" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-bold uppercase">
                      Email Me
                    </p>
                    <a
                      href="mailto:gothampujith@gmail.com"
                      className="text-lg font-bold hover:text-blue-400 transition-colors"
                    >
                      gothampujith@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone - Unified Blue Accent */}
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-white/10 border border-white/20 rounded-full flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                    <FaPhoneAlt className="text-xl" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-bold uppercase">
                      Call Me
                    </p>
                    <a
                      href="tel:+919494978639"
                      className="text-lg font-bold hover:text-blue-400 transition-colors"
                    >
                      +91 94949 78639
                    </a>
                  </div>
                </div>

                {/* Location - Unified Blue Accent */}
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-white/10 border border-white/20 rounded-full flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                    <FaMapMarkerAlt className="text-xl" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-bold uppercase">
                      Location
                    </p>
                    <p className="text-lg font-bold">
                      Palakollu, Andhra Pradesh
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="mt-12 relative z-10">
              <p className="text-sm text-gray-400 mb-4 font-bold uppercase tracking-wider">
                Follow my journey:
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 border border-white/20 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all duration-300 shadow-sm"
                >
                  <FaGithub className="text-xl" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 border border-white/20 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all duration-300 shadow-sm"
                >
                  <FaLinkedin className="text-xl" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 border border-white/20 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all duration-300 shadow-sm"
                >
                  <FaInstagram className="text-xl" />
                </a>
              </div>
            </div>
          </div>

          {/* ---------------- RIGHT SIDE: CONTACT FORM ---------------- */}
          <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
            <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-6 transition-colors duration-500">
              Send a Message
            </h2>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-800 dark:text-gray-300 transition-colors duration-500">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="John"
                    className="w-full px-4 py-3 rounded-xl bg-white/60 dark:bg-black/50 border border-white/50 dark:border-white/10 focus:border-blue-500 dark:focus:border-blue-500 focus:bg-white dark:focus:bg-black focus:outline-none transition-all duration-300 text-gray-900 dark:text-white shadow-inner"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-800 dark:text-gray-300 transition-colors duration-500">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Doe"
                    className="w-full px-4 py-3 rounded-xl bg-white/60 dark:bg-black/50 border border-white/50 dark:border-white/10 focus:border-blue-500 dark:focus:border-blue-500 focus:bg-white dark:focus:bg-black focus:outline-none transition-all duration-300 text-gray-900 dark:text-white shadow-inner"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-800 dark:text-gray-300 transition-colors duration-500">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-white/60 dark:bg-black/50 border border-white/50 dark:border-white/10 focus:border-blue-500 dark:focus:border-blue-500 focus:bg-white dark:focus:bg-black focus:outline-none transition-all duration-300 text-gray-900 dark:text-white shadow-inner"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-800 dark:text-gray-300 transition-colors duration-500">
                  Subject
                </label>
                <select className="w-full px-4 py-3 rounded-xl bg-white/60 dark:bg-black/50 border border-white/50 dark:border-white/10 focus:border-blue-500 dark:focus:border-blue-500 focus:bg-white dark:focus:bg-black focus:outline-none transition-all duration-300 text-gray-700 dark:text-gray-300 shadow-inner">
                  <option>General Inquiry</option>
                  <option>Hiring / Freelance</option>
                  <option>Collaboration</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-800 dark:text-gray-300 transition-colors duration-500">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Write your message here..."
                  className="w-full px-4 py-3 rounded-xl bg-white/60 dark:bg-black/50 border border-white/50 dark:border-white/10 focus:border-blue-500 dark:focus:border-blue-500 focus:bg-white dark:focus:bg-black focus:outline-none transition-all duration-300 resize-none text-gray-900 dark:text-white shadow-inner"
                ></textarea>
              </div>

              <button className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl shadow-[0_4px_15px_rgba(59,130,246,0.3)] dark:shadow-[0_4px_15px_rgba(59,130,246,0.5)] hover:bg-blue-700 hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2">
                <FaPaperPlane /> Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
