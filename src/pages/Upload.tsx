
import React, { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import BottomNavigation from "@/components/BottomNavigation";
import BadgeUnlockedModal from "@/components/BadgeUnlockedModal";
import { Camera, Star, Upload as UploadIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Upload = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  
  const [showBadgeModal, setShowBadgeModal] = useState(false);
  const [selectedDish, setSelectedDish] = useState<string | null>(null);
  const [rating, setRating] = useState(0);
  
  const mockDishes = [
    { id: "schnitzel", name: "Wiener Schnitzel", translationKey: "dish.schnitzel" },
    { id: "apfelstrudel", name: "Apfelstrudel", translationKey: "dish.apfelstrudel" },
    { id: "sachertorte", name: "Sachertorte", translationKey: "dish.sachertorte" },
  ];
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would upload the image and save the review
    setShowBadgeModal(true);
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
          <h2 className="text-3xl font-bold mb-2">{t("share.title")}</h2>
          <p className="text-gray-600">{t("share.upload")}</p>
        </div>
      </header>
      
      <div className="px-6">
        <form onSubmit={handleSubmit}>
          {/* Upload area */}
          <div className="mt-4 border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <Camera size={32} className="text-gray-400" />
            </div>
            <p className="text-gray-500 text-center mb-4">
              Take a photo or upload from your gallery
            </p>
            <button type="button" className="bg-austria-red text-white py-2 px-6 rounded-full flex items-center">
              <Camera size={18} className="mr-2" />
              Take Photo
            </button>
          </div>
          
          {/* Dish selection */}
          <div className="mt-6">
            <label className="block text-gray-700 font-medium mb-2">Select Dish</label>
            <div className="grid grid-cols-1 gap-2">
              {mockDishes.map(dish => (
                <button
                  type="button"
                  key={dish.id}
                  className={`p-3 border rounded-lg text-left ${
                    selectedDish === dish.id 
                      ? "border-austria-red bg-red-50" 
                      : "border-gray-200"
                  }`}
                  onClick={() => setSelectedDish(dish.id)}
                >
                  {t(dish.translationKey) || dish.name}
                </button>
              ))}
            </div>
          </div>
          
          {/* Rating */}
          <div className="mt-6">
            <label className="block text-gray-700 font-medium mb-2">Your Rating</label>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map(star => (
                <button
                  type="button"
                  key={star}
                  onClick={() => setRating(star)}
                  className="text-3xl"
                >
                  <Star
                    size={32}
                    className={`${
                      star <= rating
                        ? "text-austria-gold fill-austria-gold" 
                        : "text-gray-300"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
          
          {/* Comment */}
          <div className="mt-6">
            <label className="block text-gray-700 font-medium mb-2">Your Comment</label>
            <textarea
              className="w-full border border-gray-300 rounded-lg p-3 h-24"
              placeholder="Share your experience with this dish..."
            />
          </div>
          
          {/* Submit button */}
          <button
            type="submit"
            className="mt-6 w-full bg-austria-red text-white py-3 rounded-full font-medium flex items-center justify-center"
          >
            <UploadIcon size={18} className="mr-2" />
            Share and Earn 5 Points
          </button>
        </form>
      </div>
      
      {showBadgeModal && (
        <BadgeUnlockedModal
          badge={{
            name: "First Snap",
            icon: "/lovable-uploads/0ec32a65-596f-4033-bc8f-f85cd8fb2806.png",
            description: "You've shared your first dish photo!"
          }}
          onClose={() => setShowBadgeModal(false)}
          onViewCollection={() => {
            setShowBadgeModal(false);
            navigate("/badges");
          }}
        />
      )}
      
      <BottomNavigation />
    </div>
  );
};

export default Upload;
