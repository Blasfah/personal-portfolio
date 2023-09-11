"use client"

import { motion } from "framer-motion"

export default function Hero() {
  return (
    <div className="flex items-center my-4 lg:my-8 relative overflow-hidden">
      <h1 className="text-[clamp(2rem,4vw,3.75rem)] flex flex-col text-stroke leading-snug px-4 xs:px-8 lg:px-16">
        <motion.p
          initial={{ filter: "blur(20px)", opacity: 0 }}
          animate={{ filter: "blur(0px)", opacity: 1 }}
          transition={{ duration: 0.75 }}
        >
          With an eye for pixel perfection,
        </motion.p>
        <motion.p
          initial={{ filter: "blur(20px)", opacity: 0 }}
          animate={{ filter: "blur(0px)", opacity: 1 }}
          transition={{ duration: 0.75, delay: 1.5 }}
        >
          I'm Wouter Kuyt, your frontend artisan.
        </motion.p>
      </h1>
      <motion.div
        initial={{ y: -200 }}
        animate={{ y: 0 }}
        transition={{ ease: "circOut", duration: 2 }}
        className="absolute bg-purple-500 w-[50vw] h-[50px] rounded-[100%] -top-10 blur-3xl"
      ></motion.div>
      <motion.div
        initial={{ y: 150 }}
        animate={{ y: 0 }}
        transition={{ ease: "circOut", duration: 2, delay: 1.25 }}
        className="absolute bg-red-500 w-[25vw] h-[25px] rounded-[100%] -bottom-6 right-6 blur-3xl"
      ></motion.div>
    </div>
  )
}
