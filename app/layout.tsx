import "./globals.css";

export const metadata = {
  title: "Israel Jan Otieno | Software Engineer",
  description: "Software Engineer and Frontend Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}