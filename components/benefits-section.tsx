"use client"

import { CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { getWhatsAppLink, whatsappMessages } from "@/lib/whatsapp"

export function BenefitsSection() {
  return (
    <section className="py-8 md:py-12 lg:py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left - Visual */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative rounded-xl md:rounded-2xl overflow-hidden bg-gradient-to-br from-[#003d6b] via-[#005DA8] to-[#0074cc] p-5 md:p-8 lg:p-12 shadow-2xl"
            >
              <div className="space-y-4 md:space-y-6 text-white">
                <h3 className="text-lg md:text-2xl lg:text-3xl font-bold">Os números que importam</h3>
                <div className="space-y-3 md:space-y-4">
                  {[
                    "Simulação em Minutos",
                    "Menor Taxa de Juros",
                    "Subsídio do Governo",
                    "Acompanhamento Especializado",
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-center gap-2 md:gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />
                      <span className="text-sm md:text-lg">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4 md:space-y-6 order-1 lg:order-2"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground">
              Financiamento Aprovado e Sem Complicações.
            </h2>

            <p className="text-sm md:text-xl text-foreground font-semibold leading-relaxed">
              Enquanto outros te oferecem burocracia, você terá a{" "}
              <span className="text-[#005DA8]">Simplicidade e Segurança</span> para realizar o sonho da sua casa com os{" "}
              <span className="text-[#005DA8]">benefícios do Minha Casa Minha Vida</span>.
            </p>

            <ul className="space-y-3 md:space-y-4">
              {[
                {
                  title: "Simulação em Minutos",
                  description: "Saiba quanto você pode financiar rapidamente.",
                },
                {
                  title: "Menor Taxa de Juros",
                  description: "Garantida pelo programa MCMV.",
                },
                {
                  title: "Subsídio do Governo",
                  description: "Reduza o valor do seu financiamento.",
                },
                {
                  title: "Acompanhamento Especializado",
                  description: "Do primeiro contato à entrega das chaves.",
                },
                {
                  title: "Imóveis em Condomínios",
                  description: "Segurança, lazer e qualidade de vida.",
                },
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-2 md:gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-[#005DA8] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground text-sm md:text-base">{item.title}</p>
                    <p className="text-muted-foreground text-xs md:text-sm">{item.description}</p>
                  </div>
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Button
                size="lg"
                className="w-full sm:w-auto bg-[#005DA8] hover:bg-[#004a87] text-white font-semibold px-6 md:px-8 text-sm md:text-base transition-all hover:scale-105"
                onClick={() => window.open(getWhatsAppLink(whatsappMessages.subsidy), "_blank")}
              >
                Descubra seu Subsídio Agora
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
