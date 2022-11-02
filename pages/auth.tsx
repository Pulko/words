import type { NextPage } from 'next'
import { Auth, ThemeSupa } from '@supabase/auth-ui-react'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'

import Accounts from 'components/Accounts'
import Layout from 'components/Layout'

const Home: NextPage = () => {
  const session = useSession()
  const supabase = useSupabaseClient()

  return (
    <Layout>
      <div className="container" style={{ padding: '50px 0 100px 0' }}>
        {!session ? (
          <Auth
            supabaseClient={supabase}
            appearance={{ theme: ThemeSupa }}
            theme="dark"
          />
        ) : (
          <Accounts session={session} />
        )}
      </div>
    </Layout>
  )
}

export default Home