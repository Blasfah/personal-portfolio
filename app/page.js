import PageSection from "./PageSection"
import NavBar from "./NavBar"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <PageSection>
      <header className="h-[100dvh] py-4">
        <NavBar />
        <h1 className="font-light text-6xl mt-56">
          With an eye for pixel perfection,
          <br />
          I'm <span className="font-bold">Wouter Kuyt</span>, your frontend
          artisan.
        </h1>
      </header>
      <section className="py-52 flex flex-col gap-52">
        <Showcase
          title="ara website"
          href="#"
          src="/images/ara.jpg"
          style="left"
        />
        <Showcase
          title="experto"
          href="#"
          src="/images/experto.jpg"
          style="right"
        />
        <Showcase
          title="varrati"
          href="#"
          src="/images/varrati.jpg"
          style="left"
        />
      </section>
    </PageSection>
  )
}

function Showcase({ href, style, src, title }) {
  return (
    <>
      {style === "left" && (
        <div className="grid grid-cols-[2fr_auto_3fr] gap-12">
          <div className="flex justify-end items-end font-bold text-8xl">
            <p className="uppercase text-right">{title}</p>
          </div>
          <div className="w-px bg-gray-900"></div>
          <div className="relative h-[50vh]">
            <Link href={href} className="group">
              <Image
                className="object-cover object-center rounded-lg group-hover:brightness-50 transition-all"
                src={src}
                fill={true}
              />
            </Link>
          </div>
        </div>
      )}
      {style === "right" && (
        <div className="grid grid-cols-[3fr_auto_2fr] gap-12">
          <div className="relative h-[50vh]">
            <Link href={href} className="group">
              <Image
                className="object-cover object-center rounded-lg group-hover:brightness-50 transition-all"
                src={src}
                fill={true}
              />
            </Link>
          </div>
          <div className="w-px bg-gray-900"></div>
          <div className="flex items-end font-bold text-8xl">
            <p className="uppercase text-left">{title}</p>
          </div>
        </div>
      )}
    </>
  )
}

{
  /* <section className="grid grid-cols-3 gap-6 font-bold text-5xl">
            <LinkBox
              href="#"
              className="group-hover:bg-gradient-to-t from-blue-500 to-blue-700"
            >
              My Work
            </LinkBox>
            <LinkBox
              href="#"
              className="group-hover:bg-gradient-to-t from-red-500 to-red-700"
            >
              About Me
            </LinkBox>
            <LinkBox
              href="#"
              className="group-hover:bg-gradient-to-t from-green-500 to-green-700"
            >
              Contact Me
            </LinkBox>
          </section> */
}

// function LinkBox({ href, className, children }) {
//   return (
//     <Link href={href}>
//       <div className="border-2 rounded-2xl p-2 group hover:translate-y-1 transition-transform">
//         <div
//           className={`p-4 pt-1 rounded-lg group-hover:text-black ${className}`}
//         >
//           <div className="flex justify-end">
//             <Svg name="arrow-right" />
//           </div>
//           <p className="mt-20">{children}</p>
//         </div>
//       </div>
//     </Link>
//   )
// }

{
  /* <section className="grid grid-cols-2 text-gray-500 mt-40 border-y border-gray-900">
          <p
            className="col-start-2 p-8 border-l border-gray-900"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
          >
            Frontend development isnt just a job for me, I always pour my soul
            into the pages that i build. A passionate developer will always
            deliver the best that they can and so do I. Fuck yeah that sounds so
            smart.
          </p>
        </section> */
}
