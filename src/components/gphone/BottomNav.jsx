import { Link, useLocation } from "react-router-dom";
import { Smartphone, Cpu, FileText, Shield } from "lucide-react";

export default function BottomNav() {
  const location = useLocation();
  
  const links = [
    { path: "/", label: "gPhone V", icon: Smartphone },
    { path: "/gos", label: "gOS", icon: Cpu },
    { path: "/specs", label: "Specs", icon: FileText },
    { path: "/privacy", label: "Privacy", icon: Shield },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-t border-border">
      <div className="max-w-screen-lg mx-auto flex items-center justify-around h-14">
        {links.map((link) => {
          const isActive = location.pathname === link.path;
          const Icon = link.icon;
          return (
            <Link
              key={link.path}
              to={link.path}
              className={`flex flex-col items-center gap-0.5 text-xs transition-colors ${
                isActive ? "text-primary font-medium" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Icon className="w-5 h-5" />
              <span>{link.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}