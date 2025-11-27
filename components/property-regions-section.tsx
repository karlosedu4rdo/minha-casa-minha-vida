"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Bed, Bath, Maximize, MapPin } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import { getWhatsAppLink, whatsappMessages } from "@/lib/whatsapp"

type Region = "norte" | "sul" | "leste" | "oeste" | "grande-sp"

const properties = {
  norte: [
    {
      image: "/modern-apartment-building-exterior-in-brazil.jpg",
      title: "Residencial Vista Verde",
      location: "Tucuruvi, Zona Norte - SP",
      price: "R$ 189.000",
      bedrooms: 2,
      bathrooms: 1,
      area: 45,
      subsidy: "Subsídio de até R$ 55 mil",
      installment: "Parcelas a partir de R$ 580/mês",
    },
    {
      image: "/modern-townhouse-with-small-yard-in-brazil.jpg",
      title: "Condomínio Parque das Árvores",
      location: "Santana, Zona Norte - SP",
      price: "R$ 215.000",
      bedrooms: 2,
      bathrooms: 2,
      area: 52,
      subsidy: "Subsídio de até R$ 47,5 mil",
      installment: "Parcelas a partir de R$ 680/mês",
    },
    {
      image: "/affordable-apartment-complex-in-brazil.jpg",
      title: "Residencial Bela Vista",
      location: "Vila Maria, Zona Norte - SP",
      price: "R$ 175.000",
      bedrooms: 2,
      bathrooms: 1,
      area: 42,
      subsidy: "Subsídio de até R$ 55 mil",
      installment: "Parcelas a partir de R$ 520/mês",
    },
  ],
  sul: [
    {
      image: "/modern-affordable-housing-complex-brazil.jpg",
      title: "Condomínio Jardim Feliz",
      location: "Grajaú, Zona Sul - SP",
      price: "R$ 198.000",
      bedrooms: 3,
      bathrooms: 1,
      area: 48,
      subsidy: "Subsídio de até R$ 47,5 mil",
      installment: "Parcelas a partir de R$ 620/mês",
    },
    {
      image: "/new-apartment-building-with-balcony-brazil.jpg",
      title: "Residencial Horizonte",
      location: "Capão Redondo, Zona Sul - SP",
      price: "R$ 182.000",
      bedrooms: 2,
      bathrooms: 1,
      area: 44,
      subsidy: "Subsídio de até R$ 55 mil",
      installment: "Parcelas a partir de R$ 550/mês",
    },
    {
      image: "/affordable-housing-development-brazil.jpg",
      title: "Residencial Primavera",
      location: "Jardim Ângela, Zona Sul - SP",
      price: "R$ 169.000",
      bedrooms: 2,
      bathrooms: 1,
      area: 40,
      subsidy: "Subsídio de até R$ 55 mil",
      installment: "Parcelas a partir de R$ 490/mês",
    },
  ],
  leste: [
    {
      image: "/modern-apartment-building-exterior-in-brazil.jpg",
      title: "Residencial Parque do Sol",
      location: "Itaquera, Zona Leste - SP",
      price: "R$ 192.000",
      bedrooms: 2,
      bathrooms: 1,
      area: 46,
      subsidy: "Subsídio de até R$ 55 mil",
      installment: "Parcelas a partir de R$ 595/mês",
    },
    {
      image: "/modern-townhouse-with-small-yard-in-brazil.jpg",
      title: "Condomínio Vila Nova",
      location: "São Miguel, Zona Leste - SP",
      price: "R$ 178.000",
      bedrooms: 2,
      bathrooms: 1,
      area: 43,
      subsidy: "Subsídio de até R$ 55 mil",
      installment: "Parcelas a partir de R$ 540/mês",
    },
    {
      image: "/affordable-apartment-complex-in-brazil.jpg",
      title: "Residencial Estrela",
      location: "Ermelino Matarazzo, Zona Leste - SP",
      price: "R$ 185.000",
      bedrooms: 2,
      bathrooms: 1,
      area: 44,
      subsidy: "Subsídio de até R$ 55 mil",
      installment: "Parcelas a partir de R$ 565/mês",
    },
  ],
  oeste: [
    {
      image: "/modern-affordable-housing-complex-brazil.jpg",
      title: "Condomínio Bela Vista",
      location: "Pirituba, Zona Oeste - SP",
      price: "R$ 205.000",
      bedrooms: 2,
      bathrooms: 2,
      area: 50,
      subsidy: "Subsídio de até R$ 47,5 mil",
      installment: "Parcelas a partir de R$ 650/mês",
    },
    {
      image: "/new-apartment-building-with-balcony-brazil.jpg",
      title: "Residencial Jardim das Flores",
      location: "Jaguaré, Zona Oeste - SP",
      price: "R$ 195.000",
      bedrooms: 2,
      bathrooms: 1,
      area: 47,
      subsidy: "Subsídio de até R$ 55 mil",
      installment: "Parcelas a partir de R$ 600/mês",
    },
    {
      image: "/affordable-housing-development-brazil.jpg",
      title: "Residencial Parque Verde",
      location: "Raposo Tavares, Zona Oeste - SP",
      price: "R$ 188.000",
      bedrooms: 2,
      bathrooms: 1,
      area: 45,
      subsidy: "Subsídio de até R$ 55 mil",
      installment: "Parcelas a partir de R$ 575/mês",
    },
  ],
  "grande-sp": [
    {
      image: "/modern-apartment-building-exterior-in-brazil.jpg",
      title: "Residencial Horizonte Azul",
      location: "Guarulhos - Grande SP",
      price: "R$ 175.000",
      bedrooms: 2,
      bathrooms: 1,
      area: 42,
      subsidy: "Subsídio de até R$ 55 mil",
      installment: "Parcelas a partir de R$ 520/mês",
    },
    {
      image: "/modern-townhouse-with-small-yard-in-brazil.jpg",
      title: "Condomínio Família Feliz",
      location: "Osasco - Grande SP",
      price: "R$ 182.000",
      bedrooms: 2,
      bathrooms: 1,
      area: 44,
      subsidy: "Subsídio de até R$ 55 mil",
      installment: "Parcelas a partir de R$ 550/mês",
    },
    {
      image: "/affordable-apartment-complex-in-brazil.jpg",
      title: "Residencial Campo Verde",
      location: "Mauá - Grande SP",
      price: "R$ 169.000",
      bedrooms: 2,
      bathrooms: 1,
      area: 40,
      subsidy: "Subsídio de até R$ 55 mil",
      installment: "Parcelas a partir de R$ 490/mês",
    },
  ],
}

const regionNames = {
  norte: "Zona Norte",
  sul: "Zona Sul",
  leste: "Zona Leste",
  oeste: "Zona Oeste",
  "grande-sp": "Grande SP",
}

export function PropertyRegionsSection() {
  const [selectedRegion, setSelectedRegion] = useState<Region>("norte")

  return (
    <section id="properties-section" className="py-8 md:py-12 lg:py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-3 md:space-y-4 mb-6 md:mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground text-balance"
          >
            Encontre o Imóvel Perfeito para Você
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-sm md:text-lg text-muted-foreground"
          >
            Selecione a região de interesse e confira as melhores opções
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex gap-2 md:gap-4 mb-6 md:mb-12 overflow-x-auto pb-2 md:pb-0 md:flex-wrap md:justify-center scrollbar-hide"
        >
          {(Object.keys(regionNames) as Region[]).map((region) => (
            <Button
              key={region}
              onClick={() => setSelectedRegion(region)}
              size="default"
              variant={selectedRegion === region ? "default" : "outline"}
              className={`flex-shrink-0 text-xs md:text-base px-3 md:px-6 py-2 md:py-3 transition-all hover:scale-105 ${
                selectedRegion === region
                  ? "bg-[#005DA8] hover:bg-[#004a87] text-white"
                  : "border-[#005DA8] text-[#005DA8] hover:bg-[#005DA8]/5"
              }`}
            >
              {regionNames[region]}
            </Button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 max-w-7xl mx-auto">
          {properties[selectedRegion].map((property, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <PropertyCard {...property} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function PropertyCard({
  image,
  title,
  location,
  price,
  bedrooms,
  bathrooms,
  area,
  subsidy,
  installment,
}: {
  image: string
  title: string
  location: string
  price: string
  bedrooms: number
  bathrooms: number
  area: number
  subsidy: string
  installment: string
}) {
  return (
    <div className="group relative bg-card border-2 border-border rounded-xl md:rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300">
      <div className="relative h-40 md:h-48 overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      <div className="p-4 md:p-6 space-y-3 md:space-y-4">
        <div className="space-y-1 md:space-y-2">
          <h3 className="text-base md:text-xl font-bold text-card-foreground group-hover:text-[#005DA8] transition-colors line-clamp-1">
            {title}
          </h3>
          <div className="flex items-start gap-1.5 md:gap-2 text-xs md:text-sm text-muted-foreground">
            <MapPin className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0 mt-0.5" />
            <span className="line-clamp-1">{location}</span>
          </div>
        </div>

        <div className="flex items-center gap-3 md:gap-4 py-2 md:py-3 border-y border-border">
          <div className="flex items-center gap-1">
            <Bed className="w-3 h-3 md:w-4 md:h-4 text-muted-foreground" />
            <span className="text-xs md:text-sm font-medium">{bedrooms}</span>
          </div>
          <div className="flex items-center gap-1">
            <Bath className="w-3 h-3 md:w-4 md:h-4 text-muted-foreground" />
            <span className="text-xs md:text-sm font-medium">{bathrooms}</span>
          </div>
          <div className="flex items-center gap-1">
            <Maximize className="w-3 h-3 md:w-4 md:h-4 text-muted-foreground" />
            <span className="text-xs md:text-sm font-medium">{area}m²</span>
          </div>
        </div>

        <div className="space-y-1 md:space-y-2">
          <div className="text-lg md:text-2xl font-bold text-[#005DA8]">{price}</div>
          <div className="text-[10px] md:text-xs text-muted-foreground space-y-0.5 md:space-y-1">
            <p>{subsidy}</p>
            <p className="font-medium text-card-foreground">{installment}</p>
          </div>
        </div>

        <Button
          className="w-full bg-[#005DA8] hover:bg-[#004a87] text-white transition-all hover:scale-105 text-xs md:text-sm py-2 md:py-2.5"
          onClick={() => window.open(getWhatsAppLink(whatsappMessages.property(title)), "_blank")}
        >
          Falar com Especialista
        </Button>
      </div>
    </div>
  )
}
