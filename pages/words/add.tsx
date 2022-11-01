import Head from 'next/head'
import React, { useEffect, useState } from 'react'

import {
  useUser,
  useSupabaseClient,
} from '@supabase/auth-helpers-react'

import { Database } from 'utils/database.types'
import { Word } from 'utils/types'

import Layout from 'components/Layout'

export default function Words() {
  const supabase = useSupabaseClient<Database>()
  const [word, setWord] = useState<string>("")
  const [translation, setTranslation] = useState<string>("")
  const [error, setError] = useState<string>("")
  const [lastId, setLastId] = useState<number>(0)

  useEffect(() => {
    const fetchWords = async () => {
      try {
        let { data, error } = await supabase
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

        setLastId(lastId+1)
        setWord("")
        setTranslation("")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Layout>
      <input type="text" value={word} onChange={setText(setWord)} />
      <input type="text" value={translation} onChange={setText(setTranslation)} />

      <button type="button" onClick={insertRow}>
        Add new word
      </button>

      {error && (
        <p className="text-red-600">{error}</p>
      )}
    </Layout>
  )
}
