import { useEffect, useState } from "react";
import useFetch from "./useFetch";
import { useTranslation } from "react-i18next";
import { ECountModes } from "../domain/enums/ECountModes";

const initialCount = 60;
let countInterval: NodeJS.Timeout | null = null;

const intervalsMapByMode = {
  [ECountModes.easy]: {
    interval: 10,
    words: 6
  },
  [ECountModes.incremental]: {
    interval: 10,
    words: 30
  },
  [ECountModes.hard]: {
    interval: 5,
    words: 12
  }
}

let testInterval = 10;

export default function useCounter(mode: ECountModes) {

  const {
    i18n: { language },
  } = useTranslation();
  const [count, setCount] = useState(initialCount);
  const [words, setWords] = useState<string[]>([]);
  const [inPause, setInPause] = useState<boolean>();
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const { response, isLoading, reload, error } = useFetch<string[]>({
    endpoint: `https://random-word-api.herokuapp.com/word?number=${
      intervalsMapByMode[mode].words
    }&lang=${language}`,
  });

  useEffect(() => {
    if (isLoading || !response || error) return;
    setCount(initialCount);
    setWords(response);
    setCurrentWordIndex(0);
    setIsRunning(false);
    return () => {
      countInterval && clearInterval(countInterval);
    };
  }, [isLoading, response, language]);

  const startCounter = () => {
    setIntervalFromMode(mode);
    setIsRunning(true);
    setInPause(false);
    countInterval = setInterval(() => {
      setCount((prev) => {
        if (prev <= 0) {
          resetInterval();
          return initialCount;
        }
        if (prev % testInterval === 0 && prev !== initialCount)
          setCurrentWordIndex((prev) => prev + 1);
        return prev - 1;
      });
    }, 1000);
  };

  const stopCounter = () => {
    countInterval && clearInterval(countInterval);
    setInPause(true);
  };

  const reloadCounter = () => {
    reload();
  };

  const resetInterval = () => {
    countInterval && clearInterval(countInterval);
    setIsRunning(false);
    reloadCounter();
  };

  const setIntervalFromMode = (mode: ECountModes) => {
    switch (mode) {
      case ECountModes.easy:
        testInterval = 10
        break;
      case ECountModes.hard:
        testInterval = 5
        break;
      case ECountModes.incremental:
        testInterval = 10;
        setTimeout(() => {
          testInterval = 5;
        }, (initialCount / 2) * 1000);
        setTimeout(() => {
          testInterval = 2;
        }, ((initialCount - (initialCount / 2) / 2)) * 1000);
        break;
    }
  };

  return {
    count,
    currentWord: words[currentWordIndex],
    isRunning,
    inPause,
    error,
    startCounter,
    stopCounter,
    reloadCounter,
  };
}
