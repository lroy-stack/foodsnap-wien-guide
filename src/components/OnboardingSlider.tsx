
import React, { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

interface OnboardingSliderProps {
  onComplete: () => void;
}

const OnboardingSlider: React.FC<OnboardingSliderProps> = ({ onComplete }) => {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: t("home.welcome"),
      description: t("home.discover"),
      image: "/lovable-uploads/15da1011-6341-4758-92fd-21fba0bca920.png",
    },
    {
      title: t("discover.title") + " " + t("discover.subtitle"),
      description: t("discover.filter.popular"),
      image: "/lovable-uploads/4a181879-f7b5-412e-80c8-a818194b2dd0.png",
    },
    {
      title: t("map.title"),
      description: t("map.nearbyRestaurants"),
      image: "/lovable-uploads/5cc68e2e-125e-4db0-bde7-102b74da8f34.png",
    },
    {
      title: t("share.title"),
      description: t("share.upload"),
      image: "/lovable-uploads/ca6f14eb-6487-40c8-b455-b17ddf3a8fb8.png",
    },
    {
      title: t("profile.preferences"),
      description: t("profile.language"),
      image: "/lovable-uploads/97c64d59-5d88-47ab-ab70-8ab66ac0c980.png",
    },
  ];

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      onComplete();
    }
  };

  const handleSkip = () => {
    onComplete();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="w-full max-w-md px-4 py-8">
        <div className="relative h-[600px]">
          <img 
            src={slides[currentSlide].image} 
            alt={slides[currentSlide].title} 
            className="w-full object-contain max-h-[400px] animate-fade-in"
          />
          
          <div className="mt-6 space-y-3 text-center">
            <h2 className="text-2xl font-bold">{slides[currentSlide].title}</h2>
            <p className="text-gray-600">{slides[currentSlide].description}</p>
          </div>
          
          <div className="mt-8">
            <Button 
              className="w-full bg-austria-red hover:bg-red-700 text-white font-medium py-3 rounded-full"
              onClick={handleNext}
            >
              {currentSlide === slides.length - 1 ? t("home.button.getStarted") : "Next"}
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
            
            {currentSlide < slides.length - 1 && (
              <button 
                className="w-full text-gray-500 py-2 mt-2"
                onClick={handleSkip}
              >
                {t("home.button.skipTour")}
              </button>
            )}
          </div>
          
          <div className="flex justify-center mt-4 space-x-2">
            {slides.map((_, index) => (
              <div
                key={index}
                className={`h-2 w-2 rounded-full ${
                  index === currentSlide ? "bg-austria-red" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
          
          <div className="absolute bottom-0 right-0 text-gray-400">
            {currentSlide + 1}/{slides.length}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingSlider;
