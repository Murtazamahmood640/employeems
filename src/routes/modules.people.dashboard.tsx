import { createFileRoute, Outlet, Link, useLocation } from '@tanstack/react-router';
import {
  Users, Clock, Calendar, FileText, Settings, Bell,
  Search, Network, Sun, Globe
} from 'lucide-react';
import { PeopleProvider } from '@/lib/people-store';

export const Route = createFileRoute('/modules/people/dashboard')({
  component: PeopleDashboardLayout,
});

function PeopleDashboardLayout() {
  const location = useLocation();
  const path = location.pathname;

  return (
    <PeopleProvider>
      <div className="flex h-screen bg-background overflow-hidden">
        {/* Sidebar - hidden on mobile */}
        <aside className="dash-sidebar hidden lg:flex">
          <div className="p-6 flex items-center gap-3">
            <div className="h-10 w-10 bg-white/20 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-inner">
              P
            </div>
            <span className="text-white font-bold text-xl tracking-tight">People HR</span>
          </div>
          
          <div className="px-4 py-2 flex flex-col gap-1.5 flex-1 overflow-y-auto">
            <p className="px-4 text-xs font-bold text-white/50 uppercase tracking-wider mb-2 mt-4">Menu</p>
            <Link to="/modules/people/dashboard" className={`dash-nav-item ${path === '/modules/people/dashboard' ? 'active' : ''}`}>
              <Users className="h-5 w-5" />
              Overview
            </Link>
            <Link to="/modules/people/dashboard/directory" className={`dash-nav-item ${path.includes('/directory') ? 'active' : ''}`}>
              <Search className="h-5 w-5" />
              Directory
            </Link>
            <Link to="/modules/people/dashboard/attendance" className={`dash-nav-item ${path.includes('/attendance') ? 'active' : ''}`}>
              <Clock className="h-5 w-5" />
              Attendance
            </Link>
            <Link to="/modules/people/dashboard/leave" className={`dash-nav-item ${path.includes('/leave') ? 'active' : ''}`}>
              <Calendar className="h-5 w-5" />
              Leave Requests
            </Link>
            <a href="#" className="dash-nav-item">
              <Network className="h-5 w-5" />
              Org Chart
            </a>
            <a href="#" className="dash-nav-item">
              <FileText className="h-5 w-5" />
              Documents
            </a>
          </div>
          
          <div className="p-4 mt-auto">
            <a href="#" className="dash-nav-item">
              <Settings className="h-5 w-5" />
              Settings
            </a>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 flex flex-col h-full overflow-hidden relative">
          {/* Top Header */}
          <header className="h-20 border-b border-border bg-surface-elevated/50 backdrop-blur-md flex items-center justify-between px-6 lg:px-10 shrink-0 z-10">
            <div className="flex items-center gap-4">
              <h1 className="text-2xl font-bold text-foreground hidden sm:block">Dashboard</h1>
              <div className="lg:hidden flex items-center gap-2">
                <div className="h-8 w-8 bg-primary text-white rounded-lg flex items-center justify-center font-bold">P</div>
                <span className="font-bold">People HR</span>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="hidden md:flex relative mr-2">
                <Search className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input 
                  type="text" 
                  placeholder="Search employees..." 
                  className="pl-9 pr-4 py-2 bg-background border border-border rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 w-56 transition-all"
                />
              </div>
              
              <button className="h-9 w-9 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-surface-elevated transition-colors" title="Language">
                <Globe className="h-4 w-4" />
              </button>

              <button className="h-9 w-9 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-surface-elevated transition-colors" title="Theme">
                <Sun className="h-4 w-4" />
              </button>

              <button className="h-9 w-9 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-surface-elevated transition-colors" title="Settings">
                <Settings className="h-4 w-4" />
              </button>
              
              <button className="h-9 w-9 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-surface-elevated transition-colors relative" title="Notifications">
                <Bell className="h-4 w-4" />
                <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-accent animate-pulse" />
              </button>
              
              <div className="h-9 w-9 rounded-full bg-gradient-to-br from-primary to-accent p-0.5 cursor-pointer ml-1" title="Profile">
                <div className="h-full w-full rounded-full bg-background flex items-center justify-center">
                  <img src="https://i.pravatar.cc/150?u=admin" alt="Admin" className="h-full w-full rounded-full object-cover" />
                </div>
              </div>
            </div>
          </header>

          {/* Sub-pages rendered here */}
          <Outlet />
          
        </main>
      </div>
    </PeopleProvider>
  );
}
