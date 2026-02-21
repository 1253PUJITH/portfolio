import {
  FaDownload,
  FaBriefcase,
  FaGraduationCap,
  FaProjectDiagram,
  FaRocket,
  FaCertificate,
} from "react-icons/fa";

const Resume = () => {
  return (
    // Main Container: Adapts to Light and Dark modes
    <div className="h-screen relative pt-32 dark:bg-black overflow-hidden">
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

      {/* Content Wrapper */}
      <div className="flex px-20 gap-14 h-full pb-24">
        <div className="w-120 p-8 rounded-2xl flex flex-col items-center gap-5 overflow-auto scrollbar-hide bg-white/40 dark:bg-black/40 backdrop-blur-md border border-white/50 dark:border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_32px_rgba(255,255,255,0.1)]">
          <div className="text-center">
            <h1 className="text-2xl font-black text-gray-900 dark:text-white uppercase leading-tight transition-colors duration-500">
              Pujith Sri Surya Gotham
            </h1>
            <p className="text-sm font-bold text-blue-700 dark:text-blue-400 mt-2 transition-colors duration-500">
              Computer Science Graduate (AI & DS)
            </p>
          </div>

          <div className="bg-white/50 dark:bg-white/10 backdrop-blur-sm p-4 rounded-xl text-sm text-gray-800 dark:text-gray-200 space-y-2 border border-white/30 dark:border-transparent transition-colors duration-500">
            <p className="flex items-center gap-2">
              📍 <span className="truncate">Palakollu, Andhra Pradesh</span>
            </p>
            <p className="flex items-center gap-2">
              📧 <span className="truncate">gothampujith@gmail.com</span>
            </p>
            <p className="flex items-center gap-2">📱 +91 94949 78639</p>
          </div>

          {/* Summary */}
          <div className="text-sm text-gray-800 dark:text-gray-300 leading-relaxed text-justify transition-colors duration-500">
            Actively seeking an entry-level video editor role where I can apply
            my creativity, storytelling, and editing skills to produce engaging
            visual content. Passionate about crafting cinematic edits, enhancing
            visuals, and continuously learning to grow in the creative media
            industry.
          </div>

          {/* Download Button (Blue Accent) */}
          <button className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition-all font-bold shadow-md dark:shadow-[0_0_15px_rgba(59,130,246,0.4)] flex items-center justify-center gap-2">
            <FaDownload /> Download Resume
          </button>
        </div>

        {/* ================= RIGHT COLUMN: DETAILED SECTIONS ================= */}
        <div className="w-full p-8 rounded-2xl flex flex-col items-center gap-5 overflow-auto scrollbar-hide bg-white/40 dark:bg-black/40 backdrop-blur-md border border-white/50 dark:border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_32px_rgba(255,255,255,0.1)]">
          <div
            className=" w-full py-4 px-8 rounded-lg flex flex-col gap-5 bg-white/40 dark:bg-black/40 backdrop-blur-md border 
                    border-white/50 dark:border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_32px_rgba(255,255,255,0.1)]"
          >
            <h2 className="text-2xl font-black text-gray-900 dark:text-white flex items-center gap-3 border-b border-gray-300 dark:border-gray-700 pb-3 transition-colors duration-500">
              <FaGraduationCap className="text-blue-600 dark:text-blue-400" />{" "}
              Education
            </h2>

            <p className="font-bold text-gray-900 dark:text-white">
              B.Tech – Artificial Intelligence & Data Science (2021–2025)
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              S.R.K.R Engineering College | CGPA: 7.2
            </p>
          </div>

          {/* 2. EXPERIENCE (INTERNSHIPS) SECTION */}
          <div
            className=" w-full py-4 px-8 rounded-lg flex flex-col gap-5 bg-white/40 dark:bg-black/40 backdrop-blur-md border 
                    border-white/50 dark:border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_32px_rgba(255,255,255,0.1)]"
          >
            <h2 className="text-2xl font-black text-gray-900 dark:text-white flex items-center gap-3 border-b border-gray-300 dark:border-gray-700 pb-3 transition-colors duration-500">
              <FaBriefcase className="text-blue-600 dark:text-blue-400" />{" "}
              Editing Experience
            </h2>

            <ul className="list-disc list-inside text-sm text-gray-800 dark:text-gray-300 space-y-2">
              <li>
                Created Instagram Reels & Shorts with trend-based transitions.
              </li>
              <li>Applied advanced color grading and audio synchronization.</li>
              <li>Worked with motion titles, transitions, and sound design.</li>
              <li>
                Delivered freelance projects with client-focused revisions.
              </li>
            </ul>
          </div>

          {/* PROJECTS */}
          <div
            className=" w-full py-4 px-8 rounded-lg flex flex-col gap-5 bg-white/40 dark:bg-black/40 backdrop-blur-md border 
                    border-white/50 dark:border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_32px_rgba(255,255,255,0.1)]"
          >
            <h2 className="text-2xl font-black text-gray-900 dark:text-white flex items-center gap-3 border-b border-gray-300 dark:border-gray-700 pb-3 transition-colors duration-500">
              <FaRocket className="text-blue-600 dark:text-blue-400" /> Editing
              Projects
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/60 dark:bg-white/10 p-4 rounded-xl hover:-translate-y-1 transition">
                <h3 className="font-bold text-gray-900 dark:text-white">
                  Advatisment Video Edit
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Edited a promotional video for a local jute bags business,
                  enhancing product visuals and storytelling to boost engagement
                  and sales.
                </p>
              </div>

              <div className="bg-white/60 dark:bg-white/10 p-4 rounded-xl hover:-translate-y-1 transition">
                <h3 className="font-bold text-gray-900 dark:text-white">
                  Instagram Reels
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Trend-based short form edits optimized for engagement.
                </p>
              </div>
            </div>
          </div>

          <div
            className=" w-full py-4 px-8 rounded-lg flex flex-col gap-5 bg-white/40 dark:bg-black/40 backdrop-blur-md border 
                    border-white/50 dark:border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_32px_rgba(255,255,255,0.1)]"
          >
            <h2 className="text-2xl font-black text-gray-900 dark:text-white flex items-center gap-3 border-l-4 border-blue-600 pl-4">
              <FaProjectDiagram /> Tools & Software
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm font-bold text-gray-800 dark:text-gray-200 ">
              <div className="bg-white/60 dark:bg-white/10 p-3 rounded-lg text-center hover:-translate-y-1 transition">
                DaVinci Resolve
              </div>
              <div className="bg-white/60 dark:bg-white/10 p-3 rounded-lg text-center hover:-translate-y-1 transition">
                Canva
              </div>
              <div className="bg-white/60 dark:bg-white/10 p-3 rounded-lg text-center hover:-translate-y-1 transition">
                Adobe Lightroom
              </div>
              <div className="bg-white/60 dark:bg-white/10 p-3 rounded-lg text-center hover:-translate-y-1 transition">
                Alight Motion
              </div>
              <div className="bg-white/60 dark:bg-white/10 p-3 rounded-lg text-center hover:-translate-y-1 transition">
                Pixellab
              </div>
              <div className="bg-white/60 dark:bg-white/10 p-3 rounded-lg text-center hover:-translate-y-1 transition">
                CapCut
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
