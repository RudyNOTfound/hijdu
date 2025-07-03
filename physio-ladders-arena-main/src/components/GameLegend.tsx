
import React from 'react';
import { Card } from '@/components/ui/card';

export const GameLegend: React.FC = () => {
  return (
    <Card className="p-4">
      <h3 className="font-bold mb-2">Legend</h3>
      <div className="space-y-2 text-sm">
        <div className="flex items-center gap-2">
          <span className="text-blue-500">🪜</span>
          <span>Physiological Boost</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-red-500">🐍</span>
          <span>Physiological Challenge</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-green-600">⚡</span>
          <span>Mitochondria (+50 ATP)</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-red-600">☠️</span>
          <span>Toxin Exposure (-20 ATP)</span>
        </div>
      </div>
    </Card>
  );
};
