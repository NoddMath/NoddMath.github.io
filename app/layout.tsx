import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "微光与方程", template: "%s｜微光与方程" },
  description: "在公式、直觉与世界之间写作——关于数学、物理与其他好问题的个人文章站。",
  openGraph: {
    title: "微光与方程",
    description: "在公式、直觉与世界之间写作",
    type: "website",
  },
  twitter: { card: "summary", title: "微光与方程", description: "在公式、直觉与世界之间写作" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}
