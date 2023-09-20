import PageSection from "./PageSection"
import Link from "next/link"
import Svg from "./Svg"

export default function Footer() {
  return (
    <footer className="pt-20 pb-8 border-t border-gray-900 mt-32">
      <PageSection>
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-y-16">
          <div className="flex flex-col">
            <p className="text-3xl">Socials</p>
            <div className="text-gray-500 mt-6 text-xl">
              <a
                href="https://github.com/Blasfah?tab=repositories"
                target="_blank"
                className="block hover:text-white transition-colors w-fit"
              >
                Github
              </a>
              <a
                href="https://www.linkedin.com/in/wouter-kuyt-b720a2225/"
                target="_blank"
                className="block hover:text-white transition-colors w-fit"
              >
                LinkedIn
              </a>
            </div>
          </div>
          <div className="flex flex-col">
            <p className="text-3xl">Contact</p>
            <div className="text-gray-500 mt-6 text-xl">
              <p>Wouterkuyt@gmail.com</p>
              <p>+31 6 33 13 67 86</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-[auto_1fr_auto] items-center mt-20 gap-4 text-gray-500 text-lg">
          <p>&copy; Wouter Kuyt</p>
          <div className="h-px w-full bg-gray-900"></div>
          <Link href="/#">
            <Svg name="logo" width={32} height={32} />
          </Link>
        </div>
      </PageSection>
    </footer>
  )
}
