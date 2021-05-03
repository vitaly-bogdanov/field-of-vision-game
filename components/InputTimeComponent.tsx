import { FC, memo } from 'react';
import styled from '@emotion/styled';

const Speed = styled.p`
    color: #371548;
    font-size: 48px;
    font-weight: bold;
`;

const Field = styled.div`
    border-radius: 20px;
    width: 125px;
    height: 60px;
    border: 1px solid #000000;
    font-size: 48px;
    line-height: 60px;
    font-weight: bold;
    text-align: center;
    margin-left: 50px;
`;

const SpeedField = styled.div`
    display: flex;
    width: 500px;
    margin-right: auto;
    margin-left: auto;
    justify-content: space-between;
`;

const Sec = styled.p`
    color: #371548;
    font-size: 48px;
    font-weight: bold;
`;

const Buttons = styled.div`
    display: flex;
    justify-content: space-between;
    width: 204px;
    margin-left: auto;
    margin-right: auto;
    padding-top: 15px;
`;

const Button = styled.button`
    background: #FDD207;
    border: none;
    width: 92px;
    height: 92px;
    border-radius: 10px;
    cursor: pointer;
`;

const Minus = styled.div`
    width: 60px;
    height: 10px;
    background-color: #000;
    margin-left: auto;
    margin-right: auto;
`;

const Plus = styled.div`
    position: relative;
    &::before {
        content: '';
        display: block;
        width: 60px;
        height: 10px;
        background-color: #000;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    &::after {
        content: '';
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) rotate(90deg);
        display: block;
        width: 60px;
        height: 10px;
        background-color: #000;
    }
`;

interface Props {
    time: number,
    setTime(value: number): void 
}

const InputTimeComponent: FC<Props> = ({ time, setTime }) => (
    <>
        <SpeedField>
            <Speed>Скорость</Speed>
            <Field>{time}</Field>
            <Sec>сек.</Sec>
        </SpeedField>
        <Buttons>
            <Button onClick={() => setTime(-0.5)}><Minus /></Button>
            <Button onClick={() => setTime(0.5)}><Plus /></Button>
        </Buttons>
    </>
);

export default memo(InputTimeComponent);