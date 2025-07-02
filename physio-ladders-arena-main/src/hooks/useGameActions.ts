
import { useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { snakesAndLadders, bonusTiles, mcqQuestions } from '@/constants/gameConstants';

interface UseGameActionsProps {
  systemBoard: string;
  gameMode: 'single' | 'multiplayer';
  players: string[];
  // State from useGameState
  currentPlayerIndex: number;
  setCurrentPlayerIndex: (value: number | ((prev: number) => number)) => void;
  playerPositions: number[];
  setPlayerPositions: (value: number[]) => void;
  playerATPs: number[];
  setPlayerATPs: (value: number[]) => void;
  diceValue: number;
  setDiceValue: (value: number) => void;
  isRolling: boolean;
  setIsRolling: (value: boolean) => void;
  gamePhase: 'waiting' | 'rolling' | 'mcq' | 'moving' | 'paused' | 'ended';
  setGamePhase: (value: 'waiting' | 'rolling' | 'mcq' | 'moving' | 'paused' | 'ended') => void;
  setShowMCQ: (value: boolean) => void;
  currentMCQ: any;
  setCurrentMCQ: (value: any) => void;
  usedQuestions: Set<number>;
  setUsedQuestions: (value: Set<number> | ((prev: Set<number>) => Set<number>)) => void;
  musicVolume: number;
  currentPlayerPosition: number;
  // Audio functions
  playDiceRollSound: () => void;
  playLadderSound: () => void;
  playSnakeSound: () => void;
  playWinSound: () => void;
}

export const useGameActions = ({
  systemBoard,
  gameMode,
  players,
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
  setShowMCQ,
  currentMCQ,
  setCurrentMCQ,
  usedQuestions,
  setUsedQuestions,
  musicVolume,
  currentPlayerPosition,
  playDiceRollSound,
  playLadderSound,
  playSnakeSound,
  playWinSound
}: UseGameActionsProps) => {
  const { toast } = useToast();

  // Update localStorage for single player mode
  useEffect(() => {
    if (gameMode === 'single') {
      localStorage.setItem('playerATP', playerATPs[0].toString());
    }
  }, [playerATPs, gameMode]);

  // Music volume control
  useEffect(() => {
    localStorage.setItem('musicVolume', musicVolume.toString());
  }, [musicVolume]);

  const getRandomUnusedQuestion = () => {
    const questions = mcqQuestions[systemBoard.toLowerCase() as keyof typeof mcqQuestions] || mcqQuestions.nervous;
    const availableQuestions = questions.filter((_, index) => !usedQuestions.has(index));
    
    // If all questions have been used, reset the used questions set
    if (availableQuestions.length === 0) {
      setUsedQuestions(new Set());
      return questions[Math.floor(Math.random() * questions.length)];
    }
    
    const randomQuestion = availableQuestions[Math.floor(Math.random() * availableQuestions.length)];
    const questionIndex = questions.indexOf(randomQuestion);
    
    // Add this question to the used set
    setUsedQuestions(prev => new Set([...prev, questionIndex]));
    
    return randomQuestion;
  };

  const rollDice = () => {
    if (gamePhase !== 'waiting') return;
    
    playDiceRollSound();
    
    setIsRolling(true);
    setGamePhase('rolling');
    
    // Simulate dice roll animation
    let rollCount = 0;
    const rollInterval = setInterval(() => {
      setDiceValue(Math.floor(Math.random() * 6) + 1);
      rollCount++;
      
      if (rollCount > 10) {
        clearInterval(rollInterval);
        const finalRoll = Math.floor(Math.random() * 6) + 1;
        setDiceValue(finalRoll);
        setIsRolling(false);
        
        // Check if player can move with this roll
        const canMove = canPlayerMove(currentPlayerPosition, finalRoll);
        
        if (!canMove) {
          toast({
            title: `${players[currentPlayerIndex]}: Invalid Move!`,
            description: `Need exactly ${100 - currentPlayerPosition} to reach finish line. Rolled ${finalRoll}.`,
            className: "bg-orange-50 border-orange-200"
          });
          
          // Move to next player in multiplayer mode
          if (gameMode === 'multiplayer') {
            setCurrentPlayerIndex((prev) => (prev + 1) % players.length);
          }
          setGamePhase('waiting');
          return;
        }
        
        // Show MCQ before moving - get unused question
        const randomQuestion = getRandomUnusedQuestion();
        setCurrentMCQ(randomQuestion);
        setShowMCQ(true);
        setGamePhase('mcq');
      }
    }, 100);
  };

  const canPlayerMove = (currentPosition: number, diceRoll: number) => {
    const newPosition = currentPosition + diceRoll;
    // Player can move if they don't exceed 100, or if they land exactly on 100
    return newPosition <= 100;
  };

  const handleMCQAnswer = (selectedIndex: number, isCorrect: boolean) => {
    setShowMCQ(false);
    
    if (isCorrect) {
      const newATPs = [...playerATPs];
      newATPs[currentPlayerIndex] += 10;
      setPlayerATPs(newATPs);
      
      toast({
        title: `Correct! ${players[currentPlayerIndex]} +10 ATP`,
        description: "Great knowledge of physiology!",
        className: "bg-green-50 border-green-200"
      });
      
      // Move player
      movePlayer(diceValue);
    } else {
      toast({
        title: "Incorrect Answer",
        description: `${players[currentPlayerIndex]} - Try again next turn!`,
        variant: "destructive"
      });
      
      // Move to next player in multiplayer mode
      if (gameMode === 'multiplayer') {
        setCurrentPlayerIndex((prev) => (prev + 1) % players.length);
      }
      setGamePhase('waiting');
    }
  };

  const handleSwitchCase = () => {
    // When switching case, get a new unused question
    const newQuestion = getRandomUnusedQuestion();
    setCurrentMCQ(newQuestion);
  };

  const movePlayer = (steps: number) => {
    setGamePhase('moving');
    const newPosition = Math.min(currentPlayerPosition + steps, 100);
    
    // Animate movement
    let currentPos = currentPlayerPosition;
    const moveInterval = setInterval(() => {
      currentPos++;
      const newPositions = [...playerPositions];
      newPositions[currentPlayerIndex] = currentPos;
      setPlayerPositions(newPositions);
      
      if (currentPos >= newPosition) {
        clearInterval(moveInterval);
        
        // Check for win condition first
        if (newPosition >= 100) {
          handleWinCondition();
          return;
        }
        
        // Check for snakes, ladders, or bonus tiles
        setTimeout(() => {
          checkSpecialTiles(newPosition);
        }, 500);
      }
    }, 200);
  };

  const handleWinCondition = () => {
    const newATPs = [...playerATPs];
    newATPs[currentPlayerIndex] += 100;
    setPlayerATPs(newATPs);
    playWinSound();
    toast({
      title: `🎉 ${players[currentPlayerIndex]} Wins!`,
      description: `Mastered the ${systemBoard} system! +100 ATP bonus!`,
      className: "bg-yellow-50 border-yellow-200"
    });
    
    // End the game
    setGamePhase('ended');
  };

  const checkSpecialTiles = (position: number) => {
    let finalPosition = position;
    
    // Check bonus tiles first
    if (bonusTiles[position as keyof typeof bonusTiles]) {
      const bonus = bonusTiles[position as keyof typeof bonusTiles];
      const newATPs = [...playerATPs];
      newATPs[currentPlayerIndex] = Math.max(0, newATPs[currentPlayerIndex] + bonus.reward);
      setPlayerATPs(newATPs);
      
      toast({
        title: `${players[currentPlayerIndex]}: ${bonus.message}`,
        description: bonus.reward > 0 ? "Energy boost!" : "Toxic exposure!",
        className: bonus.reward > 0 ? "bg-green-50 border-green-200" : "bg-red-50 border-red-200"
      });
    }
    
    // Check snakes and ladders
    if (snakesAndLadders[position as keyof typeof snakesAndLadders]) {
      const newPos = snakesAndLadders[position as keyof typeof snakesAndLadders];
      finalPosition = newPos;
      
      setTimeout(() => {
        const newPositions = [...playerPositions];
        newPositions[currentPlayerIndex] = newPos;
        setPlayerPositions(newPositions);
        
        // Check for win condition after snake/ladder movement
        if (newPos >= 100) {
          handleWinCondition();
          return;
        }
        
        if (newPos > position) {
          playLadderSound();
          toast({
            title: `${players[currentPlayerIndex]}: Ladder Climb! 🪜`,
            description: "Your knowledge helped you climb higher!",
            className: "bg-blue-50 border-blue-200"
          });
        } else {
          playSnakeSound();
          toast({
            title: `${players[currentPlayerIndex]}: Snake Bite! 🐍`,
            description: "You encountered a setback, but keep learning!",
            className: "bg-orange-50 border-orange-200"
          });
        }
        
        // Move to next player in multiplayer mode
        if (gameMode === 'multiplayer') {
          setCurrentPlayerIndex((prev) => (prev + 1) % players.length);
        }
        
        setGamePhase('waiting');
      }, 1000);
    } else {
      // Move to next player in multiplayer mode
      if (gameMode === 'multiplayer') {
        setCurrentPlayerIndex((prev) => (prev + 1) % players.length);
      }
      
      setGamePhase('waiting');
    }
  };

  const useHint = (cost: number) => {
    const newATPs = [...playerATPs];
    newATPs[currentPlayerIndex] -= cost;
    setPlayerATPs(newATPs);
  };

  const purchaseItem = (cost: number) => {
    const newATPs = [...playerATPs];
    newATPs[currentPlayerIndex] -= cost;
    setPlayerATPs(newATPs);
  };

  return {
    rollDice,
    handleMCQAnswer,
    handleSwitchCase,
    useHint,
    purchaseItem
  };
};
