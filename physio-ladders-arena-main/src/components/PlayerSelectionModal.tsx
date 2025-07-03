
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Users, Play } from 'lucide-react';

interface PlayerSelectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStartGame: (players: string[]) => void;
}

export const PlayerSelectionModal: React.FC<PlayerSelectionModalProps> = ({
  isOpen,
  onClose,
  onStartGame
}) => {
  const [numberOfPlayers, setNumberOfPlayers] = useState(2);
  const [playerNames, setPlayerNames] = useState<string[]>(['Player 1', 'Player 2']);

  const handleNumberOfPlayersChange = (value: number) => {
    const clampedValue = Math.max(2, Math.min(6, value));
    setNumberOfPlayers(clampedValue);
    
    const newPlayerNames = Array.from({ length: clampedValue }, (_, i) => 
      playerNames[i] || `Player ${i + 1}`
    );
    setPlayerNames(newPlayerNames);
  };

  const handlePlayerNameChange = (index: number, name: string) => {
    const newPlayerNames = [...playerNames];
    newPlayerNames[index] = name || `Player ${index + 1}`;
    setPlayerNames(newPlayerNames);
  };

  const handleStartGame = () => {
    if (playerNames.some(name => name.trim() === '')) {
      return;
    }
    onStartGame(playerNames);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Users className="w-5 h-5" />
            Multiplayer Setup
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">
              Number of Players (2-6)
            </label>
            <Input
              type="number"
              min={2}
              max={6}
              value={numberOfPlayers}
              onChange={(e) => handleNumberOfPlayersChange(parseInt(e.target.value) || 2)}
              className="w-full"
            />
          </div>

          <div className="space-y-3">
            <label className="block text-sm font-medium">Player Names</label>
            {playerNames.map((name, index) => (
              <Input
                key={index}
                value={name}
                onChange={(e) => handlePlayerNameChange(index, e.target.value)}
                placeholder={`Player ${index + 1}`}
                className="w-full"
              />
            ))}
          </div>

          <div className="flex gap-3">
            <Button variant="outline" onClick={onClose} className="flex-1">
              Cancel
            </Button>
            <Button 
              onClick={handleStartGame} 
              className="flex-1 flex items-center gap-2"
              disabled={playerNames.some(name => name.trim() === '')}
            >
              <Play className="w-4 h-4" />
              Start Game
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
