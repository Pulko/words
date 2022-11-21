import { useSession } from '@supabase/auth-helpers-react'
import Link from 'next/link'

const navigation = [
  { name: 'Login', href: '/auth' },
]

const Header = () => {
  const session = useSession()

  return (
    <section className="container lg:mx-auto px-2 tracking-tight md:tracking-tighter">
      <div className="relative">
        <div className="mx-auto max-w-7xl flex py-4">
          <Link className="relative z-10 w-full font-bold text-3xl whitespace-nowrap	" href="/">
            {"Wörter".toUpperCase()}
          </Link>

          <Link href="/auth" className="hover:underline whitespace-nowrap	">
            {session?.user ? (
              session?.user.email
            ) : (
              "Anmeldung".toUpperCase()
            )}
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Header
