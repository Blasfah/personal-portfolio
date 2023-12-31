import "./globals.css"
import { Bricolage_Grotesque } from "next/font/google"
import Footer from "./components/Footer"

const bricolage_grotesque = Bricolage_Grotesque({ subsets: ["latin"] })

export const metadata = {
  title: "Wouter Kuyt | Portfolio",
  description: "Generated by create next app",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={bricolage_grotesque.className}>
        {children}
        <Footer />
      </body>
    </html>
  )
}
