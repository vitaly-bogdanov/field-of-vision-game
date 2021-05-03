import { WordsActionTypes, ErrorWordsListAction } from '../../types/word';

const wordsErrorAction = (error: string): ErrorWordsListAction => ({
    type: WordsActionTypes.ERROR,
    payload: error
});

export default wordsErrorAction;