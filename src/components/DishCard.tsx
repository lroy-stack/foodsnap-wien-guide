
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Star } from "lucide-react";

interface DishCardProps {
  id: string;
  name: string;
  translationKey: string;
  category: string;
  categoryTranslationKey: string;
  image: string;
  rating?: number;
  reviewCount?: number;
  price?: string;
  onClick?: () => void;
}

const DishCard: React.FC<DishCardProps> = ({
  id,
  name,
  translationKey,
  category,
  categoryTranslationKey,
  image,
  rating,
  reviewCount,
  price,
  onClick
}) => {
  const { t, language } = useLanguage();
  
  const displayName = t(translationKey) || name;
  const displayCategory = t(categoryTranslationKey) || category;
  
  // Generate star rating
  const renderStars = () => {
    if (!rating) return null;
    
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    return (
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className={`${
              i < fullStars
                ? "text-austria-gold fill-austria-gold"
                : i === fullStars && hasHalfStar
                ? "text-austria-gold fill-austria-gold opacity-50"
                : "text-gray-300"
            }`}
          />
        ))}
        {reviewCount && <span className="ml-1 text-gray-500 text-sm">{reviewCount}</span>}
      </div>
    );
  };
  
  return (
    <div 
      className="food-card bg-white rounded-lg shadow-md overflow-hidden"
      onClick={onClick}
    >
      <div className="relative h-48">
        <img 
          src={image} 
          alt={displayName} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg">{displayName}</h3>
        <div className="flex justify-between items-center mt-1">
          <span className="text-gray-500 text-sm">{displayCategory}</span>
          {price && <span className="text-austria-red text-sm">{price}</span>}
        </div>
        <div className="mt-2">
          {renderStars()}
        </div>
      </div>
    </div>
  );
};

export default DishCard;
