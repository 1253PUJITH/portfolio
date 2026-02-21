import { Link } from "react-router-dom";

const Home = () => {
  return (
    // Added bg-gray-50 and dark:bg-black for smooth Light/Dark transitions
    <div className="relative min-h-screen flex items-center justify-center text-center overflow-hidden bg-gray-50 dark:bg-black transition-colors duration-500">
      <div
        className="absolute -top-20 left-[-10%] w-[40vw] h-[40vw] rounded-full bg-sky-400/50 dark:bg-sky-600/40 blur-[120px] animate-pulse pointer-events-none"
        style={{ animationDuration: "8s" }}
      ></div>
      <div
        className="absolute -bottom-50 right-[-10%] w-[40vw] h-[40vw] rounded-full bg-orange-400/50 dark:bg-orange-700/40 blur-[120px] animate-pulse pointer-events-none"
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

      {/* GLASS CARD: Adapts to Light and Dark Mode (Added z-10 to stay above orbs) */}
      <div className="relative z-10 space-y-4 p-10 rounded-3xl mx-5">
        <div>
          {/* 30% White Focus */}
          <h1 className="text-8xl -mb-5 font-['Bonheur_Royale'] font-extralight tracking-wider text-gray-900 dark:text-white drop-shadow-lg transition-colors duration-500">
            Pujith Gotham
          </h1>
        </div>

        {/* 10% Blue Accent Focus */}
        <h1 className="text-6xl tracking-tight font-black text-blue-700 dark:text-blue-500 drop-shadow-[0_0_15px_rgba(59,130,246,0.3)] dark:drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">
          Aspiring Video Editor & Storyteller
        </h1>

        <div>
          <h2 className="text-lg text-gray-900 dark:text-white font-bold dark:font-medium drop-shadow transition-colors duration-500">
            Creative Video Editor & Visual Designer crafting engaging edits and
            eye-catching digital experiences.
          </h2>
          <p className="text-lg text-gray-800 dark:text-gray-300 drop-shadow font-medium dark:font-normal transition-colors duration-500">
            Passionate about blending storytelling & design to create impactful
            visual content.
          </p>
        </div>

        <div className="inline-block mt-6">
          {/* Badge */}
          <div className="px-5 py-2 border border-blue-600/50 dark:border-blue-500/50 rounded-full bg-blue-100/50 dark:bg-blue-900/30 backdrop-blur-md transition-colors duration-500">
            <span className="text-blue-800 dark:text-blue-400 text-sm font-bold tracking-widest uppercase drop-shadow">
              Open to Work
            </span>
          </div>
        </div>

        {/* Buttons Section */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 mt-8">
          <button className="px-8 py-3 text-white font-semibold bg-blue-700 dark:bg-blue-600 rounded-xl hover:bg-blue-800 dark:hover:bg-blue-500 transition-all duration-300 shadow-[0_0_15px_rgba(59,130,246,0.4)] hover:shadow-[0_0_20px_rgba(59,130,246,0.8)]">
            <Link to="/resume" className="block w-full h-full">
              View Resume
            </Link>
          </button>
          <button className="px-8 py-3 text-blue-800 dark:text-blue-400 font-bold dark:font-semibold border border-blue-700 dark:border-blue-500 bg-white/50 dark:bg-black/30 rounded-xl hover:bg-blue-700 hover:text-white dark:hover:bg-blue-600 transition-all duration-300 shadow-[0_0_10px_rgba(0,0,0,0.1)] dark:shadow-[0_0_10px_rgba(0,0,0,0.5)]">
            <Link to="/contact" className="block w-full h-full">
              Contact Me
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
