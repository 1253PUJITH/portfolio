import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import {
  FaEnvelope,
  FaLandmark,
  FaLocationArrow,
  FaMailchimp,
  FaMapMarked,
  FaPhone,
} from "react-icons/fa";
import { useState, useEffect } from "react";

import youtube from "../assets/youtube.lottie";
import insta from "../assets/instagram.lottie";
import colour from "../assets/color.lottie";
import sound from "../assets/sound.lottie";
import plane from "../assets/plane.lottie";

const About = () => {
  const [activeTab, setActiveTab] = useState("Tech Skills");

  const changetech = () => {
    setActiveTab("Tech Skills");
    console.log("tech");
  };

  const changenontech = () => {
    setActiveTab("Non Tech");
    console.log("nontech");
  };

  const render = () => {
    if (activeTab === "Tech Skills") {
      return (
        <div className="flex flex-col gap-5">
          <div className="flex gap-6 w-full">
            <div className=" w-full bg-white/60 dark:bg-white/10 p-4 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/40 hover:-translate-y-1 border border-white/50 dark:border-white/10 hover:border-blue-400 dark:hover:border-blue-500 shadow-sm">
              <div className="font-bold text-gray-800 dark:text-gray-200 flex flex-col items-center gap-2">
                <div className=" text-4xl">🎞️</div>
                <p>DaVinci Resolve</p>
              </div>
            </div>
            <div className=" w-full bg-white/60 dark:bg-white/10 p-4 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/40 hover:-translate-y-1 border border-white/50 dark:border-white/10 hover:border-blue-400 dark:hover:border-blue-500 shadow-sm">
              <div className="font-bold text-gray-800 dark:text-gray-200 flex flex-col items-center gap-2">
                <div className=" text-4xl">✨</div>
                <p>Animations</p>
              </div>
            </div>
            <div className=" w-full bg-white/60 dark:bg-white/10 p-4 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/40 hover:-translate-y-1 border border-white/50 dark:border-white/10 hover:border-blue-400 dark:hover:border-blue-500 shadow-sm">
              <div className="font-bold text-gray-800 dark:text-gray-200 flex flex-col items-center gap-2">
                <div className=" text-4xl">🔊</div>
                <p>Sound Effects</p>
              </div>
            </div>
          </div>
          <div className="flex gap-6 w-full">
            <div className=" w-full bg-white/60 dark:bg-white/10 p-4 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/40 hover:-translate-y-1 border border-white/50 dark:border-white/10 hover:border-blue-400 dark:hover:border-blue-500 shadow-sm">
              <div className="font-bold text-gray-800 dark:text-gray-200 flex flex-col items-center gap-2">
                <div className=" text-4xl">🔤</div>
                <p>Titles</p>
              </div>
            </div>
            <div className=" w-full bg-white/60 dark:bg-white/10 p-4 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/40 hover:-translate-y-1 border border-white/50 dark:border-white/10 hover:border-blue-400 dark:hover:border-blue-500 shadow-sm">
              <div className="font-bold text-gray-800 dark:text-gray-200 flex flex-col items-center gap-2">
                <div className=" text-4xl">🎨</div>
                <p>Color Balance</p>
              </div>
            </div>
            <div className=" w-full bg-white/60 dark:bg-white/10 p-4 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/40 hover:-translate-y-1 border border-white/50 dark:border-white/10 hover:border-blue-400 dark:hover:border-blue-500 shadow-sm">
              <div className="font-bold text-gray-800 dark:text-gray-200 flex flex-col items-center gap-2">
                <div className=" text-4xl">🖌️</div>
                <p>Photoshop / Canva</p>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="flex flex-col gap-5">
          <div className="flex gap-6 w-full">
            <div className=" w-full bg-white/60 dark:bg-white/10 p-4 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/40 hover:-translate-y-1 border border-white/50 dark:border-white/10 hover:border-blue-400 dark:hover:border-blue-500 shadow-sm">
              <div className="font-bold text-gray-800 dark:text-gray-200 flex flex-col items-center gap-2">
                <div className=" text-4xl">🎬</div>
                <p>Creativity & Storytelling</p>
              </div>
            </div>
            <div className=" w-full bg-white/60 dark:bg-white/10 p-4 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/40 hover:-translate-y-1 border border-white/50 dark:border-white/10 hover:border-blue-400 dark:hover:border-blue-500 shadow-sm">
              <div className="font-bold text-gray-800 dark:text-gray-200 flex flex-col items-center gap-2">
                <div className=" text-4xl">🔍</div>
                <p>Attention to Detail</p>
              </div>
            </div>
            <div className=" w-full bg-white/60 dark:bg-white/10 p-4 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/40 hover:-translate-y-1 border border-white/50 dark:border-white/10 hover:border-blue-400 dark:hover:border-blue-500 shadow-sm">
              <div className="font-bold text-gray-800 dark:text-gray-200 flex flex-col items-center gap-2">
                <div className=" text-4xl">⏳</div>
                <p>Time Management</p>
              </div>
            </div>
          </div>
          <div className="flex gap-6 w-full">
            <div className=" w-full bg-white/60 dark:bg-white/10 p-4 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/40 hover:-translate-y-1 border border-white/50 dark:border-white/10 hover:border-blue-400 dark:hover:border-blue-500 shadow-sm">
              <div className="font-bold text-gray-800 dark:text-gray-200 flex flex-col items-center gap-2">
                <div className=" text-4xl">💬</div>
                <p>Communication Skills</p>
              </div>
            </div>
            <div className=" w-full bg-white/60 dark:bg-white/10 p-4 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/40 hover:-translate-y-1 border border-white/50 dark:border-white/10 hover:border-blue-400 dark:hover:border-blue-500 shadow-sm">
              <div className="font-bold text-gray-800 dark:text-gray-200 flex flex-col items-center gap-2">
                <div className=" text-4xl">🦎</div>
                <p>Adaptability</p>
              </div>
            </div>
            <div className=" w-full bg-white/60 dark:bg-white/10 p-4 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/40 hover:-translate-y-1 border border-white/50 dark:border-white/10 hover:border-blue-400 dark:hover:border-blue-500 shadow-sm">
              <div className="font-bold text-gray-800 dark:text-gray-200 flex flex-col items-center gap-2">
                <div className=" text-4xl">📚</div>
                <p>Continuous Learning</p>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
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

      <div className="flex px-20 gap-14 h-full pb-24">
        <div className="w-120 p-8 rounded-2xl flex flex-col items-center gap-5 overflow-auto scrollbar-hide bg-white/40 dark:bg-black/40 backdrop-blur-md border border-white/50 dark:border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_32px_rgba(255,255,255,0.1)]">
          <div className=" border-4 border-white/80 dark:border-white/20 rounded-lg overflow-hidden shadow-lg ">
            <img
              src="https://res.cloudinary.com/dsw536m3y/image/upload/v1749449888/avatar_aaonx4.jpg"
              className="h-full w-full "
              alt="profile"
            ></img>
          </div>
          <div className=" text-center space-y-2 w-full">
            <h1 className="text-2xl font-black text-gray-900 dark:text-white uppercase ">
              gotham pujith<br></br>sri surya
            </h1>
            <h1 className="font-extralight text-blue-800 dark:text-blue-300 bg-blue-100/50 dark:bg-blue-900/30 py-1 rounded-md ">
              Video Editor & Storyteller
            </h1>
          </div>

          <div className=" space-y-2 py-4 px-8 rounded-xl w-full text-gray-800 dark:text-gray-200 bg-white/50 dark:bg-white/6 backdrop-blur-sm border border-white/30 dark:border-transparent">
            <div className=" flex items-center gap-2">
              <FaPhone />{" "}
              <h1 className="text-gray-900 dark:text-white">+91 94949 78639</h1>
            </div>
            <div className=" flex items-center gap-2">
              <FaEnvelope />{" "}
              <a
                href=" mailto:gothampujith@gmail.com "
                className="text-gray-900 dark:text-white cursor-pointer"
              >
                gothampujith@gmail.com
              </a>
            </div>
            <div className=" flex items-center gap-2">
              <FaMapMarked />{" "}
              <h1 className="text-gray-900 dark:text-white">
                Palakollu, Andhra Pradesh
              </h1>
            </div>
          </div>

          <div className="flex justify-center w-full gap-4">
            <button className=" bg-gray-900 dark:bg-white text-white dark:text-black py-2 w-full rounded-lg hover:bg-gray-700 dark:hover:bg-gray-200 font-bold shadow-md hover:cursor-pointer">
              Github
            </button>
            <button className=" bg-blue-600 text-white py-2 w-full rounded-lg hover:bg-blue-700 font-bold shadow-md hover:cursor-pointer">
              Linkedin
            </button>
          </div>
        </div>

        {/* // ================= RIGHT COLUMN: ABOUT & SKILLS ================= */}
        <div className="w-full p-8 rounded-2xl flex flex-col items-center gap-5 overflow-auto scrollbar-hide bg-white/40 dark:bg-black/40 backdrop-blur-md border border-white/50 dark:border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_32px_rgba(255,255,255,0.1)]">
          <div
            className=" w-full py-4 px-8 rounded-lg flex flex-col gap-5 bg-white/40 dark:bg-black/40 backdrop-blur-md border 
                    border-white/50 dark:border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_32px_rgba(255,255,255,0.1)]"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white -mb-2 border-l-4 border-blue-600 pl-4">
              About
            </h2>
            <h2 className=" font-normal text-gray-900 dark:text-white ">
              I am a creative Video Editor and Visual Storyteller with a strong
              passion for crafting engaging and impactful visual content.
              Skilled in video editing, visual design, and storytelling, I enjoy
              transforming raw footage into clean, cinematic, and
              audience-focused videos.
              <br />I am currently seeking an entry-level opportunity where I
              can apply my creativity, enhance my editing skills, and grow
              professionally in the media and creative industry. I am a quick
              learner, detail-oriented, and always committed to improving my
              craft and delivering high-quality visual content.
            </h2>
          </div>

          <div
            className="w-full p-8 rounded-lg flex flex-col gap-5 bg-white/40 dark:bg-black/40 backdrop-blur-md border 
                    border-white/50 dark:border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_32px_rgba(255,255,255,0.1)]"
          >
            <div className=" flex gap-6">
              <button
                className="  text-black dark:text-white bg-white/60 dark:bg-blue-400/10 w-full h-14 rounded-lg hover:bg-blue-400 font-bold shadow-[0_0_10px_gray] hover:cursor-pointer"
                onClick={changetech}
              >
                Creative Tools
              </button>
              <button
                className=" text-black dark:text-white bg-white/60 dark:bg-blue-400/10 w-full h-14 rounded-lg hover:bg-blue-400 font-bold shadow-[0_0_10px_gray] hover:cursor-pointer"
                onClick={changenontech}
              >
                Creative Strengths
              </button>
            </div>
            <div className=" flex flex-col gap-5">{render()}</div>
          </div>

          <div className=" flex w-full justify-between gap-4">
            <div className=" w-full bg-white/60 dark:bg-white/10 p-4 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/40 hover:-translate-y-1 border border-white/50 dark:border-white/10 hover:border-blue-400 dark:hover:border-blue-500 shadow-sm">
              <div className="font-bold text-gray-800 dark:text-gray-200 flex flex-col items-center gap-2 text-center">
                <DotLottieReact
                  src={youtube}
                  loop
                  autoplay
                  className="h-full"
                />
                <p>YouTube Video Editing</p>
              </div>
            </div>
            <div className="w-full bg-white/60 dark:bg-white/10 p-4 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/40 hover:-translate-y-1 border border-white/50 dark:border-white/10 hover:border-blue-400 dark:hover:border-blue-500 shadow-sm">
              <div className="font-bold text-gray-800 dark:text-gray-200 flex flex-col items-center gap-2 text-center">
                <DotLottieReact src={insta} loop autoplay className="h-full" />
                <p>Instagram Reels & Shorts</p>
              </div>
            </div>
            <div className=" w-full bg-white/60 dark:bg-white/10 p-4 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/40 hover:-translate-y-1 border border-white/50 dark:border-white/10 hover:border-blue-400 dark:hover:border-blue-500 shadow-sm">
              <div className="font-bold text-gray-800 dark:text-gray-200 flex flex-col items-center gap-2 text-center">
                <DotLottieReact src={colour} loop autoplay className="h-full" />
                <p>Color Grading & Cinematic Edits</p>
              </div>
            </div>
            <div className="w-full bg-white/60 dark:bg-white/10 p-4 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/40 hover:-translate-y-1 border border-white/50 dark:border-white/10 hover:border-blue-400 dark:hover:border-blue-500 shadow-sm">
              <div className="font-bold text-gray-800 dark:text-gray-200 flex flex-col items-center gap-2 text-center">
                <DotLottieReact src={sound} loop autoplay className="h-full" />
                <p>Audio Sync & Sound Design</p>
              </div>
            </div>
            <div className="w-full bg-white/60 dark:bg-white/10 p-4 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/40 hover:-translate-y-1 border border-white/50 dark:border-white/10 hover:border-blue-400 dark:hover:border-blue-500 shadow-sm">
              <div className="font-bold text-gray-800 dark:text-gray-200 flex flex-col items-center gap-2 text-center">
                <DotLottieReact src={plane} loop autoplay className="h-full" />
                <p>Motion Titles & Transitions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
