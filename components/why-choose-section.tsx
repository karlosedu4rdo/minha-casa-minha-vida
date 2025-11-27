"use client"

import type React from "react"
import { Shield, Award, Calculator, Home } from "lucide-react"
import { motion } from "framer-motion"

export function WhyChooseSection() {
  const features = [
    {
      icon: <Home className="w-6 h-6 md:w-8 md:h-8 text-[#005DA8]" />,
      title: "Foco Total no MCMV",
      description:
        "Somos especialistas nos critérios e nas melhores oportunidades do programa Minha Casa Minha Vida. Seu processo sem erros e com a máxima economia.",
    },
    {
      icon: <Shield className="w-6 h-6 md:w-8 md:h-8 text-[#005DA8]" />,
      title: "Segurança e Qualidade",
      description:
        "Trabalhamos apenas com construtoras renomadas e imóveis que cumprem rigorosos padrões de qualidade e documentação, dentro do programa.",
    },
    {
      icon: <Calculator className="w-6 h-6 md:w-8 md:h-8 text-[#005DA8]" />,
      title: "Análise de Crédito Gratuita",
      description:
        "Realizamos uma análise completa e sem compromisso para você saber exatamente o valor que pode financiar e o subsídio que tem direito.",
    },
    {
      icon: <Award className="w-6 h-6 md:w-8 md:h-8 text-[#005DA8]" />,
      title: "Processos Simplificados",
      description:
        "Cuidamos de toda a burocracia para você. Da documentação à aprovação, tudo é feito de forma rápida e transparente.",
    },
    {
      icon: <Home className="w-6 h-6 md:w-8 md:h-8 text-[#005DA8]" />,
      title: "Imóveis Novos e Prontos",
      description:
        "Oferecemos opções de imóveis em construção e prontos para morar, em condomínios com infraestrutura completa.",
    },
    {
      icon: <Shield className="w-6 h-6 md:w-8 md:h-8 text-[#005DA8]" />,
      title: "Suporte Completo",
      description:
        "Nossa equipe te acompanha em cada etapa, desde a primeira visita até a entrega das chaves do seu novo lar.",
    },
  ]

  return (
    <section className="py-8 md:py-12 lg:py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-3 md:space-y-4 mb-8 md:mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-[#005DA8]/10 px-3 py-1.5 md:px-4 md:py-2 rounded-full"
          >
            <Home className="w-3 h-3 md:w-4 md:h-4 text-[#005DA8]" />
            <span className="text-xs md:text-sm font-medium text-[#005DA8]">Vantagens</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground text-balance"
          >
            Por que Conquistar sua Casa Própria Conosco é a Melhor Decisão
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <FeatureCard icon={feature.icon} title={feature.title} description={feature.description} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-card border border-border rounded-lg md:rounded-xl p-4 md:p-6 space-y-3 md:space-y-4 hover:shadow-lg transition-all h-full">
      <div className="w-10 h-10 md:w-14 md:h-14 bg-[#005DA8]/10 rounded-lg flex items-center justify-center">
        {icon}
      </div>
      <h3 className="text-base md:text-xl font-bold text-card-foreground">{title}</h3>
      <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{description}</p>
    </div>
  )
}
