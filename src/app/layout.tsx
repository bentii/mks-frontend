import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "../styles/_globals.scss";
import ReactQueryClientProvider from "../api/ReactQueryClientProvider";
import ReduxProvider from "@/redux/provider";

const font = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Mks-frontend",
  description: "Mks-frontend",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactQueryClientProvider>
      <html lang="en">
        <body className={font.className} style={{paddingBottom: "50px"}}>
          <ReduxProvider>
          {children}
          </ReduxProvider>
          </body>
      </html>
    </ReactQueryClientProvider>
  );
}
