import davinci from "../assets/davinci.png";
import canva from "../assets/canva.png";
import lightroom from "../assets/lightroom.png";
import alight from "../assets/alightmotion.png";
import Pixellab from "../assets/pixellab.png";
import pexels from "../assets/pexels.png";

const apps = [
  {
    id: 0,
    name: "DaVinci Resolve",
    image: <img src={davinci} className="w-38" alt="DaVinci Resolve" />,
  },
  {
    id: 1,
    name: "Adobe Lightroom",
    image: <img src={lightroom} className="w-20 mt-4" alt="Adobe Lightroom" />,
  },
  {
    id: 2,
    name: "Alight Motion",
    image: <img src={alight} className="w-22 mt-3" alt="Alight Motion" />,
  },
  {
    id: 3,
    name: "Canvas",
    image: <img src={canva} className="w-38 -mb-6" alt="Canvas" />,
  },
  {
    id: 4,
    name: "Pixellab",
    image: <img src={Pixellab} className="w-22 mt-4" alt="Pixellab" />,
  },
  {
    id: 5,
    name: "Pexels",
    image: <img src={pexels} className="w-24 mt-10" alt="Pexels" />,
  },
];

const Skills = () => {
  return (
    <div className="h-screen relative dark:bg-black overflow-hidden ">
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

      <div className="flex flex-col pb-24 pt-24 h-full w-full overflow-auto scrollbar-hide">
        <div className="relative mx-12 space-y-6">
          <h1 className="text-5xl font-bold text-gray-800 dark:text-white text-center drop-shadow-[0_0_15px_gray] dark:drop-shadow-[0_0_15px_gray] ">
            My Skills & Expertise
          </h1>
          <div className="p-8 rounded-2xl bg-white/40 dark:bg-black/40 backdrop-blur-md border border-white/50 dark:border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-colors duration-500">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 border-l-4 border-blue-600 pl-4 transition-colors duration-500">
              Technical Skills
            </h2>

            <div className=" flex flex-col gap-y-6">
              <div className=" flex items-center gap-4">
                <h1 className="w-[30%] text-lg font-bold text-gray-800 dark:text-gray-200">
                  DaVinci Resolve
                </h1>
                <div className=" flex items-center gap-3 w-full ">
                  <div className=" bg-gray-300 dark:bg-gray-700 rounded-full h-3 w-full ">
                    <div className="  bg-blue-600 rounded-full h-full w-[90%] ease-out hover:bg-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                  </div>
                  <h2 className=" text-lg font-bold text-gray-800 dark:text-gray-200">
                    90%
                  </h2>
                </div>
              </div>

              <div className=" flex items-center gap-4">
                <h1 className="w-[30%] text-lg font-bold text-gray-800 dark:text-gray-200">
                  Adobe Lightroom
                </h1>
                <div className=" flex items-center gap-3 w-full ">
                  <div className=" bg-gray-300 dark:bg-gray-700 rounded-full h-3 w-full ">
                    <div className="  bg-blue-600 rounded-full h-full w-[100%] ease-out hover:bg-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                  </div>
                  <h2 className=" text-lg font-bold text-gray-800 dark:text-gray-200">
                    100%
                  </h2>
                </div>
              </div>

              <div className=" flex items-center gap-4">
                <h1 className="w-[30%] text-lg font-bold text-gray-800 dark:text-gray-200">
                  Alight Motion
                </h1>
                <div className=" flex items-center gap-3 w-full ">
                  <div className=" bg-gray-300 dark:bg-gray-700 rounded-full h-3 w-full ">
                    <div className="  bg-blue-600 rounded-full h-full w-[95%] ease-out hover:bg-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                  </div>
                  <h2 className=" text-lg font-bold text-gray-800 dark:text-gray-200">
                    95%
                  </h2>
                </div>
              </div>

              <div className=" flex items-center gap-4">
                <h1 className="w-[30%] text-lg font-bold text-gray-800 dark:text-gray-200">
                  Canvas
                </h1>
                <div className=" flex items-center gap-3 w-full ">
                  <div className=" bg-gray-300 dark:bg-gray-700 rounded-full h-3 w-full ">
                    <div className="  bg-blue-600 rounded-full h-full w-[85%] ease-out hover:bg-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                  </div>
                  <h2 className=" text-lg font-bold text-gray-800 dark:text-gray-200">
                    85%
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full flex justify-between  gap-6">
            <div className="p-8 w-full rounded-2xl bg-white/40 dark:bg-black/40 backdrop-blur-md border border-white/50 dark:border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_32px_rgba(255,255,255,0.1)] ">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 border-l-4 border-blue-600 pl-4 transition-colors duration-500">
                Video Editing Expertise
              </h2>
              <div className=" text-center ">
                <div className="flex flex-col gap-5">
                  <div className="flex gap-6 w-full">
                    <div className=" w-full h-30 bg-white/60 dark:bg-white/10 p-4 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/40 hover:-translate-y-1 border border-white/50 dark:border-white/10 hover:border-blue-400 dark:hover:border-blue-500 shadow-sm">
                      <div className="font-bold  text-gray-800 dark:text-gray-200 flex flex-col h-full w-full justify-center items-center gap-2">
                        <p>Cinematic Editing</p>
                      </div>
                    </div>
                    <div className=" w-full h-30 bg-white/60 dark:bg-white/10 p-4 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/40 hover:-translate-y-1 border border-white/50 dark:border-white/10 hover:border-blue-400 dark:hover:border-blue-500 shadow-sm">
                      <div className="font-bold text-gray-800 dark:text-gray-200 flex flex-col h-full w-full justify-center items-center gap-2">
                        <p>Color Grading</p>
                      </div>
                    </div>
                    <div className=" w-full h-30 bg-white/60 dark:bg-white/10 p-4 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/40 hover:-translate-y-1 border border-white/50 dark:border-white/10 hover:border-blue-400 dark:hover:border-blue-500 shadow-sm">
                      <div className="font-bold text-gray-800 dark:text-gray-200 flex flex-col h-full w-full justify-center items-center gap-2">
                        <p>Transitions & Effects</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-6 w-full">
                    <div className=" w-full h-30 bg-white/60 dark:bg-white/10 p-4 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/40 hover:-translate-y-1 border border-white/50 dark:border-white/10 hover:border-blue-400 dark:hover:border-blue-500 shadow-sm">
                      <div className="font-bold text-gray-800 dark:text-gray-200 flex flex-col h-full w-full justify-center items-center gap-2">
                        <p>Motion Titles</p>
                      </div>
                    </div>
                    <div className=" w-full h-30 bg-white/60 dark:bg-white/10 p-4 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/40 hover:-translate-y-1 border border-white/50 dark:border-white/10 hover:border-blue-400 dark:hover:border-blue-500 shadow-sm">
                      <div className="font-bold text-gray-800 dark:text-gray-200 flex flex-col h-full w-full justify-center items-center gap-2">
                        <p>Reel & Shorts Editing</p>
                      </div>
                    </div>
                    <div className=" w-full bg-white/60 dark:bg-white/10 p-4 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/40 hover:-translate-y-1 border border-white/50 dark:border-white/10 hover:border-blue-400 dark:hover:border-blue-500 shadow-sm">
                      <div className="font-bold text-gray-800 dark:text-gray-200 flex flex-col h-full w-full justify-center items-center gap-2">
                        <p>YouTube Video Editing</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 w-full  rounded-2xl bg-white/40 dark:bg-black/40 backdrop-blur-md border border-white/50 dark:border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_32px_rgba(255,255,255,0.1)] ">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 border-l-4 border-blue-600 pl-4 transition-colors duration-500">
                Storytelling Skills
              </h2>
              <div className=" text-center">
                <div className="flex flex-col gap-5">
                  <div className="flex gap-6 w-full">
                    <div className=" w-full h-30 bg-white/60 dark:bg-white/10 p-4 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/40 hover:-translate-y-1 border border-white/50 dark:border-white/10 hover:border-blue-400 dark:hover:border-blue-500 shadow-sm">
                      <div className="font-bold text-gray-800 dark:text-gray-200 flex flex-col h-full w-full justify-center items-center gap-2">
                        <p>Storyboarding</p>
                      </div>
                    </div>
                    <div className=" w-full bg-white/60 dark:bg-white/10 p-4 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/40 hover:-translate-y-1 border border-white/50 dark:border-white/10 hover:border-blue-400 dark:hover:border-blue-500 shadow-sm">
                      <div className="font-bold text-gray-800 dark:text-gray-200 flex flex-col h-full w-full justify-center items-center gap-2">
                        <p>Scene Selection</p>
                      </div>
                    </div>
                    <div className=" w-full bg-white/60 dark:bg-white/10 p-4 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/40 hover:-translate-y-1 border border-white/50 dark:border-white/10 hover:border-blue-400 dark:hover:border-blue-500 shadow-sm">
                      <div className="font-bold text-gray-800 dark:text-gray-200 flex flex-col h-full w-full justify-center items-center gap-2">
                        <p>Emotion-based Editing</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-6 w-full">
                    <div className=" w-full bg-white/60 dark:bg-white/10 p-4 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/40 hover:-translate-y-1 border border-white/50 dark:border-white/10 hover:border-blue-400 dark:hover:border-blue-500 shadow-sm">
                      <div className="font-bold text-gray-800 dark:text-gray-200 flex flex-col h-full w-full justify-center items-center gap-2">
                        <p>Beat Sync Editing</p>
                      </div>
                    </div>
                    <div className=" w-full bg-white/60 dark:bg-white/10 p-4 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/40 hover:-translate-y-1 border border-white/50 dark:border-white/10 hover:border-blue-400 dark:hover:border-blue-500 shadow-sm">
                      <div className="font-bold text-gray-800 dark:text-gray-200 flex flex-col h-full w-full justify-center items-center gap-2">
                        <p>Creative Cuts</p>
                      </div>
                    </div>
                    <div className=" w-full h-30 bg-white/60 dark:bg-white/10 p-4 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/40 hover:-translate-y-1 border border-white/50 dark:border-white/10 hover:border-blue-400 dark:hover:border-blue-500 shadow-sm">
                      <div className="font-bold text-gray-800 dark:text-gray-200 flex flex-col h-full w-full justify-center items-center gap-2">
                        <p>Audience Engagement</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-8 rounded-2xl bg-white/40 dark:bg-black/40 backdrop-blur-md border border-white/50 dark:border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_32px_rgba(255,255,255,0.1)]">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 border-l-4 border-blue-600 pl-4 transition-colors duration-500">
              Technical Knowledge
            </h2>
            <div className="flex flex-col gap-5">
              <div className="flex gap-6 w-full">
                <div className=" w-full h-full p-8 rounded-2xl bg-white/40 dark:bg-black/40 backdrop-blur-md border border-white/50 dark:border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_32px_rgba(255,255,255,0.1)]">
                  <div className="text-xl font-bold tracking-wide text-gray-800 dark:text-gray-200 py-4 flex justify-center items-center">
                    <p>Video Formats</p>
                  </div>
                  <div className="flex gap-4 h-40">
                    {/* MP4 */}
                    <div
                      className="group w-full p-4 rounded-xl border border-white/50 dark:border-white/10 
  bg-white/60 dark:bg-white/10 
  hover:bg-gradient-to-br hover:from-blue-500 hover:to-indigo-600 
  hover:scale-105 hover:-translate-y-2 
  transition duration-300 shadow-sm hover:shadow-xl cursor-pointer"
                    >
                      <div className="flex flex-col h-full w-full justify-center items-center gap-2">
                        <p className="font-bold text-gray-800 dark:text-gray-200 group-hover:text-white text-lg">
                          MP4
                        </p>

                        {/* hidden text */}
                        <p
                          className="text-sm text-gray-700 dark:text-gray-300 text-center 
      opacity-0 max-h-0 overflow-hidden 
      group-hover:opacity-100 group-hover:max-h-40 
      group-hover:text-white transition-all duration-300"
                        >
                          Most widely used video format. High quality with small
                          file size. Perfect for YouTube & social media.
                        </p>
                      </div>
                    </div>

                    {/* MKV */}
                    <div
                      className="group w-full p-4 rounded-xl border border-white/50 dark:border-white/10 
  bg-white/60 dark:bg-white/10 
  hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-600 
  hover:scale-105 hover:-translate-y-2 
  transition duration-300 shadow-sm hover:shadow-xl cursor-pointer"
                    >
                      <div className="flex flex-col h-full w-full justify-center items-center gap-2">
                        <p className="font-bold text-gray-800 dark:text-gray-200 group-hover:text-white text-lg">
                          MKV
                        </p>

                        {/* hidden text */}
                        <p
                          className="text-sm text-gray-700 dark:text-gray-300 text-center 
      opacity-0 max-h-0 overflow-hidden 
      group-hover:opacity-100 group-hover:max-h-40 
      group-hover:text-white transition-all duration-300"
                        >
                          Supports multiple audio tracks. High quality &
                          flexible format. Used for editing & storage.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" w-full h-full p-8 rounded-2xl bg-white/40 dark:bg-black/40 backdrop-blur-md border border-white/50 dark:border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_32px_rgba(255,255,255,0.1)]">
                  <div className="text-xl font-bold tracking-wide text-gray-800 dark:text-gray-200 py-4 flex justify-center items-center">
                    <p>Codecs</p>
                  </div>
                  <div className="flex gap-4 h-40">
                    {/* H.264 */}
                    <div
                      className="group w-full p-4 rounded-xl border border-white/50 dark:border-white/10 
  bg-white/60 dark:bg-white/10 
  hover:bg-gradient-to-br hover:from-cyan-500 hover:to-blue-600 
  hover:scale-105 hover:-translate-y-2 
  transition duration-300 shadow-sm hover:shadow-xl cursor-pointer"
                    >
                      <div className="flex flex-col h-full w-full justify-center items-center gap-2">
                        <p className="font-bold text-gray-800 dark:text-gray-200 group-hover:text-white text-lg">
                          H.264
                        </p>

                        <p
                          className="text-sm text-gray-700 dark:text-gray-300 text-center 
      opacity-0 max-h-0 overflow-hidden 
      group-hover:opacity-100 group-hover:max-h-40 
      group-hover:text-white transition-all duration-300"
                        >
                          Most common video codec. Best for YouTube & streaming.
                          Balanced quality & size.
                        </p>
                      </div>
                    </div>

                    {/* H.265 */}
                    <div
                      className="group w-full p-4 rounded-xl border border-white/50 dark:border-white/10 
  bg-white/60 dark:bg-white/10 
  hover:bg-gradient-to-br hover:from-fuchsia-500 hover:to-purple-600 
  hover:scale-105 hover:-translate-y-2 
  transition duration-300 shadow-sm hover:shadow-xl cursor-pointer"
                    >
                      <div className="flex flex-col h-full w-full justify-center items-center gap-2">
                        <p className="font-bold text-gray-800 dark:text-gray-200 group-hover:text-white text-lg">
                          H.265
                        </p>

                        <p
                          className="text-sm text-gray-700 dark:text-gray-300 text-center 
      opacity-0 max-h-0 overflow-hidden 
      group-hover:opacity-100 group-hover:max-h-40 
      group-hover:text-white transition-all duration-300"
                        >
                          Advanced compression codec. Smaller file with high
                          quality. Used for 4K & modern video.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-6 w-full">
                <div className="w-full h-110 p-8 rounded-2xl bg-white/40 dark:bg-black/40 backdrop-blur-md border border-white/50 dark:border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_32px_rgba(255,255,255,0.1)]">
                  <div className="text-xl font-bold tracking-wide text-gray-800 dark:text-gray-200 py-4 flex justify-center items-center">
                    <p>Sound Effects</p>
                  </div>

                  {/* cards */}
                  <div className="grid grid-cols-2 gap-6 mt-4">
                    {/* Whoosh */}
                    <div className="relative group bg-gradient-to-br from-yellow-300 to-orange-400 rounded-xl p-6 flex items-center justify-center text-black font-extrabold text-xl shadow-lg hover:scale-105 transition duration-300">
                      <span className="absolute -top-3 -left-3 text-3xl rotate-[-20deg]">
                        💨
                      </span>
                      WHOOSH
                    </div>

                    {/* Boom */}
                    <div className="relative group bg-gradient-to-br from-red-400 to-pink-500 rounded-xl p-6 flex items-center justify-center text-white font-extrabold text-xl shadow-lg hover:scale-105 transition duration-300">
                      <span className="absolute -top-3 -right-3 text-3xl">
                        💥
                      </span>
                      BOOM
                    </div>

                    {/* Glitch */}
                    <div className="relative group bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl p-6 flex items-center justify-center text-white font-extrabold text-xl shadow-lg hover:scale-105 transition duration-300">
                      <span className="absolute -top-3 -left-3 text-3xl">
                        ⚡
                      </span>
                      GLITCH
                    </div>

                    {/* Beat Drop */}
                    <div className="relative group bg-gradient-to-br from-lime-300 to-green-500 rounded-xl p-6 flex items-center justify-center text-black font-extrabold text-xl shadow-lg hover:scale-105 transition duration-300">
                      <span className="absolute -top-3 -right-3 text-3xl">
                        🎧
                      </span>
                      BEAT DROP
                    </div>

                    {/* New: Riser */}
                    <div className="relative group bg-gradient-to-br from-cyan-300 to-blue-500 rounded-xl p-6 flex items-center justify-center text-white font-extrabold text-xl shadow-lg hover:scale-105 transition duration-300">
                      <span className="absolute -top-3 -left-3 text-3xl">
                        📈
                      </span>
                      RISER
                    </div>

                    {/* New: Ambient */}
                    <div className="relative group bg-gradient-to-br from-gray-300 to-gray-500 rounded-xl p-6 flex items-center justify-center text-black font-extrabold text-xl shadow-lg hover:scale-105 transition duration-300">
                      <span className="absolute -top-3 -right-3 text-3xl">
                        🌌
                      </span>
                      AMBIENT
                    </div>
                  </div>
                </div>

                <div className=" w-full h-110 p-8 rounded-2xl bg-white/40 dark:bg-black/40 backdrop-blur-md border border-white/50 dark:border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.1)]">
                  <div className="text-xl font-bold tracking-wide text-gray-800 dark:text-gray-200 py-4 flex justify-center items-center">
                    <p>Aspect Ratios</p>
                  </div>

                  <div className="flex gap-1">
                    <div className="flex flex-col items-end gap-1 w-full">
                      {/* 3:2 */}
                      <div
                        className="w-30 h-20 rounded-sm flex items-center justify-center font-bold text-white 
      bg-gradient-to-br from-blue-500 to-indigo-600 
      shadow-md hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] 
      hover:scale-105 hover:-translate-y-1 transition duration-300"
                      >
                        3:2
                      </div>

                      {/* 21:9 */}
                      <div
                        className="w-63 h-27 rounded-sm flex items-center justify-center font-bold text-white 
      bg-gradient-to-br from-orange-500 to-red-500 
      shadow-md hover:shadow-[0_0_20px_rgba(249,115,22,0.6)] 
      hover:scale-105 hover:-translate-y-1 transition duration-300"
                      >
                        21:9
                      </div>

                      {/* 16:9 */}
                      <div
                        className="w-48 h-27 rounded-sm flex items-center justify-center font-bold text-white 
      bg-gradient-to-br from-purple-600 to-pink-600 
      shadow-md hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] 
      hover:scale-105 hover:-translate-y-1 transition duration-300"
                      >
                        16:9
                      </div>
                    </div>

                    <div className="flex flex-col gap-1">
                      {/* 1:1 */}
                      <div
                        className="w-30 h-30 rounded-sm flex items-center justify-center font-bold text-white 
      bg-gradient-to-br from-violet-500 to-fuchsia-600 
      shadow-md hover:shadow-[0_0_20px_rgba(139,92,246,0.6)] 
      hover:scale-105 hover:-translate-y-1 transition duration-300"
                      >
                        1:1
                      </div>

                      <div className="flex gap-1">
                        {/* 9:16 */}
                        <div
                          className="w-27 h-48 rounded-sm flex items-center justify-center font-bold text-black 
        bg-gradient-to-br from-yellow-300 to-amber-400 
        shadow-md hover:shadow-[0_0_20px_rgba(250,204,21,0.6)] 
        hover:scale-105 hover:-translate-y-1 transition duration-300"
                        >
                          9:16
                        </div>

                        {/* 4:3 */}
                        <div
                          className="w-52 h-39 rounded-sm flex items-center justify-center font-bold text-white 
        bg-gradient-to-br from-green-500 to-emerald-600 
        shadow-md hover:shadow-[0_0_20px_rgba(34,197,94,0.6)] 
        hover:scale-105 hover:-translate-y-1 transition duration-300"
                        >
                          4:3
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
             
            </div>
          </div>
          <div className="p-8 rounded-2xl bg-white/40 dark:bg-black/40 backdrop-blur-md border border-white/50 dark:border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_32px_rgba(255,255,255,0.1)]">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 border-l-4 border-blue-600 pl-4 transition-colors duration-500">
              Tools I Use Daily
            </h2>
            <div className=" flex items-center justify-center gap-10">
                  {apps.map((item) => (
                    <div
                      key={item.id}
                      className="flex flex-col h-34 justify-between items-center"
                    >
                      {item.image}
                      <p className=" text-black text-center mt-2">
                        {item.name}
                      </p>
                    </div>
                  ))}
                </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
