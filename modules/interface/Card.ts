export interface Card {
  text: string
  transliteration: string
  translation: string
  sentence: Sentence[]
}

interface Sentence {
  text: string
  transliteration: string
  translation: string
}