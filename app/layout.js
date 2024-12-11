import Navbar from "@/components/navbar";
import "./globals.css";

export const metadata = {
  title: "InstituteHub",
  description: "To manage institute activities",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="mt-16">
          {children}
        </div>
      </body>
    </html>
  );
}
