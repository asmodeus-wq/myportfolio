import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <title>Pratyush Rajpoot | Portfolio</title>
        <meta name="description" content="AI Media Engineer & Automation Developer portfolio" />
      </head>
      <body>{children}</body>
    </html>
  );
}
