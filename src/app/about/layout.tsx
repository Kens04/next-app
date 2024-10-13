import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | ともすた",
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
