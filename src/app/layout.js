import Header from "./components/Header";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MixMaster",
  description: "Discover a world of exquisite cokctails",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <body className={inter.className}>
          <Header />
          <main>{children}</main>
        </body>
      </ThemeProvider>
    </html>
  );
}
