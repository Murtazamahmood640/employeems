import { createFileRoute } from "react-router-dom";
import {
  LifeBuoy, Inbox, Clock, CheckCircle2, AlertTriangle,
  Search, Bell, Settings, Filter, LayoutList, MessageSquare,
  MoreVertical, Plus, UserCircle, Tag, Globe, Sun
} from 'lucide-react';



export default function DeskDashboard() {
  return (
    <div className="flex h-screen bg-background overflow-hidden">
      {/* Sidebar - hidden on mobile */}
      <aside className="dash-sidebar hidden lg:flex">
        <div className="p-6 flex items-center gap-3">
          <div className="h-10 w-10 bg-white/20 rounded-xl flex items-center justify-center text-white shadow-inner">
            <LifeBuoy className="h-6 w-6" />
          </div>
          <span className="text-white font-bold text-xl tracking-tight">Helpdesk</span>
        </div>
        
        <div className="px-4 py-2 flex flex-col gap-1.5 flex-1 overflow-y-auto">
          <p className="px-4 text-xs font-bold text-white/50 uppercase tracking-wider mb-2 mt-4">Inbox</p>
          <a href="#" className="dash-nav-item active flex justify-between">
            <div className="flex items-center gap-3">
              <Inbox className="h-5 w-5" /> All Tickets
            </div>
            <span className="bg-white/20 text-white text-[10px] px-1.5 py-0.5 rounded font-bold">24</span>
          </a>
          <a href="#" className="dash-nav-item flex justify-between">
            <div className="flex items-center gap-3">
              <UserCircle className="h-5 w-5" /> Assigned to me
            </div>
            <span className="bg-white/20 text-white text-[10px] px-1.5 py-0.5 rounded font-bold">8</span>
          </a>
          <a href="#" className="dash-nav-item">
            <AlertTriangle className="h-5 w-5" /> Urgent
          </a>
          
          <p className="px-4 text-xs font-bold text-white/50 uppercase tracking-wider mb-2 mt-6">Categories</p>
          <a href="#" className="dash-nav-item"><div className="w-2 h-2 rounded-full bg-blue-400"></div> IT Support</a>
          <a href="#" className="dash-nav-item"><div className="w-2 h-2 rounded-full bg-purple-400"></div> HR Requests</a>
          <a href="#" className="dash-nav-item"><div className="w-2 h-2 rounded-full bg-amber-400"></div> Facilities</a>
        </div>
        
        <div className="p-4 mt-auto">
          <a href="#" className="dash-nav-item">
            <Settings className="h-5 w-5" /> Settings
          </a>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-full overflow-hidden relative">
        {/* Top Header */}
        <header className="h-20 border-b border-border bg-surface-elevated/50 backdrop-blur-md flex items-center justify-between px-6 lg:px-10 shrink-0 z-10">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-bold text-foreground hidden sm:block">Support Inbox</h1>
            <div className="lg:hidden flex items-center gap-2">
              <div className="h-8 w-8 bg-primary text-white rounded-lg flex items-center justify-center font-bold">H</div>
              <span className="font-bold">Helpdesk</span>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="hidden md:flex relative mr-2">
              <Search className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input 
                type="text" 
                placeholder="Search ticket ID or subject..." 
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
                <img src="https://i.pravatar.cc/150?img=11" alt="Agent" className="h-full w-full rounded-full object-cover" />
              </div>
            </div>
          </div>
        </header>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 lg:p-10">
          
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-2">
              <div className="bg-surface-elevated border border-border rounded-lg p-1 flex">
                <button className="px-4 py-1.5 text-sm font-semibold rounded-md bg-background shadow-sm text-foreground">Open</button>
                <button className="px-4 py-1.5 text-sm font-semibold rounded-md text-muted-foreground hover:text-foreground">Resolved</button>
              </div>
              <button className="h-9 px-3 rounded-lg border border-border bg-background text-muted-foreground flex items-center gap-2 text-sm font-medium hover:bg-surface-elevated transition-colors">
                <Filter className="h-4 w-4" /> Filter
              </button>
            </div>
            <button className="btn-primary py-2.5 px-4 text-sm"><Plus className="h-4 w-4 mr-2" /> New Ticket</button>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {[
              { label: "Unassigned", value: "5", color: "text-amber-500", bg: "bg-amber-500/10" },
              { label: "Overdue SLA", value: "2", color: "text-red-500", bg: "bg-red-500/10" },
              { label: "Avg Resolution Time", value: "4.2h", color: "text-blue-500", bg: "bg-blue-500/10" },
              { label: "CSAT Score", value: "98%", color: "text-green-500", bg: "bg-green-500/10" },
            ].map((stat, i) => (
              <div key={i} className="uiverse-card group">
                <div className="uiverse-card-content p-5 bg-surface-elevated/40 flex flex-col justify-center">
                  <p className="text-sm font-semibold text-muted-foreground mb-2">{stat.label}</p>
                  <div className="flex items-end justify-between">
                    <h3 className="text-3xl font-extrabold">{stat.value}</h3>
                    <div className={`h-8 w-8 rounded-lg ${stat.bg} ${stat.color} flex items-center justify-center`}>
                      <Activity className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Ticket List */}
          <div className="uiverse-card">
            <div className="uiverse-card-content bg-surface-elevated/30">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-surface-elevated/50 text-xs uppercase tracking-wider text-muted-foreground font-semibold border-b border-border/50">
                      <th className="p-4 pl-6 w-16">ID</th>
                      <th className="p-4">Requester & Subject</th>
                      <th className="p-4">Category</th>
                      <th className="p-4">Priority</th>
                      <th className="p-4 text-right pr-6">Time</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/50">
                    {[
                      { id: "T-4092", user: "Emma Wilson", title: "Laptop screen flickering", cat: "IT Support", catCol: "bg-blue-500/10 text-blue-500", pri: "High", priCol: "bg-red-500/10 text-red-500", time: "10m ago", img: "44" },
                      { id: "T-4091", user: "Michael Chen", title: "Cannot access VPN from home office", cat: "IT Support", catCol: "bg-blue-500/10 text-blue-500", pri: "Medium", priCol: "bg-amber-500/10 text-amber-500", time: "1h ago", img: "11" },
                      { id: "T-4088", user: "Sophia Lee", title: "Need updated employment letter", cat: "HR", catCol: "bg-purple-500/10 text-purple-500", pri: "Low", priCol: "bg-surface-elevated text-muted-foreground", time: "3h ago", img: "47" },
                      { id: "T-4085", user: "James Rodriguez", title: "AC in meeting room B is broken", cat: "Facilities", catCol: "bg-amber-500/10 text-amber-500", pri: "Medium", priCol: "bg-amber-500/10 text-amber-500", time: "Yesterday", img: "68" },
                      { id: "T-4082", user: "William Taylor", title: "Requesting software license for Figma", cat: "IT Support", catCol: "bg-blue-500/10 text-blue-500", pri: "Low", priCol: "bg-surface-elevated text-muted-foreground", time: "Yesterday", img: "59" },
                    ].map((ticket, i) => (
                      <tr key={i} className="hover:bg-surface-elevated/50 transition-colors cursor-pointer group">
                        <td className="p-4 pl-6 text-sm font-mono text-muted-foreground">{ticket.id}</td>
                        <td className="p-4">
                          <div className="flex items-center gap-3">
                            <img src={`https://i.pravatar.cc/150?img=${ticket.img}`} alt={ticket.user} className="h-9 w-9 rounded-full object-cover border border-border" />
                            <div>
                              <p className="font-bold text-foreground text-sm group-hover:text-primary transition-colors">{ticket.title}</p>
                              <p className="text-xs text-muted-foreground">{ticket.user}</p>
                            </div>
                          </div>
                        </td>
                        <td className="p-4">
                          <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold ${ticket.catCol}`}>
                            <Tag className="h-3 w-3" /> {ticket.cat}
                          </span>
                        </td>
                        <td className="p-4">
                          <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-bold ${ticket.priCol}`}>
                            {ticket.pri}
                          </span>
                        </td>
                        <td className="p-4 text-right pr-6 text-sm text-muted-foreground font-medium">
                          {ticket.time}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          
        </div>
      </main>
    </div>
  );
}

function Activity(props: any) {
  return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>;
}
