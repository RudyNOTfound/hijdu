
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Play, Home, Store, Volume2, VolumeX } from 'lucide-react';

interface PauseMenuProps {
  onResume: () => void;
  onHome: () => void;
  onStore: () => void;
  musicVolume: number;
  onVolumeChange: (volume: number) => void;
}

export const PauseMenu: React.FC<PauseMenuProps> = ({ 
  onResume, 
  onHome, 
  onStore, 
  musicVolume, 
  onVolumeChange 
}) => {
  const handleVolumeChange = (value: number[]) => {
    onVolumeChange(value[0]);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <Card className="max-w-md w-full p-6">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold mb-2">Game Paused</h2>
          <p className="text-gray-600">Take a break and review your progress</p>
        </div>

        <div className="space-y-3">
          <Button onClick={onResume} className="w-full flex items-center gap-2">
            <Play className="w-4 h-4" />
            Resume Game
          </Button>
          
          <Button onClick={onStore} variant="outline" className="w-full flex items-center gap-2">
            <Store className="w-4 h-4" />
            Visit Store
          </Button>
          
          <Button onClick={onHome} variant="outline" className="w-full flex items-center gap-2">
            <Home className="w-4 h-4" />
            Back to Home
          </Button>
        </div>

        {/* Volume Control */}
        <div className="mt-6 p-4 bg-gray-50 border border-gray-200 rounded-lg">
          <div className="flex items-center gap-3 mb-2">
            {musicVolume === 0 ? (
              <VolumeX className="w-5 h-5 text-gray-500" />
            ) : (
              <Volume2 className="w-5 h-5 text-gray-500" />
            )}
            <span className="font-medium">Music Volume</span>
          </div>
          <Slider
            value={[musicVolume]}
            onValueChange={handleVolumeChange}
            max={1}
            min={0}
            step={0.1}
            className="w-full"
          />
          <div className="text-sm text-gray-500 mt-1">
            {Math.round(musicVolume * 100)}%
          </div>
        </div>

        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <h3 className="font-bold mb-2">Study Tip:</h3>
          <p className="text-sm">Use this break to review the physiology concepts you've encountered. Each question is designed to reinforce key medical knowledge!</p>
        </div>
      </Card>
    </div>
  );
};
