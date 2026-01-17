import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GameStateProvider } from "./context/GameStateContext";
import { GameShell } from "./components/layout/GameShell";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CodeQuest",
  description: "Gamified Programming Mastery",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GameStateProvider>
          <GameShell>
            {children}
          </GameShell>
        </GameStateProvider>
      </body>
    </html>
  );
}
