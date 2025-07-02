import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { X, Lightbulb, RefreshCw } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface MCQModalProps {
  question: {
    question: string;
    options: string[];
    correct: number;
    explanation: string;
  };
  onAnswer: (selectedIndex: number, isCorrect: boolean) => void;
  onClose: () => void;
  atp: number;
  onUseHint: (cost: number) => void;
  onSwitchCase?: () => void;
}

export const MCQModal: React.FC<MCQModalProps> = ({
  question,
  onAnswer,
  onClose,
  atp,
  onUseHint,
  onSwitchCase
}) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [eliminatedOption, setEliminatedOption] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const { toast } = useToast();

  const handleDoctorsHelp = () => {
    if (atp < 20) {
      toast({
        title: "INSUFFICIENT ATP",
        description: "You need 20 ATP for Doctor's Help",
        variant: "destructive"
      });
      return;
    }

    // Eliminate one wrong option
    const wrongOptions = question.options
      .map((_, index) => index)
      .filter(index => index !== question.correct);
    
    const randomWrong = wrongOptions[Math.floor(Math.random() * wrongOptions.length)];
    setEliminatedOption(randomWrong);
    onUseHint(20);
    
    toast({
      title: "Doctor's Help Used!",
      description: "One wrong option eliminated. -20 ATP",
      className: "bg-blue-50 border-blue-200"
    });
  };

  const handleSwitchCase = () => {
    if (atp < 30) {
      toast({
        title: "INSUFFICIENT ATP",
        description: "You need 30 ATP to Switch the Case",
        variant: "destructive"
      });
      return;
    }

    onUseHint(30);
    toast({
      title: "Case Switched!",
      description: "New question generated. -30 ATP",
      className: "bg-purple-50 border-purple-200"
    });
    
    // Call the switch case function and close modal
    if (onSwitchCase) {
      onSwitchCase();
    }
    onClose();
  };

  const handleAnswer = () => {
    if (selectedOption === null) return;
    
    const isCorrect = selectedOption === question.correct;
    setShowExplanation(true);
    
    setTimeout(() => {
      onAnswer(selectedOption, isCorrect);
    }, 30000); // Changed from 2000 to 30000 (30 seconds)
  };

  const handleContinue = () => {
    if (selectedOption === null) return;
    const isCorrect = selectedOption === question.correct;
    onAnswer(selectedOption, isCorrect);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <Card className="max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-6">
            <Badge variant="secondary" className="text-lg px-3 py-1">
              MCQ Challenge
            </Badge>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="w-4 h-4" />
            </Button>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-bold mb-4">{question.question}</h2>
            
            <div className="space-y-3">
              {question.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => !showExplanation && setSelectedOption(index)}
                  disabled={showExplanation || eliminatedOption === index}
                  className={`
                    w-full p-4 text-left border-2 rounded-lg transition-colors
                    ${eliminatedOption === index 
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed opacity-50' 
                      : selectedOption === index 
                        ? 'border-blue-500 bg-blue-50' 
                        : 'border-gray-200 hover:border-gray-300'
                    }
                    ${showExplanation && index === question.correct 
                      ? 'border-green-500 bg-green-50' 
                      : showExplanation && selectedOption === index && index !== question.correct
                        ? 'border-red-500 bg-red-50'
                        : ''
                    }
                  `}
                >
                  <div className="flex items-center">
                    <span className="w-6 h-6 rounded-full border-2 mr-3 flex items-center justify-center text-sm font-semibold">
                      {String.fromCharCode(65 + index)}
                    </span>
                    <span className={eliminatedOption === index ? 'line-through' : ''}>
                      {option}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {showExplanation && (
            <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <h3 className="font-bold mb-2">Explanation:</h3>
              <p className="text-sm">{question.explanation}</p>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-3">
            {!showExplanation ? (
              <>
                <Button
                  onClick={handleDoctorsHelp}
                  variant="outline"
                  disabled={atp < 20 || eliminatedOption !== null}
                  className="flex items-center gap-2"
                >
                  <Lightbulb className="w-4 h-4" />
                  Doctor's Help (20 ATP)
                </Button>
                
                <Button
                  onClick={handleSwitchCase}
                  variant="outline"
                  disabled={atp < 30}
                  className="flex items-center gap-2"
                >
                  <RefreshCw className="w-4 h-4" />
                  Switch Case (30 ATP)
                </Button>
                
                <Button
                  onClick={handleAnswer}
                  disabled={selectedOption === null}
                  className="flex-1"
                >
                  Submit Answer
                </Button>
              </>
            ) : (
              <Button
                onClick={handleContinue}
                className="w-full"
              >
                Continue
              </Button>
            )}
          </div>

          <div className="mt-4 text-center text-sm text-gray-600">
            Correct answer: +10 ATP | Wrong answer: No movement
          </div>
        </div>
      </Card>
    </div>
  );
};
