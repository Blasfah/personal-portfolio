import Link from "next/link"

export default function SelectedWorks() {
  return (
    <section className="py-8 mt-24">
      <h2 className="text-5xl">Selected Works</h2>
      <div className="mt-10">
        <ul className="divide-y border-y border-x xs:border-x-0 border-gray-900 divide-gray-900">
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
            disabled
          />
          <ShowcaseItem
            href="/#"
            title="Varrati"
            position="Frontend Development"
            year={2022}
            disabled
          />
          <ShowcaseItem
            href="/#"
            title="Manus Skulls"
            position="Frontend Development / UI Design"
            year={2022}
            disabled
          />
        </ul>
      </div>
    </section>
  )
}

function ShowcaseItem({ title, position, year, href, disabled }) {
  return (
    <li className="text-2xl">
      <Link
        href={href}
        className="p-6 flex flex-col xs:grid grid-rows-2 lg:grid-rows-1 grid-cols-[1fr_auto] lg:grid-cols-[1fr_1fr_auto] xs:items-center hover:bg-gray-200 hover:text-black duration-300 relative overflow-hidden"
      >
        <div className="row-start-1 flex gap-2 items-baseline">
          <p className={`${disabled && "text-gray-500 line-through"}`}>
            {title}
          </p>
          {disabled && (
            <span className="text-white text-lg"> Coming soon!</span>
          )}
        </div>
        <p className="text-lg row-start-2 lg:row-start-1 text-gray-500">
          {position}
        </p>
        <p className="text-lg xs:row-start-2 lg:row-start-1 text-gray-500">
          {year}
        </p>
      </Link>
    </li>
  )
}
