import './globals.css'


export const metadata = {
  title: 'Asago Fashion',
  description: 'Asago fasion ecommerce',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
