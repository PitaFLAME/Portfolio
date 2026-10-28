import type { Metadata } from "next";
import { Inter, Allison, Poppins, Rubik, Expletus_Sans, Goudy_Bookletter_1911 } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const allison_init = Allison({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-allison',
});

const poppins_init = Poppins({

  weight: ['400', '600'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

const rubik_init = Rubik({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-rubik'
});

const expletus_sans_init = Expletus_Sans({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-expletus-sans'
});

const goudy_init = Goudy_Bookletter_1911({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-goudy'
})


export const metadata: Metadata = {
  title: "Pita - Portfolio",
  description: "Pita Sherwood's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} 
                        ${allison_init.variable} 
                        ${poppins_init.variable} 
                        ${rubik_init.variable}
                        ${expletus_sans_init.variable}
                        ${goudy_init.variable} `}>
                            {children}
      </body>
    </html>
  );
}
