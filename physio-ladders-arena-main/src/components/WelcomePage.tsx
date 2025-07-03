
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Zap, Play, ArrowRight, Brain, Heart, Wind } from 'lucide-react';

interface WelcomePageProps {
  onContinue: () => void;
}

export const WelcomePage: React.FC<WelcomePageProps> = ({ onContinue }) => {
  const [showContent, setShowContent] = useState(false);
  const [currentPhase, setCurrentPhase] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const phases = [0, 1, 2, 3];
    const interval = setInterval(() => {
      setCurrentPhase(prev => (prev + 1) % phases.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const floatingIcons = [
    { Icon: Brain, delay: '0s', position: 'top-20 left-20' },
    { Icon: Heart, delay: '0.5s', position: 'top-32 right-32' },
    { Icon: Wind, delay: '1s', position: 'bottom-40 left-16' },
    { Icon: Zap, delay: '1.5s', position: 'bottom-20 right-20' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating ATP molecules */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-yellow-400 rounded-full animate-pulse opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
        
        {/* Floating system icons */}
        {floatingIcons.map(({ Icon, delay, position }, index) => (
          <div
            key={index}
            className={`absolute ${position} opacity-20 animate-bounce`}
            style={{ animationDelay: delay, animationDuration: '3s' }}
          >
            <Icon className="w-12 h-12 text-white" />
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-8">
        <div className={`text-center max-w-4xl transition-all duration-1000 ${
          showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          
          {/* ATP Symbol Animation */}
          <div className="mb-8 relative">
            <div className="inline-block relative">
              <Zap className="w-24 h-24 text-yellow-400 mx-auto animate-pulse" />
              <div className="absolute -inset-4 border-2 border-yellow-400 rounded-full animate-ping opacity-30" />
              <div className="absolute -inset-8 border border-yellow-400 rounded-full animate-ping opacity-20" style={{ animationDelay: '0.5s' }} />
            </div>
          </div>

          {/* Game Title with Typing Effect */}
          <div className="mb-6">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 tracking-wider">
              <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                ACCLIVE
              </span>
            </h1>
            
            <div className="h-16 flex items-center justify-center">
              <p className={`text-2xl md:text-3xl text-blue-200 font-light transition-opacity duration-500 ${
                currentPhase >= 1 ? 'opacity-100' : 'opacity-0'
              }`}>
                Climb with Concepts, Conquer with Confidence
              </p>
            </div>
          </div>

          {/* Subtitle Animation */}
          <div className="mb-12">
            <p className={`text-xl md:text-2xl text-gray-300 font-medium transition-all duration-700 ${
              currentPhase >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              A Gamified Version of Physiology
            </p>
          </div>

          {/* Interactive Elements */}
          <div className={`space-y-6 transition-all duration-700 delay-300 ${
            currentPhase >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            
            {/* Game Features Preview */}
            <div className="grid md:grid-cols-3 gap-6 mb-8 max-w-3xl mx-auto">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 border border-white border-opacity-20">
                <Brain className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <p className="text-white text-sm">Master Neural Pathways</p>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 border border-white border-opacity-20">
                <Heart className="w-8 h-8 text-red-400 mx-auto mb-2" />
                <p className="text-white text-sm">Explore Cardiovascular Systems</p>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 border border-white border-opacity-20">
                <Wind className="w-8 h-8 text-green-400 mx-auto mb-2" />
                <p className="text-white text-sm">Understand Respiratory Function</p>
              </div>
            </div>

            {/* CTA Button */}
            <Button
              onClick={onContinue}
              size="lg"
              className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-full text-xl shadow-2xl transform hover:scale-105 transition-all duration-300 group"
            >
              <Play className="w-6 h-6 mr-3 group-hover:translate-x-1 transition-transform" />
              Enter the Arena
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
            </Button>

            <p className="text-gray-400 text-sm mt-4 animate-pulse">
              Click to begin your physiological journey
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent opacity-50" />
    </div>
  );
};
