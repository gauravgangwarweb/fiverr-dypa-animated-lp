import { motion } from "motion/react";
import { useState } from "react";

function App() {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className="pt-2">
      {/* desktop version */}
      <div className=""></div>
      <div
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        className="w-full h-[700px] hidden lg:flex flex-col justify-center items-center relative"
      >
        <h3 className="text-[#4663AC] text-6xl font-semibold">
          Rejoignez MySite
        </h3>
        <p className="text-[#6C6C6C] text-3xl">
          Devenez User et Proposez Votre Espace !
        </p>
        <button className={`text-white px-16 py-2 rounded-full cursor-pointer transition-all duration-600 mt-4 ${isHovering ? "bg-blue-950" : "bg-[#4663AC]"}`}>
          add
        </button>
        {/* left side */}
        <>
          <motion.img
            animate={isHovering ? { x: 40, y: -5 } : { x: 0, y: 0 }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              repeatType: "reverse",
              repeatDelay: 1.5,
              delay: 0.5,
            }}
            className="w-40 absolute top-0 left-80 float"
            loading="lazy"
            src="/polygon-1.png"
            alt="polygon"
          />
          <motion.img
            animate={isHovering ? { x: -30, y: -20 } : { x: 0, y: 0 }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              repeatType: "reverse",
              repeatDelay: 1.5,
              delay: 0.5,
            }}
            className="w-24 absolute top-16 left-[12.5rem]"
            loading="lazy"
            src="/polygon-2.png"
            alt="polygon"
          />
          <motion.img
            animate={isHovering ? { y: 20 } : { y: 0 }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              repeatType: "reverse",
              repeatDelay: 1.5,
              delay: 0.5,
            }}
            className="w-[8.125rem] absolute top-36 left-64"
            loading="lazy"
            src="/polygon-3.png"
            alt="polygon"
          />
          <motion.img
            animate={isHovering ? { x: -20, y: -20 } : { x: 0, y: 0 }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              repeatType: "reverse",
              repeatDelay: 1.5,
              delay: 0.5,
            }}
            className="w-[13.75rem] absolute top-32 left-8"
            loading="lazy"
            src="/polygon-4.png"
            alt="polygon"
          />
          <motion.img
            animate={isHovering ? { x: 10, y: 20 } : { x: 0, y: 0 }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              repeatType: "reverse",
              repeatDelay: 1.5,
              delay: 0.5,
            }}
            className="w-32 absolute top-[21rem] left-40"
            loading="lazy"
            src="/polygon-5.png"
            alt="polygon"
          />
          <motion.img
            animate={isHovering ? { x: -20, y: 20 } : { x: 0, y: 0 }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              repeatType: "reverse",
              repeatDelay: 1.5,
              delay: 0.5,
            }}
            className="w-[7.5rem] absolute top-[22.5rem] left-9"
            loading="lazy"
            src="/polygon-6.png"
            alt="polygon"
          />
          <motion.img
            animate={isHovering ? { y: 30 } : { y: 0 }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              repeatType: "reverse",
              repeatDelay: 1.5,
              delay: 0.5,
            }}
            className="w-32 absolute top-[28.5rem] left-[6.5rem]"
            loading="lazy"
            src="/polygon-7.png"
            alt="polygon"
          />
          <motion.img
            animate={isHovering ? { x: 40, y: 5 } : { x: 0, y: 0 }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              repeatType: "reverse",
              repeatDelay: 1.5,
              delay: 0.5,
            }}
            className="w-44 absolute top-[27.4rem] left-[14.6rem]"
            loading="lazy"
            src="/polygon-8.png"
            alt="polygon"
          />
        </>
        {/* right side */}
        <>
          <motion.img
            animate={isHovering ? { x: -40, y: -5 } : { x: 0, y: 0 }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              repeatType: "reverse",
              repeatDelay: 1.5,
              delay: 0.5,
            }}
            className="w-40 absolute top-0 right-80"
            loading="lazy"
            src="/polygon-1.png"
            alt="polygon"
          />
          <motion.img
            animate={isHovering ? { x: 30, y: -20 } : { x: 0, y: 0 }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              repeatType: "reverse",
              repeatDelay: 1.5,
              delay: 0.5,
            }}
            className="w-24 absolute top-16 right-[12.5rem]"
            loading="lazy"
            src="/polygon-2.png"
            alt="polygon"
          />
          <motion.img
            animate={isHovering ? { y: 20 } : { y: 0 }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              repeatType: "reverse",
              repeatDelay: 1.5,
              delay: 0.5,
            }}
            className="w-[8.125rem] absolute top-36 right-64"
            loading="lazy"
            src="/polygon-3.png"
            alt="polygon"
          />
          <motion.img
            animate={isHovering ? { x: 20, y: -20 } : { x: 0, y: 0 }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              repeatType: "reverse",
              repeatDelay: 1.5,
              delay: 0.5,
            }}
            className="w-[13.75rem] absolute top-32 right-8"
            loading="lazy"
            src="/polygon-4.png"
            alt="polygon"
          />
          <motion.img
            animate={isHovering ? { x: -10, y: 20 } : { x: 0, y: 0 }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              repeatType: "reverse",
              repeatDelay: 1.5,
              delay: 0.5,
            }}
            className="w-32 absolute top-[21rem] right-40"
            loading="lazy"
            src="/polygon-5.png"
            alt="polygon"
          />
          <motion.img
            animate={isHovering ? { x: 20, y: 20 } : { x: 0, y: 0 }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              repeatType: "reverse",
              repeatDelay: 1.5,
              delay: 0.5,
            }}
            className="w-[7.5rem] absolute top-[22.5rem] right-9"
            loading="lazy"
            src="/polygon-6.png"
            alt="polygon"
          />
          <motion.img
            animate={isHovering ? { y: 30 } : { y: 0 }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              repeatType: "reverse",
              repeatDelay: 1.5,
              delay: 0.5,
            }}
            className="w-32 absolute top-[28.5rem] right-[6.5rem]"
            loading="lazy"
            src="/polygon-7.png"
            alt="polygon"
          />
          <motion.img
            animate={isHovering ? { x: -40, y: 5 } : { x: 0, y: 0 }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              repeatType: "reverse",
              repeatDelay: 1.5,
              delay: 0.5,
            }}
            className="w-44 absolute top-[27.4rem] right-[14.6rem]"
            loading="lazy"
            src="/polygon-8.png"
            alt="polygon"
          />
        </>
      </div>
      {/* mobile-version */}
      <div
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        className=" w-full block lg:hide"
      >
        <div className="max-w-[320px] w-full h-[36rem] mx-auto relative flex lg:hidden flex-col items-center justify-center my-auto">
          <h3 className="text-[#4663AC] text-4xl text-center font-semibold">
            Rejoignez <br /> MySite
          </h3>
          <p className="text-[#6C6C6C] text-xl text-center">
            Devenez User <br /> et Proposez Votre Espace !
          </p>
          <button className="bg-[#4663AC] hover:bg-blue-950 text-white px-16 py-2 rounded-full cursor-pointer transition-all duration-300 mt-4">
            add
          </button>
          {/* top */}
          <div>
            <motion.img
              animate={isHovering ? { x: -40, y: -5 } : { x: 0, y: 0 }}
              transition={{
                duration: 1,
                ease: "easeInOut",
                repeatType: "reverse",
                repeatDelay: 1.5,
                delay: 0.5,
              }}
              className="absolute w-[2.81rem] top-4 left-24"
              loading="lazy"
              src="/polygon-5.png"
              alt="polygon"
            />
            <motion.img
              animate={isHovering ? { x: 40, y: -5 } : { x: 0, y: 0 }}
              transition={{
                duration: 1,
                ease: "easeInOut",
                repeatType: "reverse",
                repeatDelay: 1.5,
                delay: 0.5,
              }}
              className="absolute w-[4rem] top-2 left-44"
              loading="lazy"
              src="/polygon-blank-blue.png"
              alt="polygon"
            />
            <motion.img
              animate={isHovering ? { x: -30, y: 10 } : { x: 0, y: 0 }}
              transition={{
                duration: 1,
                ease: "easeInOut",
                repeatType: "reverse",
                repeatDelay: 1.5,
                delay: 0.5,
              }}
              className="absolute w-[4.5rem] top-13 left-10"
              loading="lazy"
              src="/polygon-3.png"
              alt="polygon"
            />
            <motion.img
              animate={isHovering ? { y: 10 } : { y: 0 }}
              transition={{
                duration: 1,
                ease: "easeInOut",
                repeatType: "reverse",
                repeatDelay: 1.5,
                delay: 0.5,
              }}
              className="absolute w-[5.62rem] top-13 left-[7.2rem]"
              loading="lazy"
              src="/polygon-2.png"
              alt="polygon"
            />
            <motion.img
              animate={isHovering ? { x: 40, y: 10 } : { x: 0, y: 0 }}
              transition={{
                duration: 1,
                ease: "easeInOut",
                repeatType: "reverse",
                repeatDelay: 1.5,
                delay: 0.5,
              }}
              className="absolute w-[3rem] top-16 left-[13.4rem]"
              loading="lazy"
              src="/polygon-4.png"
              alt="polygon"
            />
          </div>
          {/* bottom */}
          <div>
            <motion.img
              animate={isHovering ? { x: -30, y: -10 } : { x: 0, y: 0 }}
              transition={{
                duration: 1,
                ease: "easeInOut",
                repeatType: "reverse",
                repeatDelay: 1.5,
                delay: 0.5,
              }}
              className="absolute w-[5.2rem] bottom-13 left-[2.1rem]"
              loading="lazy"
              src="/polygon-8.png"
              alt="polygon"
            />
            <motion.img
              animate={isHovering ? { y: -10 } : { y: 0 }}
              transition={{
                duration: 1,
                ease: "easeInOut",
                repeatType: "reverse",
                repeatDelay: 1.5,
                delay: 0.5,
              }}
              className="absolute w-[3.9rem] bottom-13 left-[7.6rem]"
              loading="lazy"
              src="/polygon-4.png"
              alt="polygon"
            />
            <motion.img
              animate={isHovering ? { x: 30, y: -10 } : { x: 0, y: 0 }}
              transition={{
                duration: 1,
                ease: "easeInOut",
                repeatType: "reverse",
                repeatDelay: 1.5,
                delay: 0.5,
              }}
              className="absolute w-[5.3rem] bottom-13 left-[11.9rem]"
              loading="lazy"
              src="/polygon-9.png"
              alt="polygon"
            />
            <motion.img
              animate={isHovering ? { x: -30, y: 10 } : { x: 0, y: 0 }}
              transition={{
                duration: 1,
                ease: "easeInOut",
                repeatType: "reverse",
                repeatDelay: 1.5,
                delay: 0.5,
              }}
              className="absolute w-[5rem] -bottom-5 left-[4.6rem]"
              loading="lazy"
              src="/polygon-7.png"
              alt="polygon"
            />
            <motion.img
              animate={isHovering ? { x: 30, y: 10 } : { x: 0, y: 0 }}
              transition={{
                duration: 1,
                ease: "easeInOut",
                repeatType: "reverse",
                repeatDelay: 1.5,
                delay: 0.5,
              }}
              className="absolute w-[4rem] bottom-0 left-[10rem]"
              loading="lazy"
              src="/polygon-blank-pink.png"
              alt="polygon"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
