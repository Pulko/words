import React, { useEffect, useState } from 'react'

import {
  useSupabaseClient,
} from '@supabase/auth-helpers-react'

import { Database } from 'utils/database.types'

import Layout from 'components/Layout'
import { withPageAuth } from '@supabase/auth-helpers-nextjs'

const Words = () => {
  const supabase = useSupabaseClient<Database>()
  const [word, setWord] = useState<string>("")
  const [translation, setTranslation] = useState<string>("")
  const [error, setError] = useState<string>("")
  const [lastId, setLastId] = useState<number>(0)

  useEffect(() => {
    const fetchWords = async () => {
      try {
        let { data } = await supabase
          .from('words')
          .select('id')
          .order('id', { ascending: false })
          .limit(1)

        setLastId(Number(data?.[0]?.id || 0) + 1)
      } catch (error) {
        console.log(error)
      }
    }

    fetchWords()
  }, [supabase])

  const setText = (setData: (data: string) => void) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value

    setError("")
    setData(value)
  }

  const insertRow = async () => {
    if (!word || !translation) {
      setError("Provide all the required data please!")
    }

    try {
      await supabase
        .from('words')
        .insert([
          { word, translation, id: lastId },
        ])

      setLastId(lastId + 1)
      setWord("")
      setTranslation("")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Layout>
      <div className="mb-2">
        <label htmlFor="word">{'Wort'.toUpperCase()}</label>
        <div>
          <input type="text" id="word" value={word} onChange={setText(setWord)} className="border rounded p-2 bg-white mx-2" />
        </div>
      </div>

      <div className="mb-2">
        <label htmlFor="translation">{'Übersetzung'.toUpperCase()}</label>
        <div>
          <input type="text" id="translation" value={translation} onChange={setText(setTranslation)} className="border rounded p-2 bg-white mx-2" />

        </div>
      </div>

      <button type="button" className="px-6 py-3 rounded bg-blue-900 hover:bg-blue-800 text-white" onClick={insertRow}>
        {'hinzufügen'.toUpperCase()}
      </button>

      {error && (
        <p className="text-red-600">{error}</p>
      )}
    </Layout>
  )
}

export const getServerSideProps = withPageAuth({ redirectTo: '/auth' })

export default Words
