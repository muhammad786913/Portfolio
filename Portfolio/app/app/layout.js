import "./globals.css";

export const metadata = {
  title: "MUHAMMAD | Web Developer",
  description: "MUHAMMAD - Modern Web Developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}