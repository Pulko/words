import Link from 'next/link'
import { useSession } from '@supabase/auth-helpers-react'

import Layout from 'components/Layout'

export default function Home() {
  const session = useSession()

  return (
    <Layout>
      <h1 className="text-4xl w-full text-center mt-32 font-bold">
        {"Here you can train your vocabulary with fun".toUpperCase()}
      </h1>
      <div className="text-center mt-12">
        <Link
          href="/words"
          className="px-6 py-3 rounded bg-blue-900 hover:bg-blue-800 text-md font-bold text-white"
        >
          {"words".toUpperCase()}
        </Link>
      </div>
    </Layout>
  )
}
