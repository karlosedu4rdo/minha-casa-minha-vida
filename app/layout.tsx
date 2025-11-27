import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Simulação Minha Casa Minha Vida | Aprovação de Crédito Rápida",
  description: "Saia do aluguel hoje! Casas e Apartamentos pelo programa Minha Casa Minha Vida com subsídio de até R$ 55 mil. Faça sua simulação gratuita agora.",
  keywords: ["minha casa minha vida", "mcmv", "apartamento financiado", "subsídio habitacional", "caixa econômica"],
  openGraph: {
    title: "Simule seu Financiamento Minha Casa Minha Vida",
    description: "Descubra quanto de subsídio você tem direito em menos de 2 minutos.",
    images: ["/happy-brazilian-family-in-front-of-modern-apartmen.jpg"], // Imagem para quando compartilharem no WhatsApp
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              name: "Kako - MCMV",
              description:
                "Especialistas em aprovação de crédito para o programa Minha Casa Minha Vida. Conquiste sua casa própria com nossa ajuda.",
              url: "https://www.seusite.com.br", // TODO: Trocar pela URL final do site
              logo: "https://www.seusite.com.br/placeholder-logo.png", // TODO: Trocar pela URL do logo
              telephone: "+55-11-99999-9999", // TODO: Trocar pelo telefone de contato
              address: {
                "@type": "PostalAddress",
                streetAddress: "Avenida Paulista, 1000",
                addressLocality: "São Paulo",
                addressRegion: "SP",
                postalCode: "01310-100",
                addressCountry: "BR",
              },
              priceRange: "$$", // Faixa de preço (ex: $$ para moderado)
              hasMap: "https://goo.gl/maps/example", // TODO: Link para o Google Maps se houver um escritório
              openingHours: "Mo,Tu,We,Th,Fr 09:00-18:00", // Horário de funcionamento
            }),
          }}
        />
      </body>
    </html>
  )
}
