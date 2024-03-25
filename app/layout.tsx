//importing the global.css file...
import '@/app/ui/global.css';
//importing the new font...
import { inter } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*using the font, so that it will be applied throughout the application...antialiased is a Tailwing class which
      smooths out the font. It is optional, but antialiased adds a nice touch...*/}
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
