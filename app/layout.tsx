import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

// Votre fichier metadata (app/layout.tsx ou app/layout.jsx)

export const metadata: Metadata = {
  title: "Evers Darrell MBINI - Développeur Back-End | Portfolio",
  description:
    "Portfolio professionnel d'Evers Darrell MBINI, développeur back-end spécialisé en Django, Next.js et gestion de bases de données. Découvrez mes projets et compétences.",
  keywords: "développeur back-end, Django, Next.js, Python, API RESTful, bases de données, portfolio",
  authors: [{ name: "Evers Darrell MBINI" }],
  openGraph: {
    title: "Evers Darrell MBINI - Développeur Back-End",
    description: "Portfolio professionnel d'un développeur back-end passionné",
    type: "website",
  },
  
  // 🌟 DÉBUT DE L'AJOUT POUR LE FAVICON 🌟
  
  // 1. Gère la balise <meta name="apple-mobile-web-app-title"> (pour l'écran d'accueil iOS)
  appleWebApp: {
      title: 'evers-dev-folio', // Remplacez 'evers-dev-folio' par le nom donné par le générateur si différent
  },

  // 2. Configure toutes les icônes (doivent exister dans le dossier /public)
  icons: {
    // Les Favicons classiques (pour les onglets et barres)
    icon: [
      { url: '/favicon.ico' }, // Fichier ICO (le plus compatible)
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    // L'icône pour l'ajout du site sur l'écran d'accueil d'un iPhone/iPad
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180' },
    ],
  },
  
  // 🌟 FIN DE L'AJOUT POUR LE FAVICON 🌟
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
