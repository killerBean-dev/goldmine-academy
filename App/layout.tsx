// app/layout.tsx
import './globals.css';

export const metadata = {
  title: 'GoldMine Academy',
  description: 'Earn by learning tech & finance',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}
