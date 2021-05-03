import { FC, useState, useRef, useEffect, memo } from 'react';
import rangeCreatorHelper from '../helpers/rangeCreateHelper';
import styled from '@emotion/styled';
import Range from './styled/Range';

const NumberNotes = styled.div`
    display: flex;
    justify-content: space-between;
    width: 536px;
    margin-bottom: 15px;
    font-size: 38px;
    font-weight: bold;
`;

const RangePanel = styled.div`
    margin-left: auto;
    margin-right: auto;
    width: 536px;
`;

const Title = styled.p`
    font-size: 48px;
    color: #371548;
    font-weight: bold;
    line-height: 57px;
    text-align: center;
    padding-bottom: 14px;
`;

interface Props {
    title: string,
    value: number
    min: number,
    max: number,
    step: number
    setValue(value: number): void
}

const RangeComponent: FC<Props> = ({ title, value, min, max, step, setValue }) => (
    <>
        <Title>{title}</Title>
        <RangePanel>
            <NumberNotes>
                { rangeCreatorHelper(min, max, step).map(number => <span>{number}</span>) }
            </NumberNotes>
            <Range type="range" value={value} min={min} max={max} step={step} onChange={event => setValue(parseInt(event.target.value))} />
        </RangePanel>
    </>
);

export default memo(RangeComponent);