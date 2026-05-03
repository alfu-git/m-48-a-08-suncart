import dns from "node:dns/promises";
dns.setServers(["8.8.8.8", "8.8.4.4"]);
import { Lora, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/navbar/Navbar";
import { ToastContainer, Zoom } from "react-toastify";
import Footer from "@/components/shared/footer/Footer";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

export const metadata = {
  title: "Suncart | Home",
  description:
    "A modern summer eCommerce platform where users can explore and purchase seasonal products like sunglasses, summer outfits, skincare, beach accessories, and more. Users can browse products, view details, and place orders after authentication",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${lora.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ToastContainer
          position="top-center"
          autoClose={3000}
          transition={Zoom}
        />
      </body>
    </html>
  );
}
