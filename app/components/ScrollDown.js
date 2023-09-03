"use client"

import { motion } from "framer-motion"
import Svg from "./Svg"

export default function ScrollDown() {
  return (
    <motion.div
      initial={{ filter: "blur(20px)", opacity: 0 }}
      animate={{ filter: "blur(0px)", opacity: 1 }}
      transition={{ duration: 0.75, delay: 3 }}
      className="flex justify-end gap-2 items-center text-gray-500 pointer-events-none select-none mt-auto"
    >
      <div className="overflow-hidden">
        <motion.div
          initial={{ y: "-100%" }}
          animate={{ y: ["-100%", "100%"] }}
          transition={{
            repeat: "infinite",
            ease: "circInOut",
            duration: 1.5,
            delay: 0.5,
          }}
        >
          <Svg name="arrow-down" width={32} height={32} />
        </motion.div>
      </div>
      <p className="text-xl">Scroll To Explore</p>
    </motion.div>
  )
}
