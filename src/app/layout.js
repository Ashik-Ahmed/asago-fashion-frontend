import Footer from './components/home/Footer/Footer'
import FooterBottom from './components/home/Footer/FooterBottom'
import Header from './components/home/Header/Header'
import HeaderBottom from './components/home/Header/HeaderBottom'
import SpecialCase from './components/specialCase/specialCase'
import './globals.css'


export const metadata = {
  title: 'Asago Fashion',
  description: 'Asago fasion ecommerce',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        {/* <Header /> */}
        <HeaderBottom />
        <SpecialCase />
        <div>
          {children}
        </div>
        <Footer />
        <FooterBottom />
      </body>
    </html>
  )
}
