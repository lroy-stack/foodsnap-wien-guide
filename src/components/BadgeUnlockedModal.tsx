
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

interface BadgeUnlockedModalProps {
  badge: {
    name: string;
    icon: string;
    description: string;
  };
  onClose: () => void;
  onViewCollection: () => void;
}

const BadgeUnlockedModal: React.FC<BadgeUnlockedModalProps> = ({
  badge,
  onClose,
  onViewCollection
}) => {
  const { t } = useLanguage();
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg w-4/5 max-w-md mx-auto p-6 animate-badge-unlock">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">{t("badges.unlocked")}</h2>
          
          <div className="relative mx-auto w-24 h-24 mb-4">
            <div className="absolute inset-0 bg-austria-gold rounded-full opacity-25 animate-pulse"></div>
            <div className="relative bg-austria-red rounded-full w-full h-full p-4 flex items-center justify-center">
              <img src={badge.icon} alt={badge.name} className="w-12 h-12" />
            </div>
          </div>
          
          <h3 className="text-xl font-semibold">{badge.name}</h3>
          <p className="text-gray-600 mt-2">{badge.description}</p>
          
          <div className="flex flex-col gap-2 mt-6">
            <Button
              onClick={onViewCollection}
              variant="outline"
              className="w-full border-gray-300"
            >
              {t("badges.viewCollection")}
            </Button>
            
            <Button
              onClick={onClose}
              className="w-full bg-austria-red hover:bg-red-700"
            >
              {t("badges.continue")}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BadgeUnlockedModal;
