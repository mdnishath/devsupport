import localFont from "next/font/local";
import "./globals.css";
import { ChildProps } from "@/types";
import Header from "@/components/partials/Header";
// import Footer from "@/components/partials/Footer";
import Provider from "@/providers/Provider";
import StaticBg from "@/components/ui/StaticBg";
import WhatsAppChatButton from "@/components/ui/WhatsAppChatButton";
import Lightning from "@/components/ui/Lightning";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({ children }: ChildProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden bg-dark text-white`}
      >
        <Provider>
          <StaticBg>
            <Lightning />
            <Header />
            <main className="flex-grow w-full max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 z-[100]">
              {children}
            </main>
            {/* <Footer /> */}
          </StaticBg>
          <WhatsAppChatButton />
        </Provider>
      </body>
    </html>
  );
}
