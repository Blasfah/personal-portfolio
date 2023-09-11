import PageSection from "./PageSection"
import Link from "next/link"
import Svg from "./Svg"

export default function Footer() {
  return (
    <footer className="pt-16 pb-8 border-t border-gray-900 mt-32">
      <PageSection>
        <div className="flex flex-col">
          <p className="text-3xl">Find me on</p>
          <div className="text-gray-500 mt-6 text-xl">
            <p>Github</p>
            <p>LinkedIn</p>
            <p>Codepen</p>
          </div>
        </div>
        <div className="grid grid-cols-[auto_1fr_auto] items-center mt-20 gap-4 text-gray-500 text-lg">
          <p>Wouter Kuyt 2023</p>
          <div className="h-px w-full bg-gray-900"></div>
          <Link href="/#">
            <Svg name="logo" width={32} height={32} />
          </Link>
        </div>
      </PageSection>
    </footer>
  )
}
