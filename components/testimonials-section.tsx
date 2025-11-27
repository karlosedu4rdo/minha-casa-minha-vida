"use client"

import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import { getWhatsAppLink, whatsappMessages } from "@/lib/whatsapp"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Jéssica e Thiago Souza",
      location: "Itaquera, São Paulo",
      image: "/jessica-e-thiago.jpg",
      testimonial:
        "A gente pagava R$ 1.300 de aluguel num quarto e sala na Penha. Achava que nunca ia sobrar dinheiro pra entrada. A equipe mostrou que dava pra usar nosso FGTS somado. Hoje pagamos R$ 890 na nossa parcela e o apê é nosso! Melhor coisa foi sair do aluguel.",
      rating: 5,
    },
    {
      name: "Marcos Vinícius",
      location: "Grajau, São Paulo",
      image: "/marcos-vinicius.jpg",
      testimonial:
        "Sou motorista de app e o que me ganhou foi a segurança. Criar meus dois filhos soltos na rua tava difícil. Aqui no condomínio eles brincam no parquinho e eu trabalho tranquilo. E a parcela ficou menor que o aluguel que eu pagava no Jd. Ângela.",
      rating: 5,
    },
    {
      name: "Família Ribeiro",
      location: "Grande SP, São Paulo",
      image: "/familia-ribeiro.jpg",
      testimonial:
        "Em SP capital a gente só achava apartamento muito pequeno. Em Osasco conseguimos um de 2 dormitórios com varanda pelo mesmo preço. O financiamento aprovou em 24 horas, foi muito rápido. Recomendo demais para quem quer espaço!",
      rating: 5,
    },
    {
      name: "Lourdes Ferreira",
      location: "Tucuruvi, PR",
      image: "/dona-lourdes.jpg",
      testimonial:
        "Sempre morei de favor na casa da minha irmã. Tinha medo de financiar por ser viúva e autônoma. O pessoal aqui me ajudou a comprovar a renda direitinho. Consegui um subsídio de 45 mil que abateu muito da dívida. Tô muito feliz no meu cantinho.",
      rating: 5,
    },
  ]

  return (
    <section className="py-8 md:py-12 lg:py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-3 md:space-y-4 mb-8 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground text-balance"
          >
            Famílias que já Conquistaram o Sonho da Casa Própria
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-sm md:text-lg text-muted-foreground"
          >
            Veja o que nossos clientes têm a dizer sobre a experiência
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <TestimonialCard {...testimonial} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-8 md:mt-12"
        >
          <p className="text-xs md:text-sm text-muted-foreground mb-4 md:mb-6">
            Mais de 2.347 famílias já conquistaram a casa própria através do nosso programa
          </p>
          <Button
            size="lg"
            className="w-full sm:w-auto bg-[#005DA8] hover:bg-[#004a87] text-white font-semibold px-6 md:px-8 text-sm md:text-base transition-all hover:scale-105"
            onClick={() => window.open(getWhatsAppLink(whatsappMessages.nextClient), "_blank")}
          >
            Quero Ser o Próximo
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

function TestimonialCard({
  name,
  location,
  image,
  testimonial,
  rating,
}: {
  name: string
  location: string
  image: string
  testimonial: string
  rating: number
}) {
  return (
    <div className="bg-card border border-border rounded-lg md:rounded-xl p-4 md:p-6 space-y-3 md:space-y-4 hover:shadow-lg transition-all h-full">
      <div className="flex items-center gap-3 md:gap-4">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          width={64}
          height={64}
          className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover"
        />
        <div>
          <h4 className="font-bold text-card-foreground text-sm md:text-base">{name}</h4>
          <p className="text-xs md:text-sm text-muted-foreground">{location}</p>
        </div>
      </div>

      <div className="flex gap-0.5 md:gap-1">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-[#005DA8] text-[#005DA8]" />
        ))}
      </div>

      <p className="text-xs md:text-sm text-muted-foreground leading-relaxed italic">"{testimonial}"</p>
    </div>
  )
}
