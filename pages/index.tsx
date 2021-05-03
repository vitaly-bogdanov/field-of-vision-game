import { FC, useState, MouseEvent } from 'react';
import { Word, WordsState } from '../types/word';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/reducers/rootReducer';
import { PrismaClient } from '@prisma/client';
import InitStageComponent from '../components/InitStageComponent';
import RunStageComponent from '../components/RunStageComponent';
import FinishStageComponent from '../components/FinishStageComponent';
import wrapper from '../redux/store';
import createWordsListAction from '../redux/actionCreators/createWordsListAction';
import wordsErrorAction from '../redux/actionCreators/wordsErrorAction';
import getRandomWordsArrayHelper from '../helpers/getRandomWordsArrayHelper';

export type Stage = 'init' | 'run' | 'finish'; 

const Index: FC = () => {
  // можно через connect и mapStateToProps
  const { words, error }: WordsState = useSelector((state: RootState) => state.wordsList);
  const [stage, setStage] = useState<Stage>('init');
  const [time, setTime] = useState<number>(2);
  const [wordsCount, setWordsCount] = useState<number>(8);
  const [lettersCount, setLettersCount] = useState<number>(8);
  const [distance, setDistance] = useState<number>(20);
  const [distanceIncrease, setDistanceIncrease] = useState<number>(15);
  const [selectedWords, setSelectedWords] = useState<Word[]>([]);
  const [viewWord, setViewWord] = useState<string>('');

  const setTimeHandler = (value: number, min: number = 1, max: number = 5) => {
    setTime((prev) => { 
      if (prev + value >= min && prev + value <= max) {
        return  prev + value;
      }
      return prev;
    });
  };

  // такое я бы позже постарался оптимизировать лучше
  const runHandler = (event: MouseEvent<HTMLButtonElement>): void => {
    setStage('run');
    setSelectedWords(getRandomWordsArrayHelper(words, wordsCount, lettersCount));

    // всегда выводим первое слово и удаляем его,
    // таким образом пока все слова в массиве не закончатся и выполнится clearInterval
    const interval = setInterval(() => {
      setSelectedWords(prev => {
        if (prev.length !== 0) {
          setViewWord(prev.shift().content); // Word { id: ..., content: ..., length: ... }
          setDistance((prev) => prev + distanceIncrease);
        } else {
          clearInterval(interval); // очищаем память
          setStage('finish');
        }
        return prev;
      });
    }, time * 1000);
  }

  // RENDER

  if (error) {
    return <p>Error: {error}</p>
  }

  if (stage === 'init') {
    return (
      <InitStageComponent 
        setWordsCount={setWordsCount} 
        setStartDistance={setDistance}
        setLettersCount={setLettersCount}
        setDistanceIncrease={setDistanceIncrease}
        setTime={setTimeHandler}
        time={time}
        wordsCount={wordsCount}
        startDistance={distance}
        lettersCount={lettersCount}
        distanceIncrease={distanceIncrease}
        run={runHandler}
      />
    )
  }
  
  if (stage === 'run') {
    return <RunStageComponent
      word={viewWord}
      distance={distance}
      setDistance={setDistance}
    />;
  }

  if (stage === 'finish') {
    return <FinishStageComponent />;
  }

  return <p>Что-то пошло не так</p>
}

// создаем на серевере redux state со словами
// можно было  просто props передать, но так интересней
export const getServerSideProps = wrapper.getServerSideProps(async ({ store }) => {
  try {
    const prisma = new PrismaClient();
    const words: Word[] = await prisma.word.findMany();
    if (!words) throw new Error('Просто нет слов');
    store.dispatch(createWordsListAction(words));
  } catch (error) {
    console.log(error)
    store.dispatch(wordsErrorAction(error.message))
  }
});

export default Index;