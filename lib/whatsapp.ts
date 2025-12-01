export function getWhatsAppLink(message: string): string {
  const phoneNumber = "5511959747934" // +55 11 95974-7934
  const encodedMessage = encodeURIComponent(message)
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`
}

export const whatsappMessages = {
  specialist: "Olá! Gostaria de falar com um especialista sobre o programa MCMV.",
  simulation: "Olá! Gostaria de fazer uma simulação gratuita para o programa MCMV.",
  property: (propertyTitle?: string) =>
    propertyTitle
      ? `Olá! Tenho interesse no imóvel: ${propertyTitle}. Gostaria de mais informações.`
      : "Olá! Tenho interesse em um imóvel do programa MCMV. Gostaria de mais informações.",
  subsidy: "Olá! Gostaria de descobrir qual subsídio tenho direito no programa MCMV.",
  contact: "Olá! Gostaria de entrar em contato para saber mais sobre o programa MCMV.",
  nextClient: "Olá! Quero ser o próximo a conquistar minha casa própria pelo MCMV!",
}
