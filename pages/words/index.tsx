import Head from 'next/head'
import { useEffect, useState } from 'react'

import {
  useUser,
  useSupabaseClient,
} from '@supabase/auth-helpers-react'

import { Database } from 'utils/database.types'
import { Word } from 'utils/types'

import Layout from 'components/Layout'

export default function Words() {
  const supabase = useSupabaseClient<Database>()
  const [limit, setLimit] = useState<number>(10)
  const [words, setWords] = useState<Array<Word>>([])

  useEffect(() => {
    const fetchWords = async () => {
      try {
        let { data: words, error } = await supabase
          .from('words')
          .select()
          .range(limit - 10, limit)

          if (words && words.length) {
            setWords(words)
          }
      } catch (error) {
        console.log(error)
      }
    }

    fetchWords()
  }, [supabase, limit])

  return (
    <Layout>
      {words.map((word) => (
        <div key={word.id} className="flex">
          <p className="mr-2">{word.word}</p>
          {"-"}
          <p className="ml-2">{word.translation}</p>
        </div>
      ))}
    </Layout>
  )
}
