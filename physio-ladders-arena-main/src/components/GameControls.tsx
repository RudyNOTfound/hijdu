
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface GameControlsProps {
  diceValue: number;
  isRolling: boolean;
  gamePhase: 'waiting' | 'rolling' | 'mcq' | 'moving' | 'paused' | 'ended';
  currentPlayerPosition: number;
  onRollDice: () => void;
}

export const GameControls: React.FC<GameControlsProps> = ({
  diceValue,
  isRolling,
  gamePhase,
  currentPlayerPosition,
  onRollDice
}) => {
  return (
    <Card className="p-4">
      <h3 className="font-bold mb-4">Game Controls</h3>
      
      {/* Dice */}
      <div className="text-center mb-4">
        <div className={`
          w-16 h-16 mx-auto border-2 border-gray-400 rounded-lg flex items-center justify-center text-2xl font-bold mb-2
          ${isRolling ? 'animate-spin bg-yellow-100' : 'bg-white'}
        `}>
          {diceValue}
        </div>
        <Button 
          onClick={onRollDice}
          disabled={gamePhase !== 'waiting'}
          className="w-full"
        >
          {gamePhase === 'waiting' ? 'Roll Dice' : 
           gamePhase === 'rolling' ? 'Rolling...' :
           gamePhase === 'mcq' ? 'Answer MCQ' : 
           gamePhase === 'ended' ? 'Game Over' : 'Moving...'}
        </Button>
      </div>

      {/* Current Player Position Info */}
      <div className="text-center text-sm text-gray-600">
        <p>Position: {currentPlayerPosition}/100</p>
        <p>Progress: {Math.round(currentPlayerPosition)}%</p>
        {gamePhase === 'ended' && (
          <p className="text-green-600 font-bold mt-2">🎉 Game Complete!</p>
        )}
      </div>
    </Card>
  );
};
