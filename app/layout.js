import "./globals.css";

export const metadata = {
  title: "CloudPixel Web | Professional Web Development",
  description:
    "CloudPixel Web provides modern, scalable web development solutions. Independent freelance web developer specializing in frontend, full-stack, and cloud-ready applications.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-b from-[#0E0E10] to-[#111113] text-white">
        {children}
      </body>
    </html>
  );
}
