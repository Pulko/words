import { useSession } from '@supabase/auth-helpers-react'

const navigation = [
  { name: 'Login', href: '/auth' },
]

const Header = () => {
  const session = useSession()
  console.log(session)
  return (
    <section className="container mx-auto tracking-tight md:tracking-tighter">
      <div className="relative">
        <div className="mx-auto max-w-7xl flex py-4">
          <a className="relative z-10 w-full font-bold text-3xl" href="/">
            {"Words app".toUpperCase()}
          </a>

          <a href="/auth" className="hover:underline">
            {session?.user ? (
              session?.user.email
            ) : (
              "Log in"
            )}
          </a>
        </div>
      </div>
    </section>
  )
}

export default Header
