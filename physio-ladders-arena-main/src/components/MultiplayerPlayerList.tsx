
import React from 'react';
import { Card } from '@/components/ui/card';

interface MultiplayerPlayerListProps {
  players: string[];
  playerPositions: number[];
  playerATPs: number[];
  currentPlayerIndex: number;
}

export const MultiplayerPlayerList: React.FC<MultiplayerPlayerListProps> = ({
  players,
  playerPositions,
  playerATPs,
  currentPlayerIndex
}) => {
  // Player colors for multiplayer
  const playerColors = ['bg-yellow-500', 'bg-blue-500', 'bg-red-500', 'bg-green-500', 'bg-purple-500', 'bg-pink-500'];

  return (
    <Card className="p-4">
      <h3 className="font-bold mb-2">Players</h3>
      <div className="space-y-2">
        {players.map((player, index) => (
          <div 
            key={index}
            className={`flex items-center justify-between p-2 rounded ${
              index === currentPlayerIndex ? 'bg-blue-100 border border-blue-300' : 'bg-gray-50'
            }`}
          >
            <div className="flex items-center gap-2">
              <div className={`w-4 h-4 ${playerColors[index]} rounded-full`} />
              <span className="text-sm font-medium">{player}</span>
            </div>
            <div className="text-xs text-gray-600">
              Pos: {playerPositions[index]}, ATP: {playerATPs[index]}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
