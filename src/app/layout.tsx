import type { Metadata } from "next";
import "./css/globals.css";
import { Anton, Inter, Poppins } from "next/font/google";
import Script from "next/script";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Profissão do Século 2.0 | Aprenda a Gerar Renda Extra Online",
  description:
    "Descubra como gerar renda extra online com tarefas simples, sem vender produtos ou aparecer. Aprenda um método prático, ideal para iniciantes, e comece ainda hoje com o eBook Profissão do Século 2.0.",
  keywords: [
    "renda extra online",
    "ganhar dinheiro na internet",
    "profissão do século",
    "profissão do século 2.0",
    "renda online para iniciantes",
    "ganhar dinheiro sem aparecer",
    "ganhar dinheiro sem vender",
    "trabalhar pela internet",
    "tarefas online pagas",
    "renda extra pelo celular",
    "como ganhar dinheiro online",
    "ebook renda extra",
    "método para ganhar dinheiro online",
    "renda extra em casa",
    "trabalho remoto simples",
    "aplicativos que pagam",
    "plataformas confiáveis para renda extra",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script id="gtm" strategy="afterInteractive">
          {`(function (w, d, s, l, i) {
            w[l] = w[l] || [];
            w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
            var f = d.getElementsByTagName(s)[0],
              j = d.createElement(s),
              dl = l != "dataLayer" ? "&l=" + l : "";
            j.async = true;
            j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
            f.parentNode.insertBefore(j, f);
          })(window, document, "script", "dataLayer", "GTM-MFG99Z4Q");`}
        </Script>
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} ${anton.variable} antialiased w-full bg-background overflow-x-hidden`}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MFG99Z4Q"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {children}
      </body>
    </html>
  );
}
