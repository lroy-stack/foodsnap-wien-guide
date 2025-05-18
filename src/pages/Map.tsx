
import React, { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import BottomNavigation from "@/components/BottomNavigation";
import { ChevronRight, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Map = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [selectedDish, setSelectedDish] = useState("schnitzel");
  
  // This is a placeholder component since we cannot implement an actual map
  // In a real app, this would use a mapping library like Google Maps or Mapbox
  
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
          <h2 className="text-3xl font-bold mb-2">{t("map.title")}</h2>
          <p className="text-gray-600">{t("map.nearbyRestaurants")}</p>
        </div>
      </header>
      
      <div className="relative">
        {/* Placeholder map image */}
        <div className="h-[400px] bg-gray-200 rounded-lg mx-4 flex items-center justify-center relative">
          <div className="text-gray-500">
            Map placeholder - Vienna city
          </div>
          
          {/* Map markers - in a real app these would be positioned on the map */}
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-austria-red rounded-full w-8 h-8 flex items-center justify-center"
              style={{
                top: `${30 + Math.random() * 50}%`,
                left: `${20 + Math.random() * 60}%`,
              }}
            >
              <MapPin size={20} className="text-white" />
            </div>
          ))}
          
          {/* Selected restaurant card */}
          <div className="absolute bottom-6 left-0 right-0 mx-auto w-4/5 bg-white rounded-lg shadow-lg p-4">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-bold">Figlmüller</h3>
                <div className="flex items-center text-austria-gold">
                  ★★★★☆ <span className="text-gray-500 ml-1">4.8</span>
                </div>
              </div>
              <div className="text-gray-500">0,3 km</div>
            </div>
          </div>
        </div>
        
        {/* Restaurant list below map */}
        <div className="mt-6 px-4">
          <h3 className="font-bold text-lg mb-3">Restaurants nearby</h3>
          
          <div className="space-y-3">
            {["Gasthaus Mayer", "Figlmüller", "Restaurant Schnitzelwirt"].map((name, i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm">
                <div>
                  <h4 className="font-medium">{name}</h4>
                  <div className="flex items-center text-sm text-austria-gold">
                    {"★".repeat(4 + (i % 2))}{"☆".repeat(1 - (i % 2))}
                    <span className="text-gray-500 ml-1">
                      {4.5 + (i * 0.1)}
                    </span>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-gray-500 mr-2">{(0.3 + (i * 0.2)).toFixed(1)} km</span>
                  <ChevronRight size={20} className="text-gray-400" />
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 py-3 w-full bg-austria-red text-white text-center rounded-lg font-medium">
            {t("map.filter")}
          </div>
        </div>
      </div>
      
      <BottomNavigation />
    </div>
  );
};

export default Map;
