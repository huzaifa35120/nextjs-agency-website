// app/layout.tsx
import "./globals.css";

export const metadata = {
  title: "Target Bluprint — Web Agency",
  description: "Simple, fast websites for small businesses.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
