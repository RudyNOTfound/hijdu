
import { useRef } from 'react';

export const useGameAudio = () => {
  const diceRollAudioRef = useRef<HTMLAudioElement>(null);
  const ladderAudioRef = useRef<HTMLAudioElement>(null);
  const snakeAudioRef = useRef<HTMLAudioElement>(null);

  const playDiceRollSound = () => {
    if (diceRollAudioRef.current) {
      diceRollAudioRef.current.currentTime = 0;
      diceRollAudioRef.current.play().catch(() => {});
    }
  };

  const playLadderSound = () => {
    if (ladderAudioRef.current) {
      ladderAudioRef.current.currentTime = 0;
      ladderAudioRef.current.play().catch(() => {});
    }
  };

  const playSnakeSound = () => {
    if (snakeAudioRef.current) {
      snakeAudioRef.current.currentTime = 0;
      snakeAudioRef.current.play().catch(() => {});
    }
  };

  return {
    diceRollAudioRef,
    ladderAudioRef,
    snakeAudioRef,
    playDiceRollSound,
    playLadderSound,
    playSnakeSound
  };
};
