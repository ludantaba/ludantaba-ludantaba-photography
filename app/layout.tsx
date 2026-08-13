import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LUDANTABA · 摄影作品集",
  description:
    "LUDANTABA 的风景摄影作品集——山川、海岸、森林与城市，用镜头收藏旅途中的光与风。",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
