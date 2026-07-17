import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "诺德的小站", template: "%s｜诺德的小站" },
  description: "收纳个人的各种笔记以及奇奇怪怪的想法。",
  openGraph: {
    title: "诺德的小站",
    description: "收纳个人的各种笔记以及奇奇怪怪的想法",
    type: "website",
  },
  twitter: { card: "summary", title: "诺德的小站", description: "收纳个人的各种笔记以及奇奇怪怪的想法" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN" suppressHydrationWarning><body>{children}</body></html>;
}
