"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Svg from "./Svg"

export default function NavBar() {
  return (
    <motion.nav
      initial={{ filter: "blur(20px)", opacity: 0 }}
      animate={{ filter: "blur(0px)", opacity: 1 }}
      transition={{ duration: 0.75 }}
      className="flex justify-between items-center"
    >
      <Link href="/#">
        <Svg name="logo" width={32} height={32} />
      </Link>
      <div className="flex text-lg gap-2 items-center">
        <p>Wouter Kuyt</p>
        <div className="opacity-30">|</div>
        <p>Portfolio 2023</p>
      </div>
    </motion.nav>
  )
}
