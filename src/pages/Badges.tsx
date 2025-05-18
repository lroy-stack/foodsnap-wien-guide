
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import BottomNavigation from "@/components/BottomNavigation";
import Badge from "@/components/Badge";
import { useNavigate } from "react-router-dom";

const Badges = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  
  const badges = {
    photography: [
      {
        id: "first-snap",
        name: "First Snap",
        description: "",
        icon: "/lovable-uploads/0ec32a65-596f-4033-bc8f-f85cd8fb2806.png",
        isLocked: false
      },
      {
        id: "food-photographer",
        name: "Food Photographer",
        description: "5 photos",
        icon: "/lovable-uploads/0ec32a65-596f-4033-bc8f-f85cd8fb2806.png",
        isLocked: false,
        progress: { current: 5, total: 5 }
      },
      {
        id: "visual-storyteller",
        name: "Visual Storyteller",
        description: "8/15 photos",
        icon: "/lovable-uploads/0ec32a65-596f-4033-bc8f-f85cd8fb2806.png",
        isLocked: true,
        progress: { current: 8, total: 15 }
      }
    ],
    comments: [
      {
        id: "commenter",
        name: "Commenter",
        description: "6 comments",
        icon: "/lovable-uploads/0ec32a65-596f-4033-bc8f-f85cd8fb2806.png",
        isLocked: false,
        progress: { current: 6, total: 6 }
      },
      {
        id: "food-critic",
        name: "Food Critic",
        description: "18/25 comments",
        icon: "/lovable-uploads/0ec32a65-596f-4033-bc8f-f85cd8fb2806.png",
        isLocked: true,
        progress: { current: 18, total: 25 }
      }
    ],
    exploration: [
      {
        id: "tried-one",
        name: "Tried One",
        description: "3 places",
        icon: "/lovable-uploads/0ec32a65-596f-4033-bc8f-f85cd8fb2806.png",
        isLocked: false,
        progress: { current: 3, total: 3 }
      },
      {
        id: "adventurer",
        name: "Adventurer",
        description: "10 places",
        icon: "/lovable-uploads/0ec32a65-596f-4033-bc8f-f85cd8fb2806.png",
        isLocked: false,
        progress: { current: 10, total: 10 }
      },
      {
        id: "food-explorer",
        name: "Food Explorer",
        description: "15 places",
        icon: "/lovable-uploads/0ec32a65-596f-4033-bc8f-f85cd8fb2806.png",
        isLocked: false,
        progress: { current: 15, total: 15 }
      }
    ]
  };
  
  return (
    <div className="pb-20 min-h-screen">
      <header className="px-6 py-6">
        <div className="flex items-center mb-2">
          <button 
            onClick={() => navigate(-1)}
            className="mr-2"
          >
            &larr;
          </button>
          <h1 className="text-xl font-bold">FoodSnap Vienna</h1>
        </div>
        
        <div className="mt-4">
          <h2 className="text-3xl font-bold mb-2">My Badges</h2>
        </div>
      </header>
      
      <div className="px-6">
        {/* Photography badges */}
        <div className="mb-6">
          <h3 className="text-lg font-bold mb-3">{t("badges.photography")}</h3>
          <div className="space-y-3">
            {badges.photography.map(badge => (
              <Badge
                key={badge.id}
                id={badge.id}
                name={badge.name}
                description={badge.description}
                icon={badge.icon}
                progress={badge.progress}
                isLocked={badge.isLocked}
              />
            ))}
          </div>
        </div>
        
        {/* Comment badges */}
        <div className="mb-6">
          <h3 className="text-lg font-bold mb-3">{t("badges.comments")}</h3>
          <div className="space-y-3">
            {badges.comments.map(badge => (
              <Badge
                key={badge.id}
                id={badge.id}
                name={badge.name}
                description={badge.description}
                icon={badge.icon}
                progress={badge.progress}
                isLocked={badge.isLocked}
              />
            ))}
          </div>
        </div>
        
        {/* Exploration badges */}
        <div className="mb-6">
          <h3 className="text-lg font-bold mb-3">{t("badges.exploration")}</h3>
          <div className="space-y-3">
            {badges.exploration.map(badge => (
              <Badge
                key={badge.id}
                id={badge.id}
                name={badge.name}
                description={badge.description}
                icon={badge.icon}
                progress={badge.progress}
                isLocked={badge.isLocked}
              />
            ))}
          </div>
        </div>
      </div>
      
      <BottomNavigation />
    </div>
  );
};

export default Badges;
