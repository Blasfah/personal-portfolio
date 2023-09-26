export default function PageSection({ children, collapse = false }) {
  return (
    <div className="flex justify-center">
      <main
        className={`w-full max-w-[1536px] ${
          collapse
            ? "sm:px-[clamp(24px,4vw,64px)]"
            : "px-[clamp(24px,4vw,64px)]"
        }`}
      >
        {children}
      </main>
    </div>
  )
}
