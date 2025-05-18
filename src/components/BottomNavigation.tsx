
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link, useLocation } from "react-router-dom";
import { Home, MapPin, Camera, User } from "lucide-react";

const BottomNavigation = () => {
  const { t } = useLanguage();
  const location = useLocation();
  
  const navItems = [
    { icon: Home, label: t("nav.discover"), path: "/" },
    { icon: MapPin, label: t("nav.map"), path: "/map" },
    { icon: Camera, label: t("nav.upload"), path: "/upload" },
    { icon: User, label: t("nav.profile"), path: "/profile" },
  ];
  
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 h-16 flex items-center justify-around px-2 z-50">
      {navItems.map((item) => {
        const isActive = location.pathname === item.path;
        return (
          <Link
            key={item.path}
            to={item.path}
            className={`flex flex-col items-center justify-center w-full h-full ${
              isActive ? "text-austria-red" : "text-gray-500"
            }`}
          >
            <item.icon size={24} />
            <span className="text-xs mt-1">{item.label}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default BottomNavigation;
