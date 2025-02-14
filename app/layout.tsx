import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Josué Savy - Ingénieur Système',
  description: 'Ingénieur diplômé de l\'ENIB, je suis passionné par l\'innovation. Spécialisé dans les technologies modernes, je crée des applications performantes et évolutives. Découvrez mes projets, mon parcours et mes compétences.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
