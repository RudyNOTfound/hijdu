
import { useState } from 'react';

interface UseGameStateProps {
  gameMode: 'single' | 'multiplayer';
  players: string[];
}

export const useGameState = ({ gameMode, players }: UseGameStateProps) => {
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [playerPositions, setPlayerPositions] = useState<number[]>(
    players.map(() => 1)
  );
  const [playerATPs, setPlayerATPs] = useState<number[]>(() => {
    if (gameMode === 'single') {
      const saved = localStorage.getItem('playerATP');
      return [saved ? parseInt(saved) : 100];
    }
    return players.map(() => 100);
  });
  
  const [diceValue, setDiceValue] = useState(1);
  const [isRolling, setIsRolling] = useState(false);
  const [gamePhase, setGamePhase] = useState<'waiting' | 'rolling' | 'mcq' | 'moving' | 'paused' | 'ended'>('waiting');
  const [showMCQ, setShowMCQ] = useState(false);
  const [showStore, setShowStore] = useState(false);
  const [showPause, setShowPause] = useState(false);
  const [currentMCQ, setCurrentMCQ] = useState<any>(null);
  const [usedQuestions, setUsedQuestions] = useState<Set<number>>(new Set());
  const [musicVolume, setMusicVolume] = useState(() => {
    const saved = localStorage.getItem('musicVolume');
    return saved ? parseFloat(saved) : 0;
  });

  // Current player's position and ATP for easier access
  const currentPlayerPosition = playerPositions[currentPlayerIndex];
  const currentPlayerATP = playerATPs[currentPlayerIndex];

  return {
    // State
    currentPlayerIndex,
    setCurrentPlayerIndex,
    playerPositions,
    setPlayerPositions,
    playerATPs,
    setPlayerATPs,
    diceValue,
    setDiceValue,
    isRolling,
    setIsRolling,
    gamePhase,
    setGamePhase,
    showMCQ,
    setShowMCQ,
    showStore,
    setShowStore,
    showPause,
    setShowPause,
    currentMCQ,
    setCurrentMCQ,
    usedQuestions,
    setUsedQuestions,
    musicVolume,
    setMusicVolume,
    currentPlayerPosition,
    currentPlayerATP
  };
};
