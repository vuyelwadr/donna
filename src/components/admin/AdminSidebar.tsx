import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  FileText,
  Calendar,
  Settings
} from 'lucide-react';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/admin' },
  { icon: FileText, label: 'Content', path: '/admin/content' },
  { icon: Calendar, label: 'Availability', path: '/admin/availability' },
  { icon: Settings, label: 'Settings', path: '/admin/settings' }
];

export default function AdminSidebar() {
  return (
    <aside className="w-64 bg-white shadow-sm min-h-[calc(100vh-4rem)]">
      <nav className="p-4 space-y-1">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => `
              flex items-center gap-2 px-4 py-2 rounded-md text-sm
              ${isActive 
                ? 'bg-brand-primary text-white' 
                : 'text-gray-700 hover:bg-gray-100'
              }
            `}
          >
            <item.icon className="w-5 h-5" />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}