
import { useGameState } from './useGameState';
import { useGameAudio } from './useGameAudio';
import { useGameActions } from './useGameActions';
import { bonusTiles } from '@/constants/gameConstants';

interface UseGameLogicProps {
  systemBoard: string;
  gameMode: 'single' | 'multiplayer';
  players: string[];
}

export const useGameLogic = ({ systemBoard, gameMode, players }: UseGameLogicProps) => {
  const gameState = useGameState({ gameMode, players });
  const gameAudio = useGameAudio();
  const gameActions = useGameActions({
    systemBoard,
    gameMode,
    players,
    ...gameState,
    ...gameAudio
  });

  return {
    // State
    currentPlayerIndex: gameState.currentPlayerIndex,
    playerPositions: gameState.playerPositions,
    playerATPs: gameState.playerATPs,
    diceValue: gameState.diceValue,
    isRolling: gameState.isRolling,
    gamePhase: gameState.gamePhase,
    showMCQ: gameState.showMCQ,
    showStore: gameState.showStore,
    showPause: gameState.showPause,
    currentMCQ: gameState.currentMCQ,
    musicVolume: gameState.musicVolume,
    currentPlayerPosition: gameState.currentPlayerPosition,
    currentPlayerATP: gameState.currentPlayerATP,
    bonusTiles,
    diceRollAudioRef: gameAudio.diceRollAudioRef,
    ladderAudioRef: gameAudio.ladderAudioRef,
    snakeAudioRef: gameAudio.snakeAudioRef,
    
    // Actions
    setShowStore: gameState.setShowStore,
    setShowPause: gameState.setShowPause,
    setMusicVolume: gameState.setMusicVolume,
    rollDice: gameActions.rollDice,
    handleMCQAnswer: gameActions.handleMCQAnswer,
    handleSwitchCase: gameActions.handleSwitchCase,
    useHint: gameActions.useHint,
    purchaseItem: gameActions.purchaseItem
  };
};
