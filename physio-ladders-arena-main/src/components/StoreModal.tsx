
import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { X, Lightbulb, RefreshCw, Lock, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface StoreModalProps {
  atp: number;
  onClose: () => void;
  onPurchase: (cost: number) => void;
}

export const StoreModal: React.FC<StoreModalProps> = ({ atp, onClose, onPurchase }) => {
  const [unlockedBoards, setUnlockedBoards] = useState<string[]>(() => {
    const saved = localStorage.getItem('unlockedBoards');
    return saved ? JSON.parse(saved) : ['nervous', 'cvs', 'respiratory'];
  });
  const { toast } = useToast();

  const hints = [
    {
      id: 'doctors-help',
      name: "Doctor's Help",
      description: "Eliminates one wrong option from the current MCQ",
      cost: 20,
      icon: <Lightbulb className="w-6 h-6" />
    },
    {
      id: 'switch-case',
      name: "Switch the Case",
      description: "Change the current question to a different one",
      cost: 30,
      icon: <RefreshCw className="w-6 h-6" />
    }
  ];

  const systemBoards = [
    {
      id: 'nervous',
      name: 'NERVOUS SYSTEM',
      description: 'Master neurophysiology and neural pathways',
      cost: 0,
      unlocked: true
    },
    {
      id: 'cvs',
      name: 'CARDIOVASCULAR SYSTEM',
      description: 'Learn heart function and circulation',
      cost: 0,
      unlocked: true
    },
    {
      id: 'respiratory',
      name: 'RESPIRATORY SYSTEM',
      description: 'Understand breathing and gas exchange',
      cost: 0,
      unlocked: true
    },
    {
      id: 'git',
      name: 'GASTROINTESTINAL SYSTEM',
      description: 'Explore digestion and metabolism',
      cost: 100,
      unlocked: false
    },
    {
      id: 'endocrine',
      name: 'ENDOCRINE SYSTEM',
      description: 'Study hormones and regulation',
      cost: 150,
      unlocked: false
    },
    {
      id: 'renal',
      name: 'RENAL SYSTEM',
      description: 'Learn kidney function and fluid balance',
      cost: 120,
      unlocked: false
    },
    {
      id: 'reproductive',
      name: 'REPRODUCTIVE SYSTEM',
      description: 'Understand reproductive physiology',
      cost: 200,
      unlocked: false
    },
    {
      id: 'musculoskeletal',
      name: 'MUSCULOSKELETAL SYSTEM',
      description: 'Master muscle and bone physiology',
      cost: 180,
      unlocked: false
    }
  ];

  useEffect(() => {
    localStorage.setItem('unlockedBoards', JSON.stringify(unlockedBoards));
  }, [unlockedBoards]);

  const handlePurchaseHint = (hint: typeof hints[0]) => {
    if (atp < hint.cost) {
      toast({
        title: "INSUFFICIENT ATP",
        description: `You need ${hint.cost} ATP for ${hint.name}`,
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Hint Purchased!",
      description: `${hint.name} is ready to use in your next MCQ`,
      className: "bg-green-50 border-green-200"
    });
  };

  const handleUnlockBoard = (board: typeof systemBoards[0]) => {
    if (atp < board.cost) {
      toast({
        title: "INSUFFICIENT ATP",
        description: `You need ${board.cost} ATP to unlock ${board.name}`,
        variant: "destructive"
      });
      return;
    }

    setUnlockedBoards(prev => [...prev, board.id]);
    onPurchase(board.cost);
    
    toast({
      title: "System Unlocked!",
      description: `${board.name} is now available to play`,
      className: "bg-purple-50 border-purple-200"
    });
  };

  const isBoardUnlocked = (boardId: string) => {
    return unlockedBoards.includes(boardId);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <Card className="max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-4">
              <Badge variant="secondary" className="text-lg px-3 py-1">
                ATP Store
              </Badge>
              <Badge variant="outline" className="text-lg px-3 py-1">
                💰 {atp} ATP
              </Badge>
            </div>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="w-4 h-4" />
            </Button>
          </div>

          <Tabs defaultValue="hints" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="hints">Hints & Power-ups</TabsTrigger>
              <TabsTrigger value="boards">System Boards</TabsTrigger>
            </TabsList>

            <TabsContent value="hints" className="mt-6">
              <div className="grid gap-4">
                {hints.map((hint) => (
                  <Card key={hint.id} className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-100 rounded-lg">
                          {hint.icon}
                        </div>
                        <div>
                          <h3 className="font-bold">{hint.name}</h3>
                          <p className="text-sm text-gray-600">{hint.description}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-blue-600 mb-2">
                          {hint.cost} ATP
                        </div>
                        <Button
                          onClick={() => handlePurchaseHint(hint)}
                          disabled={atp < hint.cost}
                          size="sm"
                        >
                          Use in Game
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <h3 className="font-bold mb-2">How to Use Hints:</h3>
                <ul className="text-sm space-y-1">
                  <li>• Hints can be used during MCQ questions in the game</li>
                  <li>• Doctor's Help eliminates one wrong answer option</li>
                  <li>• Switch the Case gives you a completely different question</li>
                  <li>• Use hints strategically to maximize your progress!</li>
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="boards" className="mt-6">
              <div className="grid md:grid-cols-2 gap-4">
                {systemBoards.map((board) => {
                  const isUnlocked = isBoardUnlocked(board.id);
                  return (
                    <Card key={board.id} className={`p-4 ${isUnlocked ? 'border-green-200 bg-green-50' : ''}`}>
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="font-bold">{board.name}</h3>
                            {isUnlocked ? (
                              <CheckCircle className="w-5 h-5 text-green-600" />
                            ) : (
                              <Lock className="w-5 h-5 text-gray-400" />
                            )}
                          </div>
                          <p className="text-sm text-gray-600 mb-3">{board.description}</p>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        {board.cost > 0 ? (
                          <div className="text-lg font-bold text-purple-600">
                            {board.cost} ATP
                          </div>
                        ) : (
                          <Badge variant="secondary">Free</Badge>
                        )}
                        
                        {isUnlocked ? (
                          <Badge variant="default" className="bg-green-600">
                            Unlocked
                          </Badge>
                        ) : (
                          <Button
                            onClick={() => handleUnlockBoard(board)}
                            disabled={atp < board.cost}
                            size="sm"
                          >
                            Unlock
                          </Button>
                        )}
                      </div>
                    </Card>
                  );
                })}
              </div>

              <div className="mt-6 p-4 bg-purple-50 border border-purple-200 rounded-lg">
                <h3 className="font-bold mb-2">System Board Benefits:</h3>
                <ul className="text-sm space-y-1">
                  <li>• Each system has unique MCQs tailored to that specialty</li>
                  <li>• Complete a system board to earn +100 ATP bonus</li>
                  <li>• Unlock achievements and track your progress</li>
                  <li>• Build comprehensive knowledge across all body systems</li>
                </ul>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </Card>
    </div>
  );
};
