import { WordsState, AnyWordsAction, WordsActionTypes } from '../../types/word';

const initialState: WordsState = {
    words: [],
    error: null
};

const wordsReducer = (state = initialState, action: AnyWordsAction): WordsState => {
    switch (action.type) {
        case WordsActionTypes.CREATE_WORDS_LIST:
            return { ...state, words: action.payload };
        case WordsActionTypes.ERROR:
            return { ...state, error: action.payload };
        default:
            return state;
    }
}

export default wordsReducer;
