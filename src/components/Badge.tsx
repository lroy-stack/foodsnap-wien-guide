
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Lock } from "lucide-react";

interface BadgeProps {
  id: string;
  name: string;
  description: string;
  icon: string;
  progress?: {
    current: number;
    total: number;
  };
  isLocked?: boolean;
  onClick?: () => void;
}

const Badge: React.FC<BadgeProps> = ({
  id,
  name,
  description,
  icon,
  progress,
  isLocked = false,
  onClick
}) => {
  const { t } = useLanguage();
  
  return (
    <div 
      className="badge-icon flex items-center p-4 bg-white rounded-lg shadow-sm border border-gray-100"
      onClick={onClick}
    >
      <div className="relative mr-4">
        <div className={`w-16 h-16 rounded-full flex items-center justify-center ${isLocked ? 'bg-gray-200' : 'bg-austria-red'}`}>
          {isLocked ? (
            <Lock className="text-gray-400" size={24} />
          ) : (
            <img src={icon} alt={name} className="w-10 h-10" />
          )}
        </div>
      </div>
      
      <div className="flex-1">
        <h3 className="font-semibold text-lg">{name}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
        
        {progress && (
          <div className="mt-2">
            <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-austria-red"
                style={{ width: `${(progress.current / progress.total) * 100}%` }}
              />
            </div>
            <p className="text-xs text-gray-500 mt-1">
              {progress.current}/{progress.total}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Badge;
