"use client"

import PageSection from "@/app/components/PageSection"
import NavBar from "@/app/components/NavBar"
import Image from "next/image"
import { motion } from "framer-motion"

export default function ara() {
  return (
    <PageSection>
      <header className="pt-8 flex flex-col">
        <NavBar animate={true} />
        <motion.h1
          initial={{ filter: "blur(20px)", opacity: 0 }}
          animate={{ filter: "blur(0px)", opacity: 1 }}
          transition={{ duration: 0.75 }}
          className="text-8xl font mt-48"
        >
          ARA Website
        </motion.h1>
        <section className="grid grid-cols-3 gap-8 text-2xl mt-28">
          <CaseDetail top="Role" bottom="Frontend Development" delay={0} />
          <CaseDetail top="Company" bottom="ARA" delay={0.25} />
          <CaseDetail top="Year" bottom="2023" delay={0.5} />
        </section>
      </header>
      <motion.picture
        initial={{ filter: "blur(20px)", opacity: 0, y: 200 }}
        animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.75, ease: "anticipate" }}
        className="mt-36 block aspect-video w-full relative"
      >
        <Image
          className="object-cover rounded-lg"
          src="/images/ara.jpg"
          fill={true}
        />
      </motion.picture>
    </PageSection>
  )
}

function CaseDetail({ top, bottom, delay }) {
  return (
    <div className="flex flex-col gap-4">
      <motion.p
        initial={{ filter: "blur(20px)", opacity: 0 }}
        animate={{ filter: "blur(0px)", opacity: 1 }}
        transition={{ duration: 0.75, delay }}
        className="text-gray-500 uppercase text-base"
      >
        {top}
      </motion.p>
      <motion.div
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ duration: 1.5, ease: "anticipate", delay }}
        className="h-px bg-gray-900"
      ></motion.div>
      <motion.p
        initial={{ filter: "blur(20px)", opacity: 0 }}
        animate={{ filter: "blur(0px)", opacity: 1 }}
        transition={{ duration: 0.75, delay }}
      >
        {bottom}
      </motion.p>
    </div>
  )
}
