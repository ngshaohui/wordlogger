export interface Vocab {
    text: string;
    transliteration: string;
    translation: string;
    sentences: Sentence[];
}

export interface Sentence {
    text: string;
    transliteration: string;
    translation: string;
}
