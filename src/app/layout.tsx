import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Creative Portfolio - Brutalist Design",
  description: "A brutalist portfolio website showcasing creative works, projects, and ideas with energetic and vibrant design.",
  keywords: ["portfolio", "brutalism", "web design", "creative", "projects", "Next.js", "TypeScript"],
  authors: [{ name: "Creative Developer" }],
  icons: {
    icon: "https://z-cdn.chatglm.cn/z-ai/static/logo.svg",
  },
  openGraph: {
    title: "Creative Portfolio - Brutalist Design",
    description: "A brutalist portfolio website showcasing creative works, projects, and ideas",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Creative Portfolio - Brutalist Design",
    description: "A brutalist portfolio website showcasing creative works, projects, and ideas",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground min-h-screen flex flex-col`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
