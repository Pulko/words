export type Word = {
  id: number
  word: string | null
  translation: string | null
}

export type Profile = {
  id: string
  updated_at: string | null
  username: string | null
  full_name: string | null
  avatar_url: string | null
  website: string | null
}