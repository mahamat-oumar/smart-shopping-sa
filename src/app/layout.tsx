import React from 'react'

export const metadata = {
  title: 'Smart Shopping SA',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar">
      <body>{children}</body>
    </html>
  )
}
