import { FC } from 'react';
import MainLayout from '../layouts/MainLayout';
import styled from '@emotion/styled';

interface Props {
    word: string
    distance: number
    setDistance(value: number): void
}

const WordViawer = styled.div`
    position: relative;
    height: 100vh;
    width: 100vw;
`;

const WordPartLeft = styled.div`
    color: #371548;
    font-size: 60px;
    font-weight: bold;
    justify-self: end;
`;

const WordPartRight = styled.div`
    color: #371548;
    font-size: 60px;
    font-weight: bold;
`; 

const WordBlock = styled.div`
    position: absolute;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const RunStageComponent: FC<Props> = ({ word, distance }) => {

    const Tilda = styled.div`
        font-size: 140px;
        font-weight: bold;
        color: #371548;
        width: ${95 + distance}px;
        text-align: center;
    `;

    const renderWord = (word: string) => {
        let firstSlice = '';
        let lastSlice = '';
        if (word.length % 2 === 0) {
            firstSlice = word.slice(0, word.length / 2) 
            lastSlice = word.slice(word.length / 2, word.length + 1);
        } else {
            firstSlice = word.slice(0, Math.ceil(word.length / 2));
            lastSlice = word.slice(Math.ceil(word.length / 2), word.length);
        }
        return (
            <WordViawer>
                <WordBlock>
                    <WordPartLeft>{firstSlice}</WordPartLeft> 
                    <Tilda>~</Tilda>
                    <WordPartRight>{lastSlice}</WordPartRight>
                </WordBlock>
            </WordViawer>
        );
    }

    return (
        <MainLayout title='Играем!'>
            {renderWord(word)}
        </MainLayout>
    );
}

export default RunStageComponent;