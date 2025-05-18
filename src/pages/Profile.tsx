
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import BottomNavigation from "@/components/BottomNavigation";
import LanguageSelector from "@/components/LanguageSelector";
import Badge from "@/components/Badge";
import { Settings, ChevronRight, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  
  const userBadges = [
    {
      id: "first-bite",
      name: "First Bite",
      description: "Started your food journey",
      icon: "/lovable-uploads/0ec32a65-596f-4033-bc8f-f85cd8fb2806.png",
      isLocked: false
    },
    {
      id: "good-foodie",
      name: "Good Foodie",
      description: "Rated 5 different dishes",
      icon: "/lovable-uploads/0ec32a65-596f-4033-bc8f-f85cd8fb2806.png",
      isLocked: false
    },
    {
      id: "local-foodie",
      name: "Local Foodie",
      description: "Visited 3 local restaurants",
      icon: "/lovable-uploads/0ec32a65-596f-4033-bc8f-f85cd8fb2806.png",
      isLocked: false
    }
  ];
  
  return (
    <div className="pb-20 min-h-screen">
      <header className="px-6 pt-6 pb-2">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">FoodSnap Vienna</h1>
          <button>
            <Settings size={24} />
          </button>
        </div>
      </header>
      
      <div className="px-6">
        {/* User info */}
        <div className="flex items-center mt-4">
          <div className="w-20 h-20 bg-gray-200 rounded-full overflow-hidden mr-4">
            <img
              src="/lovable-uploads/a631e5e0-8af5-40c5-bb19-25e6988636e0.png"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div>
            <h2 className="text-2xl font-bold">FoodieExplorer</h2>
            <div className="flex items-center gap-2 text-white">
              <div className="bg-austria-red rounded-full px-3 py-1 text-sm flex items-center">
                <span>{t("profile.level")} 3 • Featured Foodie</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Progress bar */}
        <div className="mt-4">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-austria-red rounded-full h-2 w-2/5"></div>
          </div>
          <div className="flex justify-between text-sm text-gray-500 mt-1">
            <span>100/250</span>
          </div>
        </div>
        
        {/* Stats */}
        <div className="mt-6 grid grid-cols-3 gap-4 border-y border-gray-200 py-6">
          <div className="text-center">
            <div className="text-2xl font-bold">100</div>
            <div className="text-gray-500">{t("profile.points")}</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">8</div>
            <div className="text-gray-500">{t("profile.contributions")}</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">12</div>
            <div className="text-gray-500">{t("profile.reviews")}</div>
          </div>
        </div>
        
        {/* Badges */}
        <div className="mt-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold">{t("profile.badges")}</h3>
            <button 
              className="text-austria-red font-medium flex items-center"
              onClick={() => navigate("/badges")}
            >
              See all <ChevronRight size={16} />
            </button>
          </div>
          
          <div className="flex overflow-x-auto gap-4 pb-4 hide-scrollbar">
            {userBadges.map(badge => (
              <div key={badge.id} className="w-20 flex-shrink-0">
                <div className={`w-20 h-20 rounded-full ${badge.isLocked ? 'bg-gray-200' : 'bg-austria-red'} flex items-center justify-center mb-2`}>
                  <img src={badge.icon} alt={badge.name} className="w-12 h-12" />
                </div>
                <p className="text-center text-sm font-medium">{badge.name}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Preferences */}
        <div className="mt-6">
          <h3 className="text-xl font-bold mb-4">{t("profile.preferences")}</h3>
          
          <div className="bg-gray-100 rounded-lg p-4">
            <p className="font-medium mb-3">{t("profile.language")}</p>
            <LanguageSelector />
          </div>
        </div>
        
        {/* Collections */}
        <div className="mt-6">
          <h3 className="text-xl font-bold mb-4">{t("profile.collections")}</h3>
          
          <div className="grid grid-cols-3 gap-3">
            {["Desserts", "Main Dishes", "Breakfast"].map((collection, i) => (
              <div key={i} className="border border-gray-300 rounded-lg p-2 text-center">
                {collection}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <BottomNavigation />
    </div>
  );
};

export default Profile;
