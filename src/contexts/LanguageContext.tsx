
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

type LanguageType = "de" | "en";
type TranslationKey = string;
type TranslationValues = Record<string, string>;

interface LanguageContextType {
  language: LanguageType;
  setLanguage: (lang: LanguageType) => void;
  t: (key: TranslationKey, values?: TranslationValues) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

// Simple translation engine
const translations: Record<LanguageType, Record<string, string>> = {
  de: {
    // Common UI elements
    "app.name": "FoodSnap Wien",
    "nav.discover": "Entdecken",
    "nav.map": "Karte",
    "nav.upload": "Hochladen",
    "nav.profile": "Profil",
    
    // Home
    "home.welcome": "Willkommen bei FoodSnap Vienna!",
    "home.discover": "Entdecken Sie authentische Wiener Küche durch Fotos von echten Gästen",
    "home.button.getStarted": "Starte Exploring",
    "home.button.skipTour": "Tour überspringen",
    
    // Discover
    "discover.title": "Entdecken",
    "discover.subtitle": "Erkunde traditionelle Wiener Gerichte",
    "discover.filter.all": "Alle",
    "discover.filter.mains": "Hauptgerichte",
    "discover.filter.desserts": "Nachspeisen",
    "discover.filter.snacks": "Snacks",
    "discover.filter.drinks": "Getränke",
    "discover.filter.popular": "Beliebt",
    "discover.filter.nearMe": "In der Nähe",
    "discover.filter.price": "Preis",
    
    // Map
    "map.title": "Finde, wo du essen kannst",
    "map.nearbyRestaurants": "Restaurants in der Nähe",
    "map.getDirections": "Route anzeigen",
    "map.viewMenu": "Speisekarte ansehen",
    
    // Share
    "share.title": "Teile und sammle Punkte",
    "share.upload": "Lade Fotos von Speisen hoch, bewerte und kommentiere. Du sammelst Punkte, steigst auf und schaltest spezielle Abzeichen frei.",
    
    // Profile
    "profile.points": "Punkte",
    "profile.level": "Level",
    "profile.contributions": "Beiträge",
    "profile.reviews": "Bewertungen",
    "profile.badges": "Abzeichen und Erfolge",
    "profile.preferences": "Präferenzen",
    "profile.language": "Sprache",
    "profile.collections": "Deine Sammlungen",
    
    // Badges
    "badges.photography": "Fotografie Abzeichen",
    "badges.comments": "Kommentar Abzeichen",
    "badges.exploration": "Erkundungs Abzeichen",
    "badges.unlocked": "Abzeichen freigeschaltet!",
    "badges.viewCollection": "Meine Abzeichensammlung ansehen",
    "badges.continue": "Weiter erkunden",
    
    // Food categories
    "category.mains": "Hauptgerichte",
    "category.desserts": "Nachspeisen",
    "category.snacks": "Snacks",
    "category.drinks": "Getränke",
    
    // Food items
    "dish.schnitzel": "Wiener Schnitzel",
    "dish.goulash": "Gulasch",
    "dish.apfelstrudel": "Apfelstrudel",
    "dish.sachertorte": "Sachertorte",
  },
  en: {
    // Common UI elements
    "app.name": "FoodSnap Vienna",
    "nav.discover": "Discover",
    "nav.map": "Map",
    "nav.upload": "Upload",
    "nav.profile": "Profile",
    
    // Home
    "home.welcome": "Welcome to FoodSnap Vienna!",
    "home.discover": "Discover authentic Viennese cuisine through photos shared by real diners",
    "home.button.getStarted": "Get Started",
    "home.button.skipTour": "Skip tour",
    
    // Discover
    "discover.title": "Discover",
    "discover.subtitle": "Explore traditional Viennese dishes",
    "discover.filter.all": "All",
    "discover.filter.mains": "Main Dishes",
    "discover.filter.desserts": "Desserts",
    "discover.filter.snacks": "Snacks",
    "discover.filter.drinks": "Drinks",
    "discover.filter.popular": "Most Popular",
    "discover.filter.nearMe": "Near Me",
    "discover.filter.price": "Price",
    
    // Map
    "map.title": "Find Where to Eat",
    "map.nearbyRestaurants": "Nearby Restaurants",
    "map.getDirections": "Get Directions",
    "map.viewMenu": "View Menu",
    
    // Share
    "share.title": "Share and Earn Points",
    "share.upload": "Upload photos of dishes, rate and comment. You'll earn points, level up and unlock special badges.",
    
    // Profile
    "profile.points": "Points",
    "profile.level": "Level",
    "profile.contributions": "Contributions",
    "profile.reviews": "Reviews",
    "profile.badges": "Badges & Achievements",
    "profile.preferences": "Preferences",
    "profile.language": "Language",
    "profile.collections": "Your Collections",
    
    // Badges
    "badges.photography": "Photography Badges",
    "badges.comments": "Comment Badges",
    "badges.exploration": "Exploration Badges",
    "badges.unlocked": "Badge Unlocked!",
    "badges.viewCollection": "View My Badges Collection",
    "badges.continue": "Continue Exploring",
    
    // Food categories
    "category.mains": "Main Dishes",
    "category.desserts": "Desserts",
    "category.snacks": "Snacks",
    "category.drinks": "Drinks",
    
    // Food items
    "dish.schnitzel": "Viennese Schnitzel",
    "dish.goulash": "Goulash",
    "dish.apfelstrudel": "Apple Strudel",
    "dish.sachertorte": "Sacher Cake",
  }
};

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  // Detect device language or use English as default
  const detectLanguage = (): LanguageType => {
    const browserLang = navigator.language.split('-')[0];
    return browserLang === 'de' ? 'de' : 'en';
  };

  const [language, setLanguage] = useState<LanguageType>('de'); // default to German for Vienna

  useEffect(() => {
    setLanguage(detectLanguage());
  }, []);

  // Translation function
  const t = (key: TranslationKey, values?: TranslationValues): string => {
    let text = translations[language][key] || key;
    
    if (values) {
      Object.entries(values).forEach(([valueKey, value]) => {
        text = text.replace(`{{${valueKey}}}`, value);
      });
    }
    
    return text;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
