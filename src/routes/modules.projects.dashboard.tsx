import { createFileRoute, Link } from '@tanstack/react-router';
import {
  KanbanSquare, CheckSquare, Search, Bell, Settings,
  FolderOpen, Calendar, PieChart, Plus, MoreHorizontal,
  Clock, CheckCircle2, AlertCircle, LayoutGrid, List, Globe, Sun
} from 'lucide-react';

export const Route = createFileRoute('/modules/projects/dashboard')({
  component: ProjectsDashboard,
});

function ProjectsDashboard() {
  return (
    <div className="flex h-screen bg-background overflow-hidden">
      {/* Sidebar - hidden on mobile */}
      <aside className="dash-sidebar hidden lg:flex">
        <div className="p-6 flex items-center gap-3">
          <div className="h-10 w-10 bg-white/20 rounded-xl flex items-center justify-center text-white shadow-inner">
            <KanbanSquare className="h-6 w-6" />
          </div>
          <span className="text-white font-bold text-xl tracking-tight">Projects</span>
        </div>
        
        <div className="px-4 py-2 flex flex-col gap-1.5 flex-1 overflow-y-auto">
          <p className="px-4 text-xs font-bold text-white/50 uppercase tracking-wider mb-2 mt-4">Menu</p>
          <a href="#" className="dash-nav-item active">
            <LayoutGrid className="h-5 w-5" />
            Dashboard
          </a>
          <a href="#" className="dash-nav-item">
            <CheckSquare className="h-5 w-5" />
            My Tasks
          </a>
          <a href="#" className="dash-nav-item flex justify-between">
            <div className="flex items-center gap-3">
              <FolderOpen className="h-5 w-5" />
              All Projects
            </div>
            <span className="bg-white/20 text-white text-[10px] px-1.5 py-0.5 rounded font-bold">14</span>
          </a>
          <a href="#" className="dash-nav-item">
            <KanbanSquare className="h-5 w-5" />
            Kanban Board
          </a>
          <a href="#" className="dash-nav-item">
            <Calendar className="h-5 w-5" />
            Calendar
          </a>
          <a href="#" className="dash-nav-item">
            <PieChart className="h-5 w-5" />
            Reports
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
            <h1 className="text-2xl font-bold text-foreground hidden sm:block">Projects Workspace</h1>
            <div className="lg:hidden flex items-center gap-2">
              <div className="h-8 w-8 bg-primary text-white rounded-lg flex items-center justify-center font-bold">P</div>
              <span className="font-bold">Projects</span>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="hidden md:flex relative mr-2">
              <Search className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input 
                type="text" 
                placeholder="Search tasks, projects..." 
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
              <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-primary animate-pulse" />
            </button>
            
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-primary to-accent p-0.5 cursor-pointer ml-1" title="Profile">
              <div className="h-full w-full rounded-full bg-background flex items-center justify-center">
                <img src="https://i.pravatar.cc/150?img=12" alt="Admin" className="h-full w-full rounded-full object-cover" />
              </div>
            </div>
          </div>
        </header>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 lg:p-10">
          
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-4">
              <button className="h-10 w-10 rounded-full bg-surface-elevated border border-border flex items-center justify-center shadow-sm hover:border-primary/50 transition-colors">
                <List className="h-5 w-5" />
              </button>
              <button className="h-10 w-10 rounded-full bg-primary text-white shadow-md shadow-primary/20 flex items-center justify-center">
                <LayoutGrid className="h-5 w-5" />
              </button>
            </div>
            <button className="btn-primary py-2.5 px-4 text-sm"><Plus className="h-4 w-4 mr-2" /> New Project</button>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {[
              { label: "Active Projects", value: "14", color: "text-blue-500", bg: "bg-blue-500/10" },
              { label: "Tasks Due Today", value: "7", color: "text-amber-500", bg: "bg-amber-500/10" },
              { label: "Completed This Week", value: "23", color: "text-green-500", bg: "bg-green-500/10" },
              { label: "Team Members", value: "31", color: "text-purple-500", bg: "bg-purple-500/10" },
            ].map((stat, i) => (
              <div key={i} className="uiverse-card group">
                <div className="uiverse-card-content p-6 bg-surface-elevated/40 flex items-center gap-4">
                  <div className={`h-14 w-14 rounded-2xl ${stat.bg} flex items-center justify-center ${stat.color} group-hover:scale-110 transition-transform shadow-inner`}>
                    <span className="text-2xl font-extrabold">{stat.value}</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground">{stat.label}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Active Projects */}
          <h2 className="text-2xl font-bold mb-6">Active Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {[
              { name: "Website Redesign Q4", status: "On Track", progress: 65, due: "Oct 30", statusCol: "text-green-500 bg-green-500/10" },
              { name: "Mobile App Launch", status: "At Risk", progress: 40, due: "Nov 15", statusCol: "text-amber-500 bg-amber-500/10" },
              { name: "Server Migration", status: "Delayed", progress: 85, due: "Oct 12", statusCol: "text-red-500 bg-red-500/10" },
            ].map((proj, i) => (
              <div key={i} className="uiverse-card group">
                <div className="uiverse-card-content p-6 bg-surface-elevated/30 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-4">
                    <span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full ${proj.statusCol}`}>
                      {proj.status}
                    </span>
                    <button className="text-muted-foreground hover:text-foreground"><MoreHorizontal className="h-5 w-5" /></button>
                  </div>
                  
                  <h3 className="text-lg font-bold text-foreground mb-4 group-hover:text-primary transition-colors">{proj.name}</h3>
                  
                  <div className="flex items-center gap-2 mb-6">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-xs font-semibold text-muted-foreground">Due {proj.due}</span>
                  </div>

                  <div className="mt-auto">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs font-bold text-muted-foreground">Progress</span>
                      <span className="text-xs font-bold">{proj.progress}%</span>
                    </div>
                    <div className="h-2 w-full bg-background rounded-full overflow-hidden border border-border/50">
                      <div 
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full" 
                        style={{ width: `${proj.progress}%` }} 
                      />
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center mt-6 pt-5 border-t border-border/40">
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map((n) => (
                        <img key={n} src={`https://i.pravatar.cc/150?img=${i*10 + n + 10}`} className="h-8 w-8 rounded-full border-2 border-surface-elevated z-10 hover:z-20 transition-all hover:scale-110 object-cover" alt="team" />
                      ))}
                      <div className="h-8 w-8 rounded-full border-2 border-surface-elevated bg-background flex items-center justify-center text-[10px] font-bold text-muted-foreground z-0">+2</div>
                    </div>
                    <span className="text-xs font-medium text-muted-foreground flex items-center gap-1.5 hover:text-primary cursor-pointer transition-colors">
                      <CheckSquare className="h-4 w-4" /> 12/24
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Kanban Preview */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">My Tasks Board</h2>
            <button className="text-sm font-semibold text-primary hover:text-primary/80">View Full Board</button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* TO DO */}
            <div className="bg-surface-elevated/20 rounded-3xl border border-border/50 p-4 flex flex-col gap-4">
              <div className="flex items-center justify-between px-2">
                <h3 className="font-bold flex items-center gap-2">
                  To Do <span className="bg-background text-muted-foreground text-xs px-2 py-0.5 rounded-full border border-border">3</span>
                </h3>
                <button className="text-muted-foreground hover:text-foreground"><Plus className="h-4 w-4" /></button>
              </div>
              
              <div className="uiverse-card cursor-grab active:cursor-grabbing">
                <div className="uiverse-card-content p-4 bg-background border border-border/60 hover:border-primary/30 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <span className="bg-red-500/10 text-red-500 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded">High</span>
                    <span className="text-xs text-muted-foreground">#1024</span>
                  </div>
                  <p className="font-bold text-sm mb-4">Design homepage hero</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Clock className="h-3.5 w-3.5" /> Tomorrow
                    </div>
                    <div className="h-6 w-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-[10px] font-bold text-white shadow">MM</div>
                  </div>
                </div>
              </div>

              <div className="uiverse-card cursor-grab active:cursor-grabbing">
                <div className="uiverse-card-content p-4 bg-background border border-border/60 hover:border-primary/30 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <span className="bg-blue-500/10 text-blue-500 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded">Medium</span>
                    <span className="text-xs text-muted-foreground">#1025</span>
                  </div>
                  <p className="font-bold text-sm mb-4">Update onboarding docs</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Clock className="h-3.5 w-3.5" /> Oct 15
                    </div>
                    <img src="https://i.pravatar.cc/150?img=12" className="h-6 w-6 rounded-full" />
                  </div>
                </div>
              </div>
            </div>

            {/* IN PROGRESS */}
            <div className="bg-surface-elevated/20 rounded-3xl border border-border/50 p-4 flex flex-col gap-4">
              <div className="flex items-center justify-between px-2">
                <h3 className="font-bold flex items-center gap-2">
                  In Progress <span className="bg-background text-primary border-primary/20 text-xs px-2 py-0.5 rounded-full border">2</span>
                </h3>
                <button className="text-muted-foreground hover:text-foreground"><Plus className="h-4 w-4" /></button>
              </div>
              
              <div className="uiverse-card cursor-grab active:cursor-grabbing border-primary/30">
                <div className="uiverse-card-content p-4 bg-background border border-border/60 hover:border-primary/30 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <span className="bg-amber-500/10 text-amber-500 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded">High</span>
                    <span className="text-xs text-muted-foreground">#1018</span>
                  </div>
                  <p className="font-bold text-sm mb-4">Fix login API bug</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs text-red-500 font-semibold">
                      <AlertCircle className="h-3.5 w-3.5" /> Today
                    </div>
                    <img src="https://i.pravatar.cc/150?img=12" className="h-6 w-6 rounded-full" />
                  </div>
                </div>
              </div>
            </div>

            {/* DONE */}
            <div className="bg-surface-elevated/20 rounded-3xl border border-border/50 p-4 flex flex-col gap-4 opacity-75">
              <div className="flex items-center justify-between px-2">
                <h3 className="font-bold flex items-center gap-2">
                  Done <span className="bg-background text-green-500 border-green-500/20 text-xs px-2 py-0.5 rounded-full border">1</span>
                </h3>
                <button className="text-muted-foreground hover:text-foreground"><Plus className="h-4 w-4" /></button>
              </div>
              
              <div className="uiverse-card cursor-grab active:cursor-grabbing">
                <div className="uiverse-card-content p-4 bg-background border border-border/60 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <span className="bg-green-500/10 text-green-500 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded">Done</span>
                    <span className="text-xs text-muted-foreground line-through">#1012</span>
                  </div>
                  <p className="font-bold text-sm mb-4 text-muted-foreground line-through">Draft weekly report</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs text-green-500 font-semibold">
                      <CheckCircle2 className="h-3.5 w-3.5" /> Completed
                    </div>
                    <img src="https://i.pravatar.cc/150?img=12" className="h-6 w-6 rounded-full grayscale" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </main>
    </div>
  );
}
