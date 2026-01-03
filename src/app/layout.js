import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import WhatsAppButton from "@/components/whatsapp-button"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata = {
  title: "MY Consultants & Advisors",
  description: "Professional business consulting services to help your company grow and succeed.",

  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  )
}
