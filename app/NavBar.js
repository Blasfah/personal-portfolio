import Image from "next/image"

export default function NavBar() {
  return (
    <nav className="flex justify-between items-center">
      <Image
        className="select-none"
        src="/logo.svg"
        width={32}
        height={32}
        alt="logo"
      />
      <div className="flex text-lg gap-2 items-center">
        <p>Wouter Kuyt</p>
        <div className="opacity-30">|</div>
        <p>Portfolio 2023</p>
      </div>
    </nav>
  )
}
