/* ✅ GOOGLE DRIVE DIRECT LINKS */
const img1 =
  "https://res.cloudinary.com/dsw536m3y/image/upload/v1771702548/IMG_20240119_171628_ffthcl.jpg";

const img2 =
  "https://res.cloudinary.com/dsw536m3y/image/upload/v1771702552/IMG_20240106_124745_1_2_jpsncr.jpg";

const img3 =
  "https://res.cloudinary.com/dsw536m3y/image/upload/v1771702560/IMG_4800_1.jpg_sererf.jpg";

const img4 =
  "https://res.cloudinary.com/dsw536m3y/image/upload/v1771702566/IMG_20240314_185100_2_j0t5sz.jpg";

const img5 =
  "https://res.cloudinary.com/dsw536m3y/image/upload/v1771702683/IMG_20240111_093559_vifbnx.jpg";

const img6 =
  "https://res.cloudinary.com/dsw536m3y/image/upload/v1771702776/IMG_2098_ohcxux.jpg";

/* ✅ GOOGLE DRIVE DIRECT LINKS */
const ecovision =
  "https://drive.google.com/file/d/1Zl87NU7tNjK3a8z6ly2TN0fUHBkfzEH0/preview";

const netflix =
  "https://drive.google.com/file/d/1XZ0G-Kl-r6ggOBKNmxha55W1xfMmZLDU/preview";

const reel1 =
  "https://drive.google.com/file/d/1AHywP8AZJ0elXL2RObH6FGOSmH6gbhuN/preview";

const reel2 =
  "https://drive.google.com/file/d/1Wyo28unEeFzvPkpj5o0MmBB6i3pz8yIY/preview";

const reel3 =
  "https://drive.google.com/file/d/1UwRk2xV69JRXS7ERH0Asw5mMpHKe9Gmy/preview";

const reel4 =
  "https://drive.google.com/file/d/1IvfXuqwvvilQn_R2Y5KhaowaPe8BorU4/preview";

const images = [img1, img2, img3];

const imgs = [img4, img5, img6];

const reels = [reel1, reel2, reel3, reel4];

const Projects = () => {
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

      <div className=" flex flex-col pb-24 pt-24 h-full w-full overflow-auto scrollbar-hide">
        <div className="relative mx-12 space-y-6">
          <h1 className="text-lg font-bold text-gray-800 dark:text-white text-center drop-shadow-[0_0_15px_gray] dark:drop-shadow-[0_0_15px_gray] ">
            A showcase of my creative video editing, visual storytelling, and
            design projects that highlight my skills, style, and passion for
            cinematic content.
          </h1>

          {/* MAIN SHOWCASE CONTAINER */}
          <div className="flex flex-col gap-12 h-full">
            {/* 🎬 Advertisement Highlight */}
            <div className="p-10 rounded-2xl bg-white/40 dark:bg-black/40 backdrop-blur-md border border-white/50 dark:border-white/20 shadow-lg">
              <div className="flex flex-col pb-14">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 border-l-4 border-blue-600 pl-4">
                  Featured Advertisement
                </h2>
                <div className=" flex justify-between w-full gap-20">
                  <div className="w-[35%] py-4 px-4">
                    <h1 className=" text-justify font-normal text-gray-900 dark:text-white">
                      Ecovision Bags was born from a simple but powerful idea —
                      the choices we make today shape the world we live in
                      tomorrow. In a time where plastic pollution is becoming
                      impossible to ignore, Ecovision stands as a reminder that
                      sustainability and quality can go hand in hand. Every bag
                      is thoughtfully designed using eco-friendly, earth-sourced
                      materials that reduce environmental impact without
                      compromising durability or style.
                      <br></br>More than just a product, Ecovision represents a
                      movement toward conscious living. Each stitch reflects a
                      commitment to responsible craftsmanship and a cleaner
                      future. By choosing sustainable alternatives, we take a
                      small yet meaningful step toward protecting our planet.
                      Ecovision Bags invites individuals to carry not just
                      essentials, but a shared vision — one that values quality,
                      sustainability, and a future free from plastic.
                    </h1>
                  </div>
                  <div className=" rounded-xl overflow-hidden shadow-xl hover:scale-[1.01] transition duration-300">
                    <iframe
                      src={ecovision}
                      controls
                      className="w-192 h-108 object-cover rounded-xl"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-end pb-14">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 border-r-4 border-blue-600 pr-4">
                  Featured Advertisement
                </h2>
                <div className=" flex justify-between w-full h-fit gap-20">
                  <div className=" rounded-xl overflow-hidden shadow-xl hover:scale-[1.01] transition duration-300">
                    <iframe
                      src={netflix}
                      controls
                      className="w-192 h-108 object-cover rounded-xl"
                    />
                  </div>
                  <div className="w-[35%] py-4 px-4">
                    <h1 className=" text-justify font-normal text-gray-900 dark:text-white">
                      I recently worked on editing a Netflix-style advertisement
                      where I creatively combined video clips and posters from
                      popular Netflix web series to produce a cinematic
                      promotional video. This project allowed me to explore
                      storytelling through fast-paced visuals, engaging
                      transitions, and impactful scene selection, creating a
                      compelling narrative that captures attention from start to
                      finish.
                      <br></br>Through this experience, I gained valuable
                      insights into professional editing workflows, including
                      clip sequencing, pacing, and visual consistency. I also
                      enhanced my skills in sound design by incorporating
                      background music, ambient sounds, and cinematic effects to
                      elevate the emotional impact of the video, strengthening
                      my ability to craft immersive and engaging content.
                    </h1>
                  </div>
                </div>
              </div>
            </div>

            {/* 📱 Reels Section */}
            <div className="p-6 rounded-2xl bg-white/40 dark:bg-black/40 backdrop-blur-md border border-white/50 dark:border-white/20 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 border-l-4 border-blue-600 pl-4">
                Instagram Reels
              </h2>

              <div className="grid grid-cols-3 md:grid-cols-4 gap-5">
                {reels.map((reel, index) => (
                  <div
                    key={index}
                    className="overflow-hidden rounded-md group cursor-pointer shadow-md"
                  >
                    <iframe
                      src={reel}
                      controls
                      className="w-fit h-144 object-cover group-hover:scale-110 transition duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* 🖼️ Image Edits */}
            <div className="p-6 rounded-2xl bg-white/40 dark:bg-black/40 backdrop-blur-md border border-white/50 dark:border-white/20 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 border-l-4 border-blue-600 pl-4">
                Photo Clicks & color Grading Edits
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-5 py-5">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className="overflow-hidden rounded-md group cursor-pointer shadow-md"
                  >
                    <img
                      src={image}
                      className="w-120 h-70 object-cover group-hover:scale-110 transition duration-500"
                      alt="project"
                    />
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-5 py-5">
                {imgs.map((image, index) => (
                  <div
                    key={index}
                    className="overflow-hidden rounded-md group cursor-pointer shadow-md"
                  >
                    <img
                      src={image}
                      className="w-110 h-150 object-cover group-hover:scale-110 transition duration-500"
                      alt="project"
                    />
                  </div>
                ))}
              </div>


            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
