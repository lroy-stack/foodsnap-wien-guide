
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import BottomNavigation from "@/components/BottomNavigation";
import { Star, ChevronRight, MapPin } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

const DishDetail = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  
  // Simulated dish data
  const dish = {
    id: id || "schnitzel1",
    name: "Wiener Schnitzel",
    translationKey: "dish.schnitzel",
    description: "A thin, breaded and deep fried veal cutlet. It's traditionally served with a slice of lemon and potato salad or parsley potatoes.",
    images: ["/lovable-uploads/cadd0452-b204-4e49-b42d-28110be75a65.png"],
    rating: 4.8,
    reviewCount: 258,
    restaurants: [
      { id: "fig1", name: "Figlmüller", address: "Wollzeile 5, 1010 Vienna", hours: "11:00 - 22:00", distance: 0.3 },
      { id: "pla1", name: "Plachutta", address: "Walfischgasse 5-7, 1010 Vienna", hours: "11:30 - 23:00", distance: 0.7 },
    ],
    reviews: [
      { id: "rev1", user: "Anna", text: "Excellent schnitzel, perfectly crispy!", rating: 5 },
      { id: "rev2", user: "John", text: "Simply the best I've had in Vienna.", rating: 5 },
    ]
  };
  
  return (
    <div className="pb-20 min-h-screen">
      <div className="relative">
        <div className="h-64 bg-gray-300">
          <img
            src={dish.images[0]}
            alt={t(dish.translationKey) || dish.name}
            className="w-full h-full object-cover"
          />
        </div>
        
        <button
          className="absolute top-6 left-6 bg-white rounded-full p-2"
          onClick={() => navigate(-1)}
        >
          &larr;
        </button>
      </div>
      
      <div className="px-6 py-4">
        <h1 className="text-3xl font-bold">{t(dish.translationKey) || dish.name}</h1>
        
        <div className="flex items-center mt-2">
          <div className="text-2xl text-austria-gold">
            {dish.rating}
          </div>
          <div className="flex items-center text-austria-gold ml-2">
            {"★".repeat(Math.floor(dish.rating))}
            {dish.rating % 1 >= 0.5 ? "☆" : ""}
          </div>
          <div className="text-gray-500 ml-2">{dish.reviewCount}</div>
        </div>
        
        <div className="mt-4">
          <p className="text-gray-600">{dish.description}</p>
        </div>
        
        {/* Restaurants section */}
        <div className="mt-6">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-xl font-bold">Where to try</h2>
            <button className="text-austria-red font-medium">View all</button>
          </div>
          
          <div className="space-y-3">
            {dish.restaurants.map(restaurant => (
              <div key={restaurant.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex justify-between">
                  <div>
                    <h3 className="font-bold">{restaurant.name}</h3>
                    <p className="text-gray-500 text-sm">{restaurant.address}</p>
                    <p className="text-gray-500 text-sm">{restaurant.hours}</p>
                  </div>
                  <div className="text-gray-500">{restaurant.distance} mi</div>
                </div>
                
                <div className="mt-3 flex space-x-2">
                  <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg flex-1 flex items-center justify-center">
                    <MapPin size={16} className="mr-1" />
                    {t("map.getDirections")}
                  </button>
                  <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg flex-1 text-center">
                    {t("map.viewMenu")}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Reviews section */}
        <div className="mt-6">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-xl font-bold">Reviews</h2>
            <button className="text-austria-red font-medium">Add review</button>
          </div>
          
          <div className="space-y-3">
            {dish.reviews.map(review => (
              <div key={review.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <div className="font-bold">{review.user}</div>
                  <div className="text-austria-gold">{"★".repeat(review.rating)}</div>
                </div>
                <p className="text-gray-600">{review.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <BottomNavigation />
    </div>
  );
};

export default DishDetail;
