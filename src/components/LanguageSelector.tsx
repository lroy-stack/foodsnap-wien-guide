
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  
  return (
    <div className="flex space-x-2">
      <Button
        variant={language === "de" ? "default" : "outline"}
        className={`${
          language === "de" 
            ? "bg-austria-red text-white" 
            : "bg-transparent text-gray-500 border-gray-300"
        }`}
        onClick={() => setLanguage("de")}
      >
        Deutsch
      </Button>
      
      <Button
        variant={language === "en" ? "default" : "outline"}
        className={`${
          language === "en" 
            ? "bg-austria-red text-white" 
            : "bg-transparent text-gray-500 border-gray-300"
        }`}
        onClick={() => setLanguage("en")}
      >
        English
      </Button>
    </div>
  );
};

export default LanguageSelector;
