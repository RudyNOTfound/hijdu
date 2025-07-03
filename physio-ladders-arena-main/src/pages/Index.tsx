
import React, { useState } from 'react';
import { HomePage } from '@/components/HomePage';
import { GameBoard } from '@/components/GameBoard';
import { PlayerSelectionModal } from '@/components/PlayerSelectionModal';
import { WelcomePage } from '@/components/WelcomePage';

const Index = () => {
  const [currentView, setCurrentView] = useState<'welcome' | 'home' | 'game'>('welcome');
  const [selectedSystem, setSelectedSystem] = useState<string>('');
  const [showPlayerSelection, setShowPlayerSelection] = useState(false);
  const [gameMode, setGameMode] = useState<'single' | 'multiplayer'>('single');
  const [players, setPlayers] = useState<string[]>([]);

  const handleWelcomeContinue = () => {
    setCurrentView('home');
  };

  const handleStartSinglePlayer = (system: string) => {
    setSelectedSystem(system);
    setGameMode('single');
    setPlayers(['Player 1']);
    setCurrentView('game');
  };

  const handleStartMultiplayer = (system: string) => {
    setSelectedSystem(system);
    setGameMode('multiplayer');
    setShowPlayerSelection(true);
  };

  const handlePlayersSelected = (playerNames: string[]) => {
    setPlayers(playerNames);
    setCurrentView('game');
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    setSelectedSystem('');
    setPlayers([]);
    setGameMode('single');
  };

  return (
    <div>
      {currentView === 'welcome' ? (
        <WelcomePage onContinue={handleWelcomeContinue} />
      ) : currentView === 'home' ? (
        <HomePage 
          onStartSinglePlayer={handleStartSinglePlayer}
          onStartMultiplayer={handleStartMultiplayer}
        />
      ) : (
        <GameBoard 
          systemBoard={selectedSystem} 
          onBackToHome={handleBackToHome}
          gameMode={gameMode}
          players={players}
        />
      )}
      
      <PlayerSelectionModal
        isOpen={showPlayerSelection}
        onClose={() => setShowPlayerSelection(false)}
        onStartGame={handlePlayersSelected}
      />
    </div>
  );
};

export default Index;
