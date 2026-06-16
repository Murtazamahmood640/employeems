import { createFileRoute } from "react-router-dom";
import {
  Wallet, DollarSign, Calendar, FileText, Settings, Bell,
  Search, ArrowUpRight, ArrowDownRight, Download, CreditCard,
  Building, Receipt, Send, CheckCircle2, AlertCircle, FileDigit, Globe, Sun
} from 'lucide-react';



export default function PayrollDashboard() {
  return (
    <div className="flex h-screen bg-background overflow-hidden">
      {/* Sidebar - hidden on mobile */}
      <aside className="dash-sidebar hidden lg:flex">
        <div className="p-6 flex items-center gap-3">
          <div className="h-10 w-10 bg-white/20 rounded-xl flex items-center justify-center text-white shadow-inner">
            <Wallet className="h-6 w-6" />
          </div>
          <span className="text-white font-bold text-xl tracking-tight">Payroll</span>
        </div>
        
        <div className="px-4 py-2 flex flex-col gap-1.5 flex-1 overflow-y-auto">
          <p className="px-4 text-xs font-bold text-white/50 uppercase tracking-wider mb-2 mt-4">Processing</p>
          <a href="#" className="dash-nav-item active">
            <DollarSign className="h-5 w-5" />
            Pay Runs
          </a>
          <a href="#" className="dash-nav-item flex justify-between">
            <div className="flex items-center gap-3">
              <Receipt className="h-5 w-5" /> Expense Claims
            </div>
            <span className="bg-red-500/80 text-white text-[10px] px-1.5 py-0.5 rounded font-bold">12</span>
          </a>
          <a href="#" className="dash-nav-item">
            <FileText className="h-5 w-5" />
            Payslips
          </a>
          
          <p className="px-4 text-xs font-bold text-white/50 uppercase tracking-wider mb-2 mt-6">Compliance</p>
          <a href="#" className="dash-nav-item">
            <Building className="h-5 w-5" />
            Taxes & Statutory
          </a>
          <a href="#" className="dash-nav-item">
            <FileDigit className="h-5 w-5" />
            Year-End Reports
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
            <h1 className="text-2xl font-bold text-foreground hidden sm:block">Payroll Dashboard</h1>
            <div className="lg:hidden flex items-center gap-2">
              <div className="h-8 w-8 bg-primary text-white rounded-lg flex items-center justify-center font-bold">$</div>
              <span className="font-bold">Payroll</span>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="hidden md:flex relative mr-2">
              <Search className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input 
                type="text" 
                placeholder="Search employee or payslip..." 
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
                <img src="https://i.pravatar.cc/150?u=finance" alt="Admin" className="h-full w-full rounded-full object-cover" />
              </div>
            </div>
          </div>
        </header>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 lg:p-10">
          
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div>
              <h2 className="text-3xl font-extrabold text-foreground">October 2026 Pay Run</h2>
              <p className="text-muted-foreground mt-1">Status: <span className="font-semibold text-amber-500">Draft Processing</span> â€¢ Closes in 4 days</p>
            </div>
            <div className="flex items-center gap-3">
              <button className="btn-ghost py-2.5 px-4 text-sm"><Download className="h-4 w-4 mr-2" /> Export Bank File</button>
              <button className="btn-primary py-2.5 px-4 text-sm"><Send className="h-4 w-4 mr-2" /> Finalize Pay Run</button>
            </div>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {[
              { label: "Total Payroll (Est)", value: "$284,500", icon: DollarSign, trend: "+$4,200", trendUp: true, color: "text-blue-500", bg: "bg-blue-500/10" },
              { label: "Employees Processed", value: "245/247", icon: CheckCircle2, trend: "2 pending", trendUp: false, color: "text-green-500", bg: "bg-green-500/10" },
              { label: "Statutory Taxes", value: "$42,180", icon: Building, trend: "+1.2%", trendUp: true, color: "text-purple-500", bg: "bg-purple-500/10" },
              { label: "Expense Claims", value: "$3,450", icon: Receipt, trend: "12 claims", trendUp: true, color: "text-amber-500", bg: "bg-amber-500/10" },
            ].map((stat, i) => (
              <div key={i} className="uiverse-card group">
                <div className="uiverse-card-content p-6 bg-surface-elevated/40">
                  <div className="flex justify-between items-start mb-4">
                    <div className={`h-12 w-12 rounded-xl ${stat.bg} flex items-center justify-center ${stat.color} group-hover:scale-110 transition-transform`}>
                      <stat.icon className="h-6 w-6" />
                    </div>
                    <span className={`inline-flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-full ${stat.trendUp && stat.trend.includes('+') ? 'bg-amber-500/10 text-amber-500' : stat.trendUp ? 'bg-primary/10 text-primary' : 'bg-red-500/10 text-red-500'}`}>
                      {stat.trend}
                    </span>
                  </div>
                  <h3 className="text-3xl font-extrabold text-foreground mb-1">{stat.value}</h3>
                  <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Payroll List */}
            <div className="lg:col-span-2 uiverse-card">
              <div className="uiverse-card-content bg-surface-elevated/30 flex flex-col h-full">
                <div className="p-6 border-b border-border/50 flex items-center justify-between">
                  <h3 className="text-xl font-bold">Employee Payroll Breakdown</h3>
                  <div className="flex items-center gap-2">
                    <button className="px-3 py-1.5 text-xs font-semibold rounded-md border border-border bg-background shadow-sm text-foreground">All</button>
                    <button className="px-3 py-1.5 text-xs font-semibold rounded-md text-muted-foreground hover:text-foreground">Anomalies</button>
                  </div>
                </div>
                <div className="p-0 overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-surface-elevated/50 text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                        <th className="p-4 pl-6">Employee</th>
                        <th className="p-4">Base Salary</th>
                        <th className="p-4">Additions</th>
                        <th className="p-4">Deductions</th>
                        <th className="p-4 text-right pr-6">Net Pay</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border/50">
                      {[
                        { name: "Michael Chen", role: "Frontend Dev", base: "$7,500", add: "$200", ded: "$1,850", net: "$5,850", status: "ok" },
                        { name: "Emma Wilson", role: "UX Designer", base: "$6,800", add: "$0", ded: "$1,620", net: "$5,180", status: "ok" },
                        { name: "James Rodriguez", role: "Account Executive", base: "$5,500", add: "$1,200 (Comm)", ded: "$1,450", net: "$5,250", status: "review" },
                        { name: "Sophia Lee", role: "Product Manager", base: "$8,200", add: "$0", ded: "$2,100", net: "$6,100", status: "ok" },
                        { name: "William Taylor", role: "Backend Dev", base: "$7,800", add: "$0", ded: "$2,400 (LWOP)", net: "$5,400", status: "review" },
                      ].map((emp, i) => (
                        <tr key={i} className="hover:bg-surface-elevated/50 transition-colors group">
                          <td className="p-4 pl-6">
                            <div>
                              <p className="font-bold text-foreground text-sm group-hover:text-primary transition-colors flex items-center gap-2">
                                {emp.name}
                                {emp.status === 'review' && <AlertCircle className="h-3.5 w-3.5 text-amber-500" />}
                              </p>
                              <p className="text-xs text-muted-foreground">{emp.role}</p>
                            </div>
                          </td>
                          <td className="p-4 text-sm font-medium text-muted-foreground">{emp.base}</td>
                          <td className="p-4 text-sm font-medium text-green-500">{emp.add}</td>
                          <td className="p-4 text-sm font-medium text-red-500">{emp.ded}</td>
                          <td className="p-4 text-right pr-6 font-bold text-foreground">{emp.net}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Pending Expenses */}
            <div className="uiverse-card">
              <div className="uiverse-card-content bg-surface-elevated/30 flex flex-col h-full">
                <div className="p-6 border-b border-border/50 flex items-center justify-between">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    Pending Claims
                    <span className="bg-red-500/20 text-red-500 text-xs font-bold px-2 py-0.5 rounded-full">12</span>
                  </h3>
                </div>
                <div className="p-6 flex flex-col gap-4">
                  {[
                    { name: "David Kim", cat: "Travel", amount: "$345.50", date: "Oct 12", status: "Pending HR" },
                    { name: "Olivia Davis", cat: "Equipment", amount: "$89.99", date: "Oct 10", status: "Pending Mgr" },
                    { name: "Lucas Martinez", cat: "Client Dinner", amount: "$156.00", date: "Oct 08", status: "Pending HR" },
                  ].map((req, i) => (
                    <div key={i} className="p-4 rounded-2xl bg-background border border-border/60 hover:border-primary/30 transition-colors">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <p className="font-bold text-sm text-foreground">{req.name}</p>
                          <p className="text-xs font-medium text-muted-foreground mt-0.5">{req.date} â€¢ {req.cat}</p>
                        </div>
                        <span className="font-bold text-foreground text-lg">{req.amount}</span>
                      </div>
                      <div className="flex items-center justify-between mt-4">
                        <span className="text-[10px] uppercase tracking-wider font-bold text-amber-500 bg-amber-500/10 px-2 py-1 rounded">
                          {req.status}
                        </span>
                        <button className="text-xs font-bold text-primary hover:underline">Review Claim</button>
                      </div>
                    </div>
                  ))}
                  <button className="w-full py-3 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors mt-2 border border-dashed border-border rounded-xl">
                    View all 12 expense claims
                  </button>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </main>
    </div>
  );
}
