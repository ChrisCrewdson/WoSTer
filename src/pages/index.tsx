import React, {useState} from 'react';
import axios from 'axios';
import Head from 'next/head';

export default function Home() {
  const [timerRunning, setTimerRunning] = useState(false);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [elapsedTime, setElapsedTime] = useState(0);

  const startTimer = () => {
    setStartTime(Date.now());
    setTimerRunning(true);
  };

  const stopTimer = () => {
    if (timerRunning) {
      const endTime = Date.now();
      const elapsedTime = endTime - (startTime as number);
      setElapsedTime(elapsedTime);
      setTimerRunning(false);
      saveTimeToDatabase(elapsedTime);
    }
  };

  const saveTimeToDatabase = async (time: number) => {
    try {
      await axios.post('/api/time', {time});
      console.log('Time saved to database:', time);
    } catch (error) {
      console.error('Failed to save time to database:', error);
    }
  };

  return (
    <div>
      <Head>
        <title>Woster Time Tracking</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Woster Time Tracking</h1>
        {timerRunning ? (
          <div>
            <h2>Timer Running</h2>
            <p>Elapsed Time: {elapsedTime} ms</p>
            <button onClick={stopTimer}>Stop Timer</button>
          </div>
        ) : (
          <div>
            <h2>Timer Stopped</h2>
            <button onClick={startTimer}>Start Timer</button>
          </div>
        )}
      </main>
    </div>
  );
}
