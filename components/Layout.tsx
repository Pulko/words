import { PropsWithChildren } from 'react'

import Footer from 'components/Footer'
import Meta from 'components/Meta'
import Header from 'components/Header'
import Container from 'components/Container'

const Layout: React.FC<PropsWithChildren> = ({ children }) => (
  <div className="bg-sky-100 text-slate-900">
    <Meta />
      <Header />
      <main className="mt-24 min-h-screen">
        <Container>
          <div className="text-center">
            {children}
          </div>
        </Container>
      </main>
    <Footer />
  </div>
)

export default Layout