"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"

export default function NavBar() {
  return (
    <motion.nav
      initial={{ filter: "blur(20px)", opacity: 0 }}
      animate={{ filter: "blur(0px)", opacity: 1 }}
      transition={{ duration: 0.75 }}
      className="flex justify-between items-center"
    >
      <Link href="/#">
        <Image
          className="select-none"
          src="/logo.svg"
          width={32}
          height={32}
          alt="logo"
        />
      </Link>
      <div className="flex text-lg gap-2 items-center">
        <p>Wouter Kuyt</p>
        <div className="opacity-30">|</div>
        <p>Portfolio 2023</p>
      </div>
    </motion.nav>
  )
}
