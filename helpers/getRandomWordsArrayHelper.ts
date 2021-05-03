import { Word } from '../types/word';

const getRandomWordsArrayHelper = (words: Word[], wordsCount: number, lettersCount: number): Word[] => {
    return words.filter(word => word.length === lettersCount).sort(() => Math.random() - 0.5).slice(0, wordsCount);
}

export default getRandomWordsArrayHelper;