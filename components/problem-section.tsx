"use client"

import { Home } from "lucide-react"
import { motion } from "framer-motion"

export function ProblemSection() {
  return (
    <section className="py-8 md:py-12 lg:py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4 md:space-y-6 mb-8 md:mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 bg-[#005DA8]/10 px-3 py-1.5 md:px-4 md:py-2 rounded-full"
          >
            <Home className="w-3 h-3 md:w-4 md:h-4 text-[#005DA8]" />
            <span className="text-xs md:text-sm font-medium text-[#005DA8]">Solução</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground text-balance"
          >
            Cansado de Alugar e da Burocracia? Sua Solução para Sair do Aluguel Está Aqui.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm md:text-lg text-muted-foreground leading-relaxed"
          >
            Muitas famílias sonham com a casa própria, mas enfrentam dificuldades com entrada alta, falta de informação
            e processos longos. Nós simplificamos isso para você.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {[
            {
              title: "Entrada Facilitada",
              description: "Use seu FGTS como entrada ou parcele em até 60 meses. Sem complicação.",
            },
            {
              title: "Parcelas Baixas",
              description: "Parcelas que cabem no seu bolso, com as menores taxas de juros do mercado.",
            },
            {
              title: "Uso do FGTS",
              description: "Utilize seu FGTS para entrada, amortização ou até para quitar o imóvel.",
            },
            {
              title: "Processo Descomplicado",
              description: "Acompanhamento completo do início ao fim. Você não fica perdido em nenhuma etapa.",
            },
          ].map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.03 }}
            >
              <BenefitCard title={benefit.title} description={benefit.description} color="bg-[#005DA8]/5" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function BenefitCard({ title, description, color }: { title: string; description: string; color: string }) {
  return (
    <div
      className={`${color} p-4 md:p-6 rounded-lg md:rounded-xl space-y-2 md:space-y-3 transition-shadow hover:shadow-lg h-full`}
    >
      <h3 className="text-sm md:text-lg font-bold text-[#004a87]">{title}</h3>
      <p className="text-xs md:text-sm text-[#005DA8]/80 leading-relaxed">{description}</p>
    </div>
  )
}
