import "./globals.css";
import { Inter } from "next/font/google";

import FavIcon from "./FavIcon";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AWS Summit Toronto 2023",
  description: "Organize your schedule for the AWS Summit Toronto 2023.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <FavIcon />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
