
export interface wordsType {
    en: words
    ar: words
}

export type words = {
    name: string;
    pleaseWait: string;
    welcome: string;
    restaurantName: string,
    restaurantDescription: string,
    searchHere: string;
}

export interface TranslationState {
    language: keyof wordsType; // Union of available languages
    words: { [key: string]: string };
}

type language = {
    language: "ar" | "en",
    words: words
}

export type searchType = {
    searchValue: string
}

export type RootState = {
    translation: language,
    search: searchType
}