"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleScrollToProperties = () => {
    const element = document.getElementById("properties-section")
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
    setIsMobileMenuOpen(false)
  }

  const handleScrollToSimulation = () => {
    const element = document.getElementById("simulation-section")
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-2 md:py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 md:gap-4">
          <div className="flex items-center gap-2 md:gap-3">
            <Image
              src="/images/logo-caixa-economica-federal-clipart-png.png"
              alt="Caixa Econômica Federal"
              width={100}
              height={36}
              className="object-contain h-6 md:h-9 w-auto"
            />
            <div className="h-6 md:h-10 w-[2px] bg-gradient-to-b from-transparent via-[#005DA8] to-transparent rounded-full" />
            <Image
              src="/images/minha-casa-minha-vida-seeklogo.png"
              alt="Minha Casa Minha Vida"
              width={120}
              height={40}
              className="object-contain h-7 md:h-10 w-auto"
            />
          </div>
        </Link>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium text-foreground hover:text-[#005DA8] transition-colors">
            Home
          </Link>
          <button
            onClick={handleScrollToProperties}
            className="text-sm font-medium text-foreground hover:text-[#005DA8] transition-colors"
          >
            Imóveis
          </button>
          <Button size="sm" className="bg-[#005DA8] hover:bg-[#004a87] text-white" onClick={handleScrollToSimulation}>
            Simular Agora
          </Button>
        </nav>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg md:hidden"
            >
              <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
                <Link
                  href="/"
                  className="text-base font-medium text-foreground hover:text-[#005DA8] transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <button
                  onClick={handleScrollToProperties}
                  className="text-base font-medium text-foreground hover:text-[#005DA8] transition-colors py-2 text-left"
                >
                  Imóveis
                </button>
                <Button
                  className="bg-[#005DA8] hover:bg-[#004a87] text-white w-full"
                  onClick={handleScrollToSimulation}
                >
                  Simular Agora
                </Button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
