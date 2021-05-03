import { FC } from 'react';
import MainLayout from '../layouts/MainLayout';
import styled from '@emotion/styled';

const Wrapper = styled.div`
    position: relative;
    height: 100vh;
    width: 100vw;
`;

const SuccessMessage = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: #2B3172;
    font-weight: bold;
    font-size: 64px !important;
`;

const Siri = styled.img`
    height: 532px;
    width: 464px;
`;

const FinishStageComponent: FC = () => {
    return (
        <MainLayout title='Молодец!'>
            <Wrapper>
                <SuccessMessage>
                    <Siri src="/images/siri.png" alt="Siri" />
                    <p>Отличная работа!</p>
                </SuccessMessage>
            </Wrapper>
        </MainLayout>
    );
}

export default FinishStageComponent;