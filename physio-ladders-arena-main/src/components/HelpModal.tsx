
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { X, Zap, Brain, Trophy, Users, Play, Lightbulb, RefreshCw } from 'lucide-react';

interface HelpModalProps {
  onClose: () => void;
}

export const HelpModal: React.FC<HelpModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <Card className="max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                How to Play ATP ARENA
              </h2>
              <p className="text-lg text-gray-600">
                Ascend Through Physiology - A Gamified Learning Experience
              </p>
            </div>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="w-4 h-4" />
            </Button>
          </div>

          <div className="space-y-8">
            {/* Game Overview */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <Brain className="w-6 h-6 text-blue-500" />
                <h3 className="text-xl font-semibold">Game Overview</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                ATP ARENA is a physiology learning game where you progress through a board by answering 
                multiple-choice questions correctly. Your goal is to be the first player to reach position 100 
                while mastering different body systems.
              </p>
            </section>

            {/* Game Modes */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <Users className="w-6 h-6 text-green-500" />
                <h3 className="text-xl font-semibold">Game Modes</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Play className="w-5 h-5 text-blue-600" />
                    <h4 className="font-semibold">Single Player</h4>
                  </div>
                  <p className="text-sm text-gray-600">
                    Play solo and challenge yourself to master physiology concepts at your own pace.
                  </p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="w-5 h-5 text-green-600" />
                    <h4 className="font-semibold">Multiplayer</h4>
                  </div>
                  <p className="text-sm text-gray-600">
                    Compete with friends and see who can master physiology first!
                  </p>
                </div>
              </div>
            </section>

            {/* How to Play */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <Play className="w-6 h-6 text-purple-500" />
                <h3 className="text-xl font-semibold">How to Play</h3>
              </div>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <Badge className="bg-purple-100 text-purple-800 min-w-8 h-8 flex items-center justify-center">1</Badge>
                  <div>
                    <h4 className="font-semibold mb-1">Roll the Dice</h4>
                    <p className="text-gray-600 text-sm">Click "Roll Dice" to get a number between 1-6.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Badge className="bg-purple-100 text-purple-800 min-w-8 h-8 flex items-center justify-center">2</Badge>
                  <div>
                    <h4 className="font-semibold mb-1">Answer MCQ</h4>
                    <p className="text-gray-600 text-sm">Answer the physiology question correctly to move forward.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Badge className="bg-purple-100 text-purple-800 min-w-8 h-8 flex items-center justify-center">3</Badge>
                  <div>
                    <h4 className="font-semibold mb-1">Move on Board</h4>
                    <p className="text-gray-600 text-sm">If correct, move the dice number of spaces. If wrong, stay put!</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Badge className="bg-purple-100 text-purple-800 min-w-8 h-8 flex items-center justify-center">4</Badge>
                  <div>
                    <h4 className="font-semibold mb-1">Reach 100</h4>
                    <p className="text-gray-600 text-sm">Be the first to reach position 100 exactly to win!</p>
                  </div>
                </div>
              </div>
            </section>

            {/* ATP System */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <Zap className="w-6 h-6 text-yellow-500" />
                <h3 className="text-xl font-semibold">ATP (Energy) System</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <h4 className="font-semibold text-green-800 mb-2">Earn ATP</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Correct answer: +10 ATP</li>
                    <li>• Winning game: +100 ATP</li>
                    <li>• Bonus tiles: Variable ATP</li>
                  </ul>
                </div>
                <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                  <h4 className="font-semibold text-red-800 mb-2">Spend ATP</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Doctor's Help: -20 ATP</li>
                    <li>• Switch Case: -30 ATP</li>
                    <li>• Unlock Systems: -200 ATP</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Help Tools */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <Lightbulb className="w-6 h-6 text-orange-500" />
                <h3 className="text-xl font-semibold">Help Tools</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Lightbulb className="w-5 h-5 text-blue-600" />
                    <h4 className="font-semibold">Doctor's Help (20 ATP)</h4>
                  </div>
                  <p className="text-sm text-gray-600">
                    Eliminates one wrong answer option to improve your chances.
                  </p>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                  <div className="flex items-center gap-2 mb-2">
                    <RefreshCw className="w-5 h-5 text-purple-600" />
                    <h4 className="font-semibold">Switch Case (30 ATP)</h4>
                  </div>
                  <p className="text-sm text-gray-600">
                    Get a completely new question if the current one is too difficult.
                  </p>
                </div>
              </div>
            </section>

            {/* Winning */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <Trophy className="w-6 h-6 text-yellow-500" />
                <h3 className="text-xl font-semibold">Winning the Game</h3>
              </div>
              <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <p className="text-gray-700">
                  <strong>Important:</strong> You must land exactly on position 100 to win! 
                  If you're on position 99, you need to roll exactly 1. If you roll a higher number, 
                  you'll stay in the same position and try again next turn.
                </p>
              </div>
            </section>

            {/* Special Tiles */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-blue-500 rounded" />
                <h3 className="text-xl font-semibold">Special Board Tiles</h3>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                  <h4 className="font-semibold text-green-800 mb-1">🪜 Ladders</h4>
                  <p className="text-sm text-gray-600">Boost you forward on the board</p>
                </div>
                <div className="p-3 bg-red-50 rounded-lg border border-red-200">
                  <h4 className="font-semibold text-red-800 mb-1">🐍 Snakes</h4>
                  <p className="text-sm text-gray-600">Slide you backward on the board</p>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-blue-800 mb-1">⚡ Bonus</h4>
                  <p className="text-sm text-gray-600">Give or take ATP points</p>
                </div>
              </div>
            </section>
          </div>

          <div className="mt-8 pt-6 border-t">
            <Button onClick={onClose} className="w-full" size="lg">
              Start Playing!
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};
