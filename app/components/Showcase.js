"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

export default function Showcase({ href, src, title }) {
  return (
    <motion.div
      initial={{ filter: "blur(20px)", opacity: 0 }}
      whileInView={{ filter: "blur(0px)", opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-[3fr_2fr] gap-12"
    >
      <div className="relative h-[50vh]">
        <Link href={href} className="group">
          <Image
            className="object-cover object-center rounded-lg"
            src={src}
            fill={true}
          />
        </Link>
      </div>
      <div className="flex items-end font-bold text-8xl pl-12">
        <p className="uppercase text-left">{title}</p>
      </div>
    </motion.div>
  )
}
