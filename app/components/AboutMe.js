import Svg from "./Svg"
import Link from "next/link"

export default function AboutMe() {
  return (
    <section className="py-8 mt-24">
      <h2 className="text-5xl">About Me</h2>
      <div className="text-lg text-gray-500 mt-10 max-w-3xl flex flex-col gap-6">
        <p>
          I'm frontend developer based in the Netherlands with a passion for
          precision and design. I specialize in crafting visually appealing
          frontends that make both users and developers happy.
        </p>
        <p>
          I can work with{" "}
          <IconSpan name="react" text="React" href="https://react.dev/" /> and{" "}
          <IconSpan name="vue" text="Vue" href="https://vuejs.org/" />, using{" "}
          <IconSpan name="next-js" text="Next.js" href="https://nextjs.org/" />{" "}
          as a meta-framework. For styling, I use{" "}
          <IconSpan
            name="tailwindcss"
            text="TailwindCSS"
            href="https://tailwindcss.com/"
          />{" "}
          but can also handle CSS and SCSS. When it comes to animations, I use{" "}
          <IconSpan
            name="framer-motion"
            text="Framer Motion"
            href="https://www.framer.com/motion/"
          />{" "}
          for awesome animations.
        </p>
      </div>
    </section>
  )
}

function IconSpan({ name, href, text }) {
  return (
    <a href={href} target="_blank" className="inline-flex gap-1 text-white">
      <span className="self-center">
        <Svg name={name} width={16} height={16} />
      </span>
      <span className="self-baseline">{text}</span>
    </a>
  )
}
