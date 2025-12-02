"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { motion, AnimatePresence } from "framer-motion"
import { Calculator } from "lucide-react"
import { getWhatsAppLink } from "@/lib/whatsapp"

export function SimulationFormSection() {
  const [formData, setFormData] = useState({
    people: "",
    income1: "",
    income2: "",
    income3: "",
    hasFGTS: "",
    fgtsValue: "",
    region: "",
    name: "",
    phone: "",
    email: "",
  })

  const getIncomeFieldsCount = () => {
    if (formData.people === "Só a minha renda") return 1
    if (formData.people === "Eu + 1 Pessoa") return 2
    if (formData.people === "Eu + 2 Pessoas") return 3
    return 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // 1. Dispara o evento de Lead para o GTM
    if (window.dataLayer) {
      window.dataLayer.push({ event: "lead" })
    }

    const incomes = []
    if (formData.income1) incomes.push(formData.income1)
    if (formData.income2) incomes.push(formData.income2)
    if (formData.income3) incomes.push(formData.income3)

    const message = `Olá! Gostaria de fazer uma simulação MCMV com os seguintes dados:

👥 Renda somada: ${formData.people}
💰 Rendas: ${incomes.join(", ")}
💼 FGTS: ${formData.hasFGTS === "sim" ? `Sim - R$ ${formData.fgtsValue}` : "Não"}
📍 Região de interesse: ${formData.region}

Dados de contato:
Nome: ${formData.name}
Telefone: ${formData.phone}
Email: ${formData.email}`

    window.open(getWhatsAppLink(message), "_blank")
  }

  const incomeFieldsCount = getIncomeFieldsCount()

  return (
    <section id="simulation-section" className="py-8 md:py-12 lg:py-16 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-3 md:space-y-4 mb-6 md:mb-10"
          >
            <div className="inline-flex items-center gap-2 bg-[#005DA8]/10 px-4 md:px-6 py-2 md:py-2.5 rounded-full">
              <Calculator className="w-4 h-4 md:w-5 md:h-5 text-[#005DA8]" />
              <span className="text-xs md:text-sm font-semibold text-[#005DA8]">Simulação Gratuita</span>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground text-balance">
              Simulação
            </h2>
            <p className="text-sm md:text-lg lg:text-xl text-muted-foreground">
              Quantas pessoas vão somar a renda com você?
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="bg-card border-2 border-border rounded-xl md:rounded-2xl p-4 md:p-8 lg:p-10 space-y-5 md:space-y-8 shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            {/* People Count - Stack vertically on mobile */}
            <div className="space-y-3 md:space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 md:gap-4">
                {["Só a minha renda", "Eu + 1 Pessoa", "Eu + 2 Pessoas"].map((option) => (
                  <motion.div key={option} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      type="button"
                      variant={formData.people === option ? "default" : "outline"}
                      className={`w-full h-auto py-3 md:py-5 text-sm md:text-base font-semibold transition-all ${
                        formData.people === option
                          ? "bg-[#005DA8] hover:bg-[#004a87] text-white shadow-lg"
                          : "border-2 border-border hover:bg-[#005DA8]/5 hover:border-[#005DA8]"
                      }`}
                      onClick={() =>
                        setFormData({ ...formData, people: option, income1: "", income2: "", income3: "" })
                      }
                    >
                      {option}
                    </Button>
                  </motion.div>
                ))}
              </div>
            </div>

            <AnimatePresence>
              {incomeFieldsCount > 0 && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
                >
                  {Array.from({ length: incomeFieldsCount }).map((_, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="space-y-1.5 md:space-y-2"
                    >
                      <Label
                        htmlFor={`income${index + 1}`}
                        className="text-sm md:text-base font-semibold text-foreground"
                      >
                        {index === 0 ? "Sua renda:" : `Renda da pessoa ${index}:`}
                      </Label>
                      <Input
                        id={`income${index + 1}`}
                        type="text"
                        placeholder="R$ 0,00"
                        value={formData[`income${index + 1}` as keyof typeof formData]}
                        onChange={(e) =>
                          setFormData({ ...formData, [`income${index + 1}`]: e.target.value } as typeof formData)
                        }
                        className="h-10 md:h-12 text-sm md:text-base border-2 focus:border-[#005DA8] transition-colors"
                        required
                      />
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
              {/* FGTS */}
              <div className="space-y-3 md:space-y-4">
                <Label className="text-sm md:text-base font-semibold text-foreground">
                  Trabalhou mais de 3 anos sob regime do FGTS?
                </Label>
                <RadioGroup
                  value={formData.hasFGTS}
                  onValueChange={(value) =>
                    setFormData({ ...formData, hasFGTS: value, fgtsValue: value === "não" ? "" : formData.fgtsValue })
                  }
                  className="flex gap-6 md:gap-8"
                >
                  <div className="flex items-center space-x-2 md:space-x-3">
                    <RadioGroupItem value="sim" id="fgts-sim" className="border-2 w-4 h-4 md:w-5 md:h-5" />
                    <Label htmlFor="fgts-sim" className="cursor-pointer text-sm md:text-base font-medium">
                      Sim
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 md:space-x-3">
                    <RadioGroupItem value="não" id="fgts-nao" className="border-2 w-4 h-4 md:w-5 md:h-5" />
                    <Label htmlFor="fgts-nao" className="cursor-pointer text-sm md:text-base font-medium">
                      Não
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              {/* FGTS Value */}
              <AnimatePresence>
                {formData.hasFGTS === "sim" && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-1.5 md:space-y-2"
                  >
                    <Label htmlFor="fgtsValue" className="text-sm md:text-base font-semibold text-foreground">
                      Se sim, informe o valor do FGTS:
                    </Label>
                    <Input
                      id="fgtsValue"
                      type="text"
                      placeholder="R$ 0,00"
                      value={formData.fgtsValue}
                      onChange={(e) => setFormData({ ...formData, fgtsValue: e.target.value })}
                      className="h-10 md:h-12 text-sm md:text-base border-2 focus:border-[#005DA8] transition-colors"
                      required
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Region */}
            <div className="space-y-1.5 md:space-y-2">
              <Label htmlFor="region" className="text-sm md:text-base font-semibold text-foreground">
                Qual a Região de Interesse?
              </Label>
              <select
                id="region"
                value={formData.region}
                onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                className="w-full h-10 md:h-12 px-3 md:px-4 rounded-lg border-2 border-border bg-background text-sm md:text-base focus:border-[#005DA8] focus:outline-none transition-colors"
                required
              >
                <option value="">Selecione uma região</option>
                <option value="Zona Norte">Zona Norte</option>
                <option value="Zona Sul">Zona Sul</option>
                <option value="Zona Leste">Zona Leste</option>
                <option value="Zona Oeste">Zona Oeste</option>
                <option value="Grande SP">Grande SP</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {/* Name */}
              <div className="space-y-1.5 md:space-y-2">
                <Label htmlFor="name" className="text-sm md:text-base font-semibold text-foreground">
                  Nome
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Seu nome completo"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="h-10 md:h-12 text-sm md:text-base border-2 focus:border-[#005DA8] transition-colors"
                  required
                />
              </div>

              {/* Phone */}
              <div className="space-y-1.5 md:space-y-2">
                <Label htmlFor="phone" className="text-sm md:text-base font-semibold text-foreground">
                  Telefone
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="(11) 99999-9999"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="h-10 md:h-12 text-sm md:text-base border-2 focus:border-[#005DA8] transition-colors"
                  required
                />
              </div>

              {/* Email */}
              <div className="space-y-1.5 md:space-y-2 sm:col-span-2 md:col-span-1">
                <Label htmlFor="email" className="text-sm md:text-base font-semibold text-foreground">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="h-10 md:h-12 text-sm md:text-base border-2 focus:border-[#005DA8] transition-colors"
                  required
                />
              </div>
            </div>

            {/* Submit Button */}
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-[#005DA8] hover:bg-[#004a87] text-white font-bold text-sm md:text-lg py-4 md:py-6 h-auto transition-all shadow-lg hover:shadow-xl"
              >
                Simular Agora
              </Button>
            </motion.div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
