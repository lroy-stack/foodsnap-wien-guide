
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";

interface FilterOption {
  id: string;
  label: string;
  translationKey: string;
}

interface FilterChipsProps {
  options: FilterOption[];
  selectedId: string;
  onChange: (id: string) => void;
}

const FilterChips: React.FC<FilterChipsProps> = ({
  options,
  selectedId,
  onChange
}) => {
  const { t } = useLanguage();
  
  return (
    <div className="flex overflow-x-auto py-2 px-4 gap-2 no-scrollbar">
      {options.map((option) => (
        <button
          key={option.id}
          className={`px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium ${
            selectedId === option.id
              ? "bg-austria-red text-white"
              : "bg-gray-100 text-gray-700"
          }`}
          onClick={() => onChange(option.id)}
        >
          {t(option.translationKey) || option.label}
        </button>
      ))}
    </div>
  );
};

export default FilterChips;
