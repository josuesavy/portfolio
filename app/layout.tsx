import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Jérémie Barrière - Développeur fullstack',
  description: 'Jérémie Barrière, développeur fullstack passionné et expérimenté. Spécialisé dans les technologies modernes, je crée des applications web performantes et évolutives. Découvrez mes projets, mon parcours et mes compétences.',
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
