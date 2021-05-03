import { FC, Dispatch, SetStateAction } from 'react';
import MainLayout from '../layouts/MainLayout';
import Container from './styled/Container';
import Box from './styled/Box';
import RangeComponent from './RangeComponent';
import InputTimeComponent from './InputTimeComponent';
import styled from '@emotion/styled';

const Title = styled.h1`
    font-size: 64px;
    line-height: 75px;
    color: #2B3172;
    text-align: center;
    padding-top: 115px;
    padding-bottom: 180px;
`;

const Grid = styled.div`
    display: grid;
    grid-gap: 40px;
    grid-template-columns: 1fr 1fr;
`;

interface Props {
    setWordsCount(value: number): void
    wordsCount: number

    setStartDistance(value: number): void
    startDistance: number

    setLettersCount(value: number): void
    lettersCount: number

    setDistanceIncrease(value: number): void
    distanceIncrease: number

    setTime(value: number): void
    time: number
}

const InitStageComponent: FC<Props> = ({ 
    setWordsCount, 
    setStartDistance, 
    setLettersCount, 
    setDistanceIncrease, 
    setTime,
    wordsCount,
    startDistance,
    lettersCount,
    distanceIncrease,
    time
}) => (
    <MainLayout title='Начнем'>
        <header>
            <Title>Тренажер «Поле зрения»</Title>
        </header>
        <main>
            <Container>
                <Grid>
                    <Box><RangeComponent title="Сколько слов" min={1} max={10} value={wordsCount} step={1} setValue={setWordsCount} /></Box>
                    <Box><RangeComponent title="Стартовое растояние" min={5} max={40} value={startDistance} step={5} setValue={setStartDistance} /></Box>
                    <Box><RangeComponent title="Сколько букв в словах" min={3} max={12} value={lettersCount} step={1} setValue={setLettersCount} /></Box>
                    <Box><RangeComponent title="Увеличение растояния" min={5} max={40} value={distanceIncrease} step={5} setValue={setDistanceIncrease} /></Box>
                    <Box><InputTimeComponent setTime={setTime} time={time} /></Box>
                </Grid>
            </Container>
        </main>
    </MainLayout>
);

export default InitStageComponent;