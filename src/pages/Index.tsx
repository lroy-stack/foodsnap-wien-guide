
import React, { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import OnboardingSlider from "@/components/OnboardingSlider";
import BottomNavigation from "@/components/BottomNavigation";
import FilterChips from "@/components/FilterChips";
import DishCard from "@/components/DishCard";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

const dishImages = [
  "/lovable-uploads/4a181879-f7b5-412e-80c8-a818194b2dd0.png",
  "/lovable-uploads/17cf654d-30e0-4581-b737-e7536364d6fb.png",
  "/lovable-uploads/cadd0452-b204-4e49-b42d-28110be75a65.png"
];

const Index = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [showOnboarding, setShowOnboarding] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedFilter, setSelectedFilter] = useState("popular");
  
  // Check if user has completed onboarding
  useEffect(() => {
    const hasCompletedOnboarding = localStorage.getItem("hasCompletedOnboarding");
    if (hasCompletedOnboarding === "true") {
      setShowOnboarding(false);
    }
  }, []);
  
  const handleOnboardingComplete = () => {
    localStorage.setItem("hasCompletedOnboarding", "true");
    setShowOnboarding(false);
  };
  
  const categories = [
    { id: "all", label: "All", translationKey: "discover.filter.all" },
    { id: "mains", label: "Main Dishes", translationKey: "discover.filter.mains" },
    { id: "desserts", label: "Desserts", translationKey: "discover.filter.desserts" },
    { id: "snacks", label: "Snacks", translationKey: "discover.filter.snacks" },
    { id: "drinks", label: "Drinks", translationKey: "discover.filter.drinks" },
  ];
  
  const filters = [
    { id: "popular", label: "Most Popular", translationKey: "discover.filter.popular" },
    { id: "nearMe", label: "Near Me", translationKey: "discover.filter.nearMe" },
    { id: "price", label: "Price: €-€€€", translationKey: "discover.filter.price" },
  ];
  
  // Sample dish data
  const dishes = [
    {
      id: "schnitzel1",
      name: "Wiener Schnitzel",
      translationKey: "dish.schnitzel",
      category: "Main Dishes",
      categoryTranslationKey: "category.mains",
      image: dishImages[0],
      rating: 4.8,
      reviewCount: 98,
      price: "€€"
    },
    {
      id: "goulash1",
      name: "Goulash",
      translationKey: "dish.goulash",
      category: "Main Dishes",
      categoryTranslationKey: "category.mains",
      image: dishImages[1],
      rating: 4.5,
      reviewCount: 76,
      price: "€€"
    },
    {
      id: "apfelstrudel1",
      name: "Apple Strudel",
      translationKey: "dish.apfelstrudel",
      category: "Desserts",
      categoryTranslationKey: "category.desserts",
      image: dishImages[2],
      rating: 4.7,
      reviewCount: 86,
      price: "€"
    },
    {
      id: "sachertorte1",
      name: "Sacher Torte",
      translationKey: "dish.sachertorte",
      category: "Desserts",
      categoryTranslationKey: "category.desserts",
      image: dishImages[2],
      rating: 4.6,
      reviewCount: 65,
      price: "€€"
    }
  ];
  
  // Filter dishes based on selected category
  const filteredDishes = selectedCategory === "all"
    ? dishes
    : dishes.filter(dish => dish.categoryTranslationKey.includes(selectedCategory));
  
  const handleDishClick = (dishId: string) => {
    navigate(`/dish/${dishId}`);
  };
  
  if (showOnboarding) {
    return <OnboardingSlider onComplete={handleOnboardingComplete} />;
  }
  
  // Check if it's the first visit to show the landing instead
  const isFirstVisit = !localStorage.getItem("hasVisited");
  if (isFirstVisit) {
    return (
      <div className="min-h-screen flex flex-col">
        <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
          <img
            src="/lovable-uploads/d51a4c01-3577-4887-ba07-8b2ce5a7a9cc.png"
            alt="FoodSnap Vienna Logo"
            className="w-32 h-32 mb-8"
          />
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {t("discover.title")} {t("discover.subtitle")}
          </h1>
          
          <p className="text-gray-600 mb-12">
            {t("home.discover")}
          </p>
          
          <button
            className="bg-austria-red text-white font-bold py-3 px-10 rounded-full text-lg"
            onClick={() => {
              localStorage.setItem("hasVisited", "true");
              navigate("/");
            }}
          >
            {t("home.button.getStarted")}
          </button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="pb-20 min-h-screen">
      {/* App header */}
      <header className="px-4 py-4 flex items-center">
        <div className="flex-1">
          <h1 className="text-2xl font-bold">FoodSnap</h1>
          <p className="text-gray-500">Vienna</p>
        </div>
        <button className="p-2">
          <Search size={24} />
        </button>
      </header>
      
      {/* Category filters */}
      <div className="mb-2">
        <FilterChips
          options={categories}
          selectedId={selectedCategory}
          onChange={setSelectedCategory}
        />
      </div>
      
      {/* Additional filters */}
      <div className="mb-4">
        <FilterChips
          options={filters}
          selectedId={selectedFilter}
          onChange={setSelectedFilter}
        />
      </div>
      
      {/* Dish grid */}
      <div className="px-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredDishes.map(dish => (
          <DishCard
            key={dish.id}
            id={dish.id}
            name={dish.name}
            translationKey={dish.translationKey}
            category={dish.category}
            categoryTranslationKey={dish.categoryTranslationKey}
            image={dish.image}
            rating={dish.rating}
            reviewCount={dish.reviewCount}
            price={dish.price}
            onClick={() => handleDishClick(dish.id)}
          />
        ))}
      </div>
      
      <BottomNavigation />
    </div>
  );
};

export default Index;
