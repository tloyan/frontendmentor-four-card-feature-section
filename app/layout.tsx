import "./globals.css";
import { jsonLd } from "./jsonLd";
export { metadata } from './metadata'
import { Poppins } from "next/font/google"

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['200', '400', '600'],
  variable: "--font-poppins"
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${poppins.variable} antialiased h-full`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
