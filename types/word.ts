export type Word = {
    id: string,
    content: string,
    length: number
};

export type WordsState = {
    words: Word[],
    error: null | string
};

export enum WordsActionTypes {
    CREATE_WORDS_LIST = 'CREATE_WORDS_LIST',
    ERROR = 'ERROR'
};

export type CreateWordsListAction = {
    type: WordsActionTypes.CREATE_WORDS_LIST,
    payload: Word[]
};

export type ErrorWordsListAction = {
    type: WordsActionTypes.ERROR,
    payload: string
}

export type AnyWordsAction = CreateWordsListAction | ErrorWordsListAction;
