import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Josué Savy - Développeur Full-Stack',
  description: 'Ingénieur diplômé de l\'ENIB, Josué travaille chez ALTEN depuis septembre 2022 en tant qu\'ingénieur d\'applications, se spécialisant dans le développement Full-Stack.',
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
