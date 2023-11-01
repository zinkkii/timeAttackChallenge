import { Inter, Kanit } from "next/font/google";
import "./globals.css";
import Layout from "./layouts/Layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TimeAttackChallenge",
  description: "Hello~WelcomeToTimeAttackChallenge~",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <Layout children={children} />
      </body>
    </html>
  );
}
