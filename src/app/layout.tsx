import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import { Inter } from "next/font/google";
import { Container, SSRProvider } from "@/components/boostrap";
import NavBar from "./NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Unsplaash App",
  description: "unsplash image gallery",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <SSRProvider>
          <NavBar />
          <main>
            <Container className=" py-4">{children}</Container>
          </main>
        </SSRProvider>
      </body>
    </html>
  );
}
