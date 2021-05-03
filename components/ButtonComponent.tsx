import { FC, MouseEvent } from 'react';
import styled from '@emotion/styled';

const Button = styled.button`
    background: #FDD207;
    border-radius: 80px;
    width: 390px;
    height: 110px;
    border: none;
    color: #371548;
    font-weight: bold;
    font-size: 50px;
    text-transform: uppercase;
    align-self: center;
    justify-self: center;
    cursor: pointer;
`;

interface Props {
    run(event: MouseEvent<HTMLButtonElement>): void
}

const ButtonComponent: FC<Props> = ({ run }) => {
    return <Button onClick={run}>Старт</Button>
}

export default ButtonComponent;