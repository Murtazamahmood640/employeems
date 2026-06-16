import { createFileRoute, Link } from "react-router-dom";
import {
  Users,
  Clock,
  CalendarDays,
  KanbanSquare,
  Wallet,
  BarChart3,
  LogOut,
  Settings,
  Bell,
  Search,
} from "lucide-react";
import { useState } from "react";



interface Module {
  slug: string;
  name: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
  stats: string;
}

export default function Dashboard() {
  const [searchQuery, setSearchQuery] = useState("");

  const modules: Module[] = [
    {
      slug: "people",
      name: "People",
      icon: <Users className="h-6 w-6" />,
      color: "text-green-600",
      bgColor: "bg-green-50",
      stats: "248 Employees"
    },
    {
      slug: "attendance",
      name: "Attendance",
      icon: <Clock className="h-6 w-6" />,
      color: "text-amber-600",
      bgColor: "bg-amber-50",
      stats: "98.4% Avg"
    },
    {
      slug: "leave",
      name: "Leave",
      icon: <CalendarDays className="h-6 w-6" />,
      color: "text-cyan-600",
      bgColor: "bg-cyan-50",
      stats: "12 Pending"
    },
    {
      slug: "projects",
      name: "Projects",
      icon: <KanbanSquare className="h-6 w-6" />,
      color: "text-primary",
      bgColor: "bg-primary/5",
      stats: "8 Active"
    },
    {
      slug: "payroll",
      name: "Payroll",
      icon: <Wallet className="h-6 w-6" />,
      color: "text-green-600",
      bgColor: "bg-green-50",
      stats: "June Cycle"
    },
    {
      slug: "analytics",
      name: "Analytics",
      icon: <BarChart3 className="h-6 w-6" />,
      color: "text-primary",
      bgColor: "bg-primary/5",
      stats: "Live Data"
    },
  ];

  const recentActivity = [
    { time: "Today 2:30 PM", action: "Sarah Johnson clocked in", type: "attendance" },
    { time: "Today 1:15 PM", action: "New leave request from Mike Chen", type: "leave" },
    { time: "Today 10:45 AM", action: "Project task assigned to Emma Wilson", type: "project" },
    { time: "Yesterday 4:30 PM", action: "Payroll cycle completed successfully", type: "payroll" },
  ];

  const quickStats = [
    { label: "Total Employees", value: "248", change: "+12 this month" },
    { label: "Present Today", value: "241", change: "97.2% attendance" },
    { label: "Pending Approvals", value: "23", change: "8 leave, 15 expenses" },
    { label: "Active Projects", value: "18", change: "142 tasks" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-background border-b border-border200 sticky top-0 z-50">
        <div className="px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex-1 max-w-lg">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search employees, modules..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-border300 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-gray-100 rounded-lg relative">
                <Bell className="h-5 w-5 text-muted-foreground" />
                <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
              </button>

              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <Settings className="h-5 w-5 text-muted-foreground" />
              </button>

              <div className="h-9 w-9 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-semibold text-sm">
                JD
              </div>

              <button className="p-2 hover:bg-gray-100 rounded-lg" title="Sign out">
                <LogOut className="h-5 w-5 text-muted-foreground" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">Welcome back, John</h1>
          <p className="text-muted-foreground mt-1">Here&apos;s what&apos;s happening with your organization today</p>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {quickStats.map((stat) => (
            <div key={stat.label} className="group relative overflow-hidden rounded-2xl bg-background border border-border backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-primary/20 p-6">
              {/* Gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              
              <div className="relative">
                <p className="text-muted-foreground text-sm font-medium mb-3">{stat.label}</p>
                <p className="text-4xl font-bold text-foreground mb-3">{stat.value}</p>
                <p className="text-sm text-primary/80 font-medium">{stat.change}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Modules Grid */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-6">Access Modules</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((module) => (
              <Link
                key={module.slug}
                to={`/modules/${module.slug}`}
                className="group relative overflow-hidden rounded-2xl bg-background border border-border backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-primary/20 p-8"
              >
                {/* Gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                
                <div className="relative">
                  <div className={`h-14 w-14 rounded-xl ${module.bgColor} flex items-center justify-center ${module.color} mb-6 transition-transform duration-300 group-hover:scale-110`}>
                    {module.icon}
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{module.name}</h3>
                  <p className="text-sm text-muted-foreground mb-6">{module.stats}</p>
                  <div className="inline-flex items-center gap-2 text-primary font-semibold text-sm opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1">
                    Open module
                    <span>â†’</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-background rounded-xl border border-border200">
              <div className="px-6 py-4 border-b border-border200">
                <h2 className="text-xl font-bold text-foreground">Recent Activity</h2>
              </div>
              <div className="divide-y divide-gray-200">
                {recentActivity.map((activity, idx) => (
                  <div key={idx} className="px-6 py-4 hover:bg-gray-50 transition">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-foreground font-medium">{activity.action}</p>
                        <p className="text-sm text-muted-foreground mt-1">{activity.time}</p>
                      </div>
                      <span className="text-xs font-semibold text-muted-foreground bg-gray-100 px-3 py-1 rounded-full">
                        {activity.type}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <div className="bg-background rounded-xl border border-border200 p-6">
              <h3 className="text-lg font-bold text-foreground mb-4">Quick Links</h3>
              <div className="space-y-3">
                <button className="w-full text-left px-4 py-2.5 rounded-lg hover:bg-gray-100 text-muted-foreground font-medium transition">
                  View org chart
                </button>
                <button className="w-full text-left px-4 py-2.5 rounded-lg hover:bg-gray-100 text-muted-foreground font-medium transition">
                  Pending approvals
                </button>
                <button className="w-full text-left px-4 py-2.5 rounded-lg hover:bg-gray-100 text-muted-foreground font-medium transition">
                  Download reports
                </button>
                <button className="w-full text-left px-4 py-2.5 rounded-lg hover:bg-gray-100 text-muted-foreground font-medium transition">
                  Team settings
                </button>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary to-accent rounded-xl p-6 text-white">
              <h3 className="text-lg font-bold mb-2">Need help?</h3>
              <p className="text-sm text-white/80 mb-4">
                Check our documentation or contact support
              </p>
              <button className="w-full bg-background text-primary font-semibold py-2 rounded-lg hover:bg-gray-100 transition">
                Get help
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
