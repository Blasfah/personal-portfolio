export default function PageSection({ children }) {
  return (
    <div className="flex justify-center">
      <main className="w-full max-w-[1536px] px-[clamp(16px,4vw,64px)]">
        {children}
      </main>
    </div>
  )
}
