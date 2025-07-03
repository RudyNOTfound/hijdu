
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Store, User } from 'lucide-react';

interface PlayerStatsProps {
  atp: number;
  onStoreClick: () => void;
}

export const PlayerStats: React.FC<PlayerStatsProps> = ({ atp, onStoreClick }) => {
  return (
    <div className="flex items-center gap-3 bg-white rounded-lg p-2 shadow-sm border">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
          <User className="w-4 h-4 text-white" />
        </div>
        <span className="font-medium text-sm">Student</span>
      </div>
      
      <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 font-bold">
        💰 {atp} ATP
      </Badge>
      
      <Button variant="outline" size="sm" onClick={onStoreClick}>
        <Store className="w-4 h-4 mr-1" />
        Store
      </Button>
    </div>
  );
};
