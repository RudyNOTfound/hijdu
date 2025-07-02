
import React from 'react';
import { Card } from '@/components/ui/card';

interface GameBoardDisplayProps {
  playerPositions: number[];
  players: string[];
  currentPlayerIndex: number;
  bonusTiles: Record<number, { type: string; reward: number; message: string }>;
}

export const GameBoardDisplay: React.FC<GameBoardDisplayProps> = ({
  playerPositions,
  players,
  currentPlayerIndex,
  bonusTiles
}) => {
  // Position coordinates for each tile - adjusted for better alignment with board tiles
  const getPlayerPosition = (position: number) => {
    const row = Math.floor((position - 1) / 10);
    const col = (row % 2 === 0) ? (position - 1) % 10 : 9 - ((position - 1) % 10);
    
    // Adjusted calculations for better tile alignment
    const left = (col * 10) + 5;
    const bottom = (row * 10) + 5;
    
    return { left: `${left}%`, bottom: `${bottom}%` };
  };

  // Player colors and shapes for better graphics
  const playerStyles = [
    { bg: 'bg-yellow-400', border: 'border-yellow-600', emoji: '🟡' },
    { bg: 'bg-blue-400', border: 'border-blue-600', emoji: '🔵' },
    { bg: 'bg-red-400', border: 'border-red-600', emoji: '🔴' },
    { bg: 'bg-green-400', border: 'border-green-600', emoji: '🟢' },
    { bg: 'bg-purple-400', border: 'border-purple-600', emoji: '🟣' },
    { bg: 'bg-pink-400', border: 'border-pink-600', emoji: '🩷' }
  ];

  return (
    <Card className="p-4 bg-black">
      <div className="relative w-full max-w-2xl mx-auto bg-black rounded-lg">
        <img 
          src="/lovable-uploads/a5adee1b-1209-4018-b9d1-7e9f5dec182d.png" 
          alt="Snakes and Ladders Board"
          className="w-full h-auto rounded-lg shadow-lg object-contain max-h-[60vh]"
          style={{ 
            width: 'calc(100% + 10px)', 
            height: 'calc(100% + 10px)',
            filter: 'drop-shadow(0 4px 8px rgba(255, 255, 255, 0.1))'
          }}
        />
        
        {/* Bonus tile symbols */}
        {Object.entries(bonusTiles).map(([position, tile]) => (
          <div 
            key={position}
            className="absolute w-5 h-5 flex items-center justify-center text-lg z-5"
            style={getPlayerPosition(parseInt(position))}
          >
            {tile.type === 'mitochondria' ? '⚡' : '☠️'}
          </div>
        ))}
        
        {/* Player position indicators */}
        {playerPositions.map((position, index) => (
          <div 
            key={index}
            className={`absolute w-7 h-7 ${playerStyles[index].bg} ${playerStyles[index].border} rounded-full border-2 transition-all duration-500 z-10 flex items-center justify-center shadow-lg ${
              index === currentPlayerIndex ? 'animate-pulse scale-110' : ''
            }`}
            style={{
              ...getPlayerPosition(position),
              transform: `translate(${index * 3}px, ${index * -3}px)`
            }}
            title={`${players[index]} - Position ${position}`}
          >
            <span className="text-sm">{playerStyles[index].emoji}</span>
          </div>
        ))}
      </div>
    </Card>
  );
};
