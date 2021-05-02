import { Word, CreateWordsListAction, WordsActionTypes } from '../../types/word';

const createWordsListAction = (words: Word[]): CreateWordsListAction => ({
    type: WordsActionTypes.CREATE_WORDS_LIST,
    payload: words
});

export default createWordsListAction;