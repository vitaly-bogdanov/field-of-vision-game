import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import MainLayout from '../layouts/MainLayout';
import { FC, useState } from 'react';

import InitStageComponent from '../components/InitStageComponent';
import RunStageComponent from '../components/RunStageComponent';
import FinishStageComponent from '../components/FinishStageComponent';

type Stage = 'init' | 'run' | 'finish';

const Index: FC = () => {
  const [stage, setStage] = useState<Stage>('init');

  if (stage === 'init') {
    return <InitStageComponent />;
  }
  
  if (stage === 'run') {
    return <RunStageComponent />;
  }

  if (stage === 'finish') {
    return <FinishStageComponent />;
  }
}

export default Index;

// {/* <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} /> */}