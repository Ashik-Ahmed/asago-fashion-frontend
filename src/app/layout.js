import Header from './components/home/Header/Header'
import HeaderBottom from './components/home/Header/HeaderBottom'
import './globals.css'


export const metadata = {
  title: 'Asago Fashion',
  description: 'Asago fasion ecommerce',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        <Header />
        <HeaderBottom />
        <div>
          {children}
        </div>
      </body>
    </html>
  )
}
