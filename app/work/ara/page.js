"use client"

import PageSection from "@/app/components/PageSection"
import NavBar from "@/app/components/NavBar"
import Image from "next/image"
import { motion } from "framer-motion"

export default function ara() {
  return (
    <PageSection>
      <header className="pt-4 lg:pt-8 flex flex-col">
        <NavBar />
        <div className="h-[80svh] flex flex-col justify-evenly py-8 lg:py-16">
          <motion.h1
            initial={{ filter: "blur(20px)", opacity: 0 }}
            animate={{ filter: "blur(0px)", opacity: 1 }}
            transition={{ duration: 0.75 }}
            className="text-[clamp(2rem,12vw,6rem)] font"
          >
            ARA Website
          </motion.h1>
          <section className="grid grid-rows-3 lg:grid-rows-1 grid-cols-1 lg:grid-cols-3 gap-8 text-2xl">
            <CaseDetail top="Role" bottom="Frontend Development" delay={0} />
            <CaseDetail top="Company" bottom="ARA" delay={0.25} />
            <CaseDetail top="Year" bottom="2023" delay={0.5} />
          </section>
        </div>
      </header>
      <picture>
        <motion.a
          initial={{ filter: "blur(20px)", opacity: 0, y: 200 }}
          animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.75, ease: "anticipate" }}
          className="block aspect-[2/1] relative overflow-hidden group rounded-xl"
          href="https://www.ara.nl/nl"
        >
          <Image
            className="object-cover group-hover:scale-105 duration-300 transition-transform"
            src="/images/ara.jpg"
            fill={true}
            alt="ara website"
          />
        </motion.a>
        <motion.p
          initial={{ filter: "blur(20px)", opacity: 0 }}
          animate={{ filter: "blur(0px)", opacity: 1 }}
          transition={{ duration: 0.75, delay: 2 }}
          className="text-right text-gray-500 mt-4"
        >
          Click to visit
        </motion.p>
      </picture>
      <section className="mt-32">
        <h2 className="text-3xl">My Experience</h2>
        <p className="text-gray-500 mt-6 max-w-3xl">
          When i was an intern at ARA, one of my favorite projects that i had
          the pleasure to work on was their own portfolio website. I've made
          many components on this website, like the image gallery and the text
          component on the case pages
        </p>
      </section>
    </PageSection>
  )
}

function CaseDetail({ top, bottom, delay }) {
  return (
    <div className="flex flex-col gap-2 lg:gap-4">
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
