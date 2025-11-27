"use client"

import { Button } from "@/components/ui/button"
import { Home } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import { getWhatsAppLink, whatsappMessages } from "@/lib/whatsapp"

export function HeroSection() {
  return (
    <section className="relative pt-20 pb-10 md:pt-32 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0074cc] via-[#005DA8] to-[#004a87] opacity-90" />
      <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-4 md:space-y-6 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 rounded-full"
            >
              <Home className="w-3 h-3 md:w-4 md:h-4" />
              <span className="text-xs md:text-sm font-medium">Programa Minha Casa Minha Vida</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-balance"
            >
              Saia Agora do Aluguel. Conquiste seu Imovel Próprio pelo Minha Casa Minha Vida
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-sm md:text-lg lg:text-xl text-white/90 leading-relaxed"
            >
              Simulação e Aprovação de Crédito Rápida. Descubra sua elegibilidade em menos de 10 minutos!
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button
                size="lg"
                className="w-full sm:w-auto bg-white text-[#005DA8] hover:bg-white/90 font-semibold text-sm md:text-lg px-6 md:px-8 py-4 md:py-6 h-auto transition-all hover:scale-105"
                onClick={() => window.open(getWhatsAppLink(whatsappMessages.simulation), "_blank")}
              >
                Faça sua Simulação Gratuita Agora
              </Button>
            </motion.div>
          </div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative order-first lg:order-last"
          >
            <div className="relative rounded-xl md:rounded-2xl overflow-hidden shadow-2xl max-w-sm mx-auto lg:max-w-none">
              <Image
                src="/happy-brazilian-family-in-front-of-modern-apartmen.jpg"
                alt="Família feliz em frente ao novo lar"
                width={600}
                height={500}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
