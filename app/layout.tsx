import "./globals.css";

export const metadata = {
  title: "Israel Jan | Systems, Technology & Operations",
  description:
    "Israel Jan — Software Engineering, Digital Systems, Automation and Operations.",
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
