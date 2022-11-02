import Head from 'next/head'
import { useEffect, useState } from 'react'

import {
  useUser,
  useSupabaseClient,
} from '@supabase/auth-helpers-react'

import { Database } from 'utils/database.types'
import { Word } from 'utils/types'

import Layout from 'components/Layout'
import Link from 'next/link'
import Card from 'components/Card'

export default function Words() {
  const supabase = useSupabaseClient<Database>()
  const [words, setWords] = useState<Array<Word>>([])
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const fetchWords = async () => {
      try {
        let { data: words, error } = await supabase
          .from('words')
          .select('*')

          if (words) {
            setWords(words)
            setIndex(0)
          }

          if (error) {
            throw error
          }
      } catch (error) {
        console.log(error)
      }
    }

    fetchWords()
  }, [supabase])

  const onChange = () => {
    if (index < words.length - 1) {
      setIndex(index + 1)
    } else {
      setIndex(0)
    }
  }

  return (
    <Layout>
      {words?.[index] && (
        <Card {...words[index]} onChange={onChange} />
      )}
      <div className="text-center mt-22">
        <Link
          href="/words/add"
          className="px-6 py-3 rounded bg-blue-900 hover:bg-blue-800 text-md font-bold text-white"
        >
          {"Add new words".toUpperCase()}
        </Link>
      </div>
    </Layout>
  )
}
