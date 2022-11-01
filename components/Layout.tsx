import { PropsWithChildren } from 'react'

import Footer from 'components/Footer'
import Meta from 'components/Meta'
import Header from 'components/Header'
import Container from 'components/Container'

const Layout: React.FC<PropsWithChildren> = ({ children }) => (
  <div className="bg-sky-100 bg-gradient-to-r from-indigo-200 to-pink-200 text-slate-900">
    <Meta />
    <div className="min-h-screen">
      <Header />
      <main>
        <Container>
          {children}
        </Container>
      </main>
    </div>
    <Footer />
  </div>
)

export default Layout