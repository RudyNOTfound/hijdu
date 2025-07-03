
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Pause } from 'lucide-react';
import { MCQModal } from './MCQModal';
import { StoreModal } from './StoreModal';
import { PauseMenu } from './PauseMenu';
import { PlayerStats } from './PlayerStats';
import { GameBoardDisplay } from './GameBoardDisplay';
import { GameControls } from './GameControls';
import { MultiplayerPlayerList } from './MultiplayerPlayerList';
import { GameLegend } from './GameLegend';
import { useGameLogic } from '@/hooks/useGameLogic';

interface GameBoardProps {
  systemBoard: string;
  onBackToHome: () => void;
  gameMode: 'single' | 'multiplayer';
  players: string[];
}

export const GameBoard: React.FC<GameBoardProps> = ({ 
  systemBoard, 
  onBackToHome, 
  gameMode, 
  players 
}) => {
  const {
    // State
    currentPlayerIndex,
    playerPositions,
    playerATPs,
    diceValue,
    isRolling,
    gamePhase,
    showMCQ,
    showStore,
    showPause,
    currentMCQ,
    musicVolume,
    currentPlayerPosition,
    currentPlayerATP,
    bonusTiles,
    diceRollAudioRef,
    ladderAudioRef,
    snakeAudioRef,
    
    // Actions
    setShowStore,
    setShowPause,
    setMusicVolume,
    rollDice,
    handleMCQAnswer,
    handleSwitchCase,
    useHint,
    purchaseItem
  } = useGameLogic({ systemBoard, gameMode, players });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 p-4 overflow-hidden">
      {/* Audio elements for sound effects */}
      <audio ref={diceRollAudioRef} preload="auto">
        <source src="data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmMaBjyO1fPQfycFJHfH79+SQwoUXrPn66pWFAlFnt7tv2UbBz+M0/HVfyUELHvG7eGVRgsQ" type="audio/wav" />
      </audio>
      <audio ref={ladderAudioRef} preload="auto">
        <source src="data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmMaBjyO1fPQfycFJHfH79+SQwoUXrPn66pWFAlFnt7tv2UbBz+M0/HVfyUELHvG7eGVRgsQWbXo66hVFAlFnt7tv2UbBz+M0/HVfyUELHvG7eGVRgsQWrTp66pWFAlFnt7tv2UbBz+M0/HVfyUELHvG7eGVRgsQ" type="audio/wav" />
      </audio>
      <audio ref={snakeAudioRef} preload="auto">
        <source src="data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmMaBjyO1fPQfycFJHfH79+SQwoUXrPn66pWFAlFnt7tv2UbBz+M0/HVfyUELHvG7eGVRgsQKW+96eCVQwoUXrTp66hVFApGn+DyvmMaBjyO1fPQfycFJHfH79+SQwoUXrPn66pWFAlFnt7tv2UbBz+M0/HVfyUELHvG7eGVRgsQ" type="audio/wav" />
      </audio>

      {/* Top Bar */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-4">
          <Button variant="outline" onClick={onBackToHome}>
            ← Home
          </Button>
          <Badge variant="secondary" className="text-lg px-4 py-2">
            {systemBoard} System
          </Badge>
          {gameMode === 'multiplayer' && (
            <Badge variant="outline" className="text-sm px-3 py-1">
              {players[currentPlayerIndex]}'s Turn
            </Badge>
          )}
        </div>
        
        <PlayerStats atp={currentPlayerATP} onStoreClick={() => setShowStore(true)} />
        
        <Button variant="outline" onClick={() => setShowPause(true)}>
          <Pause className="w-4 h-4" />
        </Button>
      </div>

      <div className="max-w-6xl mx-auto h-[calc(100vh-8rem)]">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 h-full">
          {/* Game Board */}
          <div className="lg:col-span-3 flex items-center justify-center">
            <GameBoardDisplay
              playerPositions={playerPositions}
              players={players}
              currentPlayerIndex={currentPlayerIndex}
              bonusTiles={bonusTiles}
            />
          </div>

          {/* Game Controls */}
          <div className="space-y-4 overflow-y-auto">
            {/* Multiplayer Player List */}
            {gameMode === 'multiplayer' && (
              <MultiplayerPlayerList
                players={players}
                playerPositions={playerPositions}
                playerATPs={playerATPs}
                currentPlayerIndex={currentPlayerIndex}
              />
            )}

            <GameControls
              diceValue={diceValue}
              isRolling={isRolling}
              gamePhase={gamePhase}
              currentPlayerPosition={currentPlayerPosition}
              onRollDice={rollDice}
            />

            <GameLegend />
          </div>
        </div>
      </div>

      {/* Modals */}
      {showMCQ && currentMCQ && (
        <MCQModal
          question={currentMCQ}
          onAnswer={handleMCQAnswer}
          onClose={() => setShowStore(false)}
          atp={currentPlayerATP}
          onUseHint={useHint}
          onSwitchCase={handleSwitchCase}
        />
      )}

      {showStore && (
        <StoreModal
          atp={currentPlayerATP}
          onClose={() => setShowStore(false)}
          onPurchase={purchaseItem}
        />
      )}

      {showPause && (
        <PauseMenu
          onResume={() => setShowPause(false)}
          onHome={onBackToHome}
          onStore={() => {
            setShowPause(false);
            setShowStore(true);
          }}
          musicVolume={musicVolume}
          onVolumeChange={setMusicVolume}
        />
      )}
    </div>
  );
};
