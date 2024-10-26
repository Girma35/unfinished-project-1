import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/Footer";



export const metadata: Metadata = {
  title: "Job Hunt",
  description: " wrote By Girma Wakeyo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <meta charSet="UTF-8" />
      <meta 
      name="viewport"
       content="width=device-width, initial-scale=1.0"
       />
        <link
          rel="stylesheet"
          href="https://unpkg.com/ionicons@5.5.2/dist/css/ionicons.min.css"
        />
      </head>
      <body className="antialiased">
        <main >
        <Header />
        {children}
        <Footer />
        </main>
     
        
      </body>
    </html>
  );
}
