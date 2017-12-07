export interface Sentence {
    text: string;
    transliteration: string;
    translation: string;
}

export interface Vocab {
    text: string;
    transliteration: string;
    translation: string;
    sentences: Sentence[];
}
