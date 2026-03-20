import './globals.css'
export const metadata = {
  title: 'Ledger - AuditForge Verified',
  description: 'LinkedIn is self-reported. This is verified.',
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'Ledger - AuditForge Verified',
    description: 'LinkedIn is self-reported. This is verified.',
    images: ['/ledger-og.png'],
    url: 'https://ledger-card.vercel.app',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/ledger-og.png'],
  },
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&family=Source+Serif+4:ital,opsz,wght@0,8..60,300;0,8..60,400;0,8..60,600;1,8..60,300;1,8..60,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}