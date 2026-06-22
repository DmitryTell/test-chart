import "./global.css";

export const metadata = {
  title: "Analytics Dashboard",
  description: "Time-series data visualization",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className="antialiased bg-slate-950 text-slate-50">{children}</body>
    </html>
  );
}
