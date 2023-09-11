import Link from "next/link"

export default function SelectedWorks() {
  return (
    <section className="py-8 mt-24">
      <h2 className="text-5xl">Selected Works</h2>
      <div className="mt-10">
        <ul className="divide-y border-y border-gray-900 divide-gray-900">
          <ShowcaseItem
            href="/work/ara"
            title="ARA"
            position="Frontend Development"
            year={2022}
          />
          <ShowcaseItem
            href="/#"
            title="Experto"
            position="Frontend Development"
            year={2022}
          />
          <ShowcaseItem
            href="/#"
            title="Varrati"
            position="Frontend Development"
            year={2022}
          />
          <ShowcaseItem
            href="/#"
            title="Manus Skulls"
            position="Frontend Development / UI Design"
            year={2022}
          />
        </ul>
      </div>
    </section>
  )
}

function ShowcaseItem({ title, position, year, href }) {
  return (
    <li className="text-2xl">
      <Link
        href={href}
        className="p-6 grid grid-cols-[1fr_1fr_auto] items-center hover:bg-gray-950 transition-color duration-300 relative overflow-hidden group"
      >
        <div className="group-hover:bg-blue-500 w-[15vw] h-3 blur-3xl absolute top-0 left-0 transition-color duration-300"></div>
        <p className="z-10">{title}</p>
        <p className="text-lg text-gray-500">{position}</p>
        <p className="text-lg text-gray-500">{year}</p>
      </Link>
    </li>
  )
}
