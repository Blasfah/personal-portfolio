"use client"

import PageSection from "@/app/components/PageSection"
import NavBar from "@/app/components/NavBar"
import { motion } from "framer-motion"
import CaseCarousel from "@/app/components/CaseCarousel"

export default function ara() {
  return (
    <>
      <PageSection>
        <header className="pt-4 lg:pt-8 flex flex-col">
          <NavBar />
          <div className="h-[75svh] flex flex-col justify-evenly py-8 lg:py-16">
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
      </PageSection>
      <CaseCarousel
        href="https://www.ara.nl/nl"
        slides={[
          {
            mobile: "/images/ara_mobile_1.png",
            desktop: "/images/ara_desktop_1.png",
          },
          {
            mobile: "/images/ara_mobile_2.png",
            desktop: "/images/ara_desktop_2.png",
          },
        ]}
      />
    </>
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
