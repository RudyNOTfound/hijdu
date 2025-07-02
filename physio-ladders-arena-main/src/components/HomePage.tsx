
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Play, Store, Trophy, Calendar, BookOpen, Zap, Users, Brain, Heart, Wind, HelpCircle } from 'lucide-react';
import { PlayerStats } from './PlayerStats';
import { StoreModal } from './StoreModal';
import { HelpModal } from './HelpModal';
import { useToast } from '@/hooks/use-toast';

interface HomePageProps {
  onStartSinglePlayer: (system: string) => void;
  onStartMultiplayer: (system: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ 
  onStartSinglePlayer, 
  onStartMultiplayer 
}) => {
  const [showStore, setShowStore] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [playerATP, setPlayerATP] = useState(() => {
    const saved = localStorage.getItem('playerATP');
    return saved ? parseInt(saved) : 100;
  });
  const [unlockedBoards, setUnlockedBoards] = useState(() => {
    const saved = localStorage.getItem('unlockedBoards');
    return saved ? JSON.parse(saved) : ['nervous', 'cvs', 'respiratory'];
  });
  const { toast } = useToast();

  const systemBoards = [
    {
      id: 'nervous',
      name: 'NERVOUS SYSTEM',
      description: 'Master neurophysiology and neural pathways',
      difficulty: 'Medium',
      color: 'from-blue-400 to-blue-600',
      icon: Brain,
      unlocked: true
    },
    {
      id: 'cvs',
      name: 'CARDIOVASCULAR SYSTEM',
      description: 'Learn heart function and circulation',
      difficulty: 'Medium',
      color: 'from-red-400 to-red-600',
      icon: Heart,
      unlocked: true
    },
    {
      id: 'respiratory',
      name: 'RESPIRATORY SYSTEM',
      description: 'Understand breathing and gas exchange',
      difficulty: 'Easy',
      color: 'from-green-400 to-green-600',
      icon: Wind,
      unlocked: true
    },
    {
      id: 'digestive',
      name: 'DIGESTIVE SYSTEM',
      description: 'Explore digestion and metabolism',
      difficulty: 'Hard',
      color: 'from-orange-400 to-orange-600',
      icon: BookOpen,
      unlocked: false
    },
    {
      id: 'endocrine',
      name: 'ENDOCRINE SYSTEM',
      description: 'Study hormones and regulation',
      difficulty: 'Hard',
      color: 'from-purple-400 to-purple-600',
      icon: Zap,
      unlocked: false
    },
    {
      id: 'renal',
      name: 'RENAL SYSTEM',
      description: 'Learn kidney function and fluid balance',
      difficulty: 'Medium',
      color: 'from-cyan-400 to-cyan-600',
      icon: BookOpen,
      unlocked: false
    },
    {
      id: 'reproductive',
      name: 'REPRODUCTIVE SYSTEM',
      description: 'Understand reproductive physiology',
      difficulty: 'Hard',
      color: 'from-pink-400 to-pink-600',
      icon: BookOpen,
      unlocked: false
    },
    {
      id: 'musculoskeletal',
      name: 'MUSCULOSKELETAL SYSTEM',
      description: 'Master muscle and bone physiology',
      difficulty: 'Medium',
      color: 'from-indigo-400 to-indigo-600',
      icon: BookOpen,
      unlocked: false
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-800 border border-green-200';
      case 'Medium': return 'bg-yellow-100 text-yellow-800 border border-yellow-200';
      case 'Hard': return 'bg-red-100 text-red-800 border border-red-200';
      default: return 'bg-gray-100 text-gray-800 border border-gray-200';
    }
  };

  const handleUnlockBoard = (boardId: string, cost: number) => {
    if (playerATP >= cost) {
      const newATP = playerATP - cost;
      const newUnlocked = [...unlockedBoards, boardId];
      
      setPlayerATP(newATP);
      setUnlockedBoards(newUnlocked);
      
      localStorage.setItem('playerATP', newATP.toString());
      localStorage.setItem('unlockedBoards', JSON.stringify(newUnlocked));
      
      toast({
        title: "System Unlocked! 🎉",
        description: `You can now play the ${systemBoards.find(s => s.id === boardId)?.name} board!`,
        className: "bg-green-50 border-green-200"
      });
    } else {
      toast({
        title: "INSUFFICIENT ATP",
        description: `You need ${cost} ATP to unlock this system. Play more games to earn ATP!`,
        variant: "destructive"
      });
    }
  };

  const handlePurchase = (cost: number) => {
    const newATP = playerATP - cost;
    setPlayerATP(newATP);
    localStorage.setItem('playerATP', newATP.toString());
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 p-6">
      {/* Header */}
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              ATP ARENA
            </h1>
            <p className="text-lg text-gray-600">
              Ascend Through Physiology
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <Button
              onClick={() => setShowHelp(true)}
              variant="outline"
              size="sm"
              className="flex items-center gap-2"
            >
              <HelpCircle className="w-4 h-4" />
              Help
            </Button>
            <PlayerStats atp={playerATP} onStoreClick={() => setShowStore(true)} />
          </div>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="systems" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
            <TabsTrigger value="systems" className="flex items-center gap-2">
              <Play className="w-4 h-4" />
              Systems
            </TabsTrigger>
            <TabsTrigger value="leaderboard" className="flex items-center gap-2">
              <Trophy className="w-4 h-4" />
              Leaderboard
            </TabsTrigger>
            <TabsTrigger value="schedule" className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Schedule
            </TabsTrigger>
          </TabsList>

          <TabsContent value="systems" className="space-y-8">
            {/* System Boards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {systemBoards.map((system) => {
                const isUnlocked = unlockedBoards.includes(system.id);
                const IconComponent = system.icon;
                
                return (
                  <Card 
                    key={system.id} 
                    className={`overflow-hidden transition-all duration-300 hover:shadow-xl ${
                      isUnlocked ? 'cursor-pointer hover:-translate-y-1' : 'opacity-75'
                    }`}
                  >
                    <div className={`h-32 bg-gradient-to-br ${system.color} relative`}>
                      <div className="absolute inset-0 bg-black bg-opacity-20" />
                      
                      {/* System Icon */}
                      <div className="absolute top-4 left-4">
                        <IconComponent className="w-8 h-8 text-white drop-shadow-lg" />
                      </div>
                      
                      <div className="absolute top-4 right-4">
                        <Badge className={getDifficultyColor(system.difficulty)}>
                          {system.difficulty}
                        </Badge>
                      </div>
                      
                      {!isUnlocked && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm font-bold">
                            🔒 Locked
                          </div>
                        </div>
                      )}
                    </div>
                    
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        {system.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-4">
                        {system.description}
                      </p>
                      
                      {isUnlocked ? (
                        <div className="space-y-2">
                          <Button 
                            onClick={() => onStartSinglePlayer(system.id)}
                            className="w-full"
                            size="sm"
                          >
                            <Play className="w-4 h-4 mr-2" />
                            Single Player
                          </Button>
                          <Button 
                            onClick={() => onStartMultiplayer(system.id)}
                            variant="outline" 
                            className="w-full"
                            size="sm"
                          >
                            <Users className="w-4 h-4 mr-2" />
                            Multiplayer
                          </Button>
                        </div>
                      ) : (
                        <Button 
                          onClick={() => handleUnlockBoard(system.id, 200)}
                          variant="outline"
                          className="w-full"
                          size="sm"
                        >
                          Unlock for 200 ATP
                        </Button>
                      )}
                    </div>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          <TabsContent value="leaderboard">
            <Card className="p-8 text-center">
              <Trophy className="w-16 h-16 mx-auto text-yellow-500 mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Leaderboard</h3>
              <p className="text-gray-600 mb-4">
                Compete with other players and track your progress
              </p>
              <p className="text-sm text-gray-500">Coming soon...</p>
            </Card>
          </TabsContent>

          <TabsContent value="schedule">
            <Card className="p-8 text-center">
              <Calendar className="w-16 h-16 mx-auto text-blue-500 mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Study Schedule</h3>
              <p className="text-gray-600 mb-4">
                Plan your physiology learning journey
              </p>
              <p className="text-sm text-gray-500">Coming soon...</p>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Store Modal */}
      {showStore && (
        <StoreModal
          atp={playerATP}
          onClose={() => setShowStore(false)}
          onPurchase={handlePurchase}
        />
      )}

      {/* Help Modal */}
      {showHelp && (
        <HelpModal
          onClose={() => setShowHelp(false)}
        />
      )}
    </div>
  );
};
