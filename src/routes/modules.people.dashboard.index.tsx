import { createFileRoute, Link } from "react-router-dom";
import {
  Users, Clock, Sun, Plus, ArrowUpRight, ArrowDownRight,
  Download, CheckCircle2, XCircle
} from 'lucide-react';
import { usePeople } from '@/lib/people-store';



export default function PeopleDashboardOverview() {
  const { employees, attendance, leaveRequests, approveLeave, rejectLeave } = usePeople();

  const today = new Date().toISOString().split('T')[0];
  const activeEmployees = employees.filter(e => e.status !== 'Terminated').length;
  const todayAttendance = attendance.filter(a => a.date === today);
  const presentCount = todayAttendance.filter(a => a.status === 'Present' || a.status === 'Late').length;
  const attendanceRate = activeEmployees > 0 ? Math.round((presentCount / activeEmployees) * 100) : 0;
  
  const pendingLeaves = leaveRequests.filter(l => l.status === 'Pending');
  const onLeaveTodayCount = leaveRequests.filter(l => 
    l.status === 'Approved' && l.startDate <= today && l.endDate >= today
  ).length;

  const newThisMonth = employees.filter(e => {
    const joinDate = new Date(e.joinDate);
    const now = new Date();
    return joinDate.getMonth() === now.getMonth() && joinDate.getFullYear() === now.getFullYear();
  }).length;

  return (
    <div className="flex-1 overflow-y-auto p-6 lg:p-10">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <div>
          <h2 className="text-3xl font-extrabold text-foreground">Welcome back, Admin! <span className="inline-block animate-wave">ðŸ‘‹</span></h2>
          <p className="text-muted-foreground mt-1">Here is what is happening across your workforce today.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="btn-ghost py-2.5 px-4 text-sm"><Download className="h-4 w-4 mr-2" /> Export</button>
          <Link to="/modules/people/dashboard/directory" className="btn-primary py-2.5 px-4 text-sm"><Plus className="h-4 w-4 mr-2" /> Add Employee</Link>
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {[
          { label: "Total Employees", value: activeEmployees.toString(), icon: Users, trend: "+1", trendUp: true, color: "text-blue-500", bg: "bg-blue-500/10" },
          { label: "On Leave Today", value: onLeaveTodayCount.toString(), icon: Sun, trend: pendingLeaves.length > 0 ? `${pendingLeaves.length} pending` : "0 pending", trendUp: pendingLeaves.length === 0, color: "text-amber-500", bg: "bg-amber-500/10" },
          { label: "Attendance Rate", value: `${attendanceRate}%`, icon: Clock, trend: "+1.2%", trendUp: true, color: "text-green-500", bg: "bg-green-500/10" },
          { label: "New This Month", value: newThisMonth.toString(), icon: Plus, trend: "0", trendUp: true, color: "text-purple-500", bg: "bg-purple-500/10" },
        ].map((stat, i) => (
          <div key={i} className="uiverse-card group">
            <div className="uiverse-card-content p-6 bg-surface-elevated/40">
              <div className="flex justify-between items-start mb-4">
                <div className={`h-12 w-12 rounded-xl ${stat.bg} flex items-center justify-center ${stat.color} group-hover:scale-110 transition-transform`}>
                  <stat.icon className="h-6 w-6" />
                </div>
                <span className={`inline-flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-full ${stat.trendUp ? 'bg-green-500/10 text-green-500' : 'bg-amber-500/10 text-amber-500'}`}>
                  {stat.trendUp ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
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
        {/* Attendance List */}
        <div className="lg:col-span-2 uiverse-card">
          <div className="uiverse-card-content bg-surface-elevated/30 flex flex-col h-full">
            <div className="p-6 border-b border-border/50 flex items-center justify-between">
              <h3 className="text-xl font-bold">Attendance Today</h3>
              <Link to="/modules/people/dashboard/attendance" className="text-sm font-semibold text-primary hover:text-primary/80">View All</Link>
            </div>
            <div className="p-0 overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-surface-elevated/50 text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                    <th className="p-4 pl-6">Employee</th>
                    <th className="p-4">Department</th>
                    <th className="p-4">Status</th>
                    <th className="p-4 text-right pr-6">Time</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/50">
                  {todayAttendance.slice(0, 5).map((record, i) => {
                    const emp = employees.find(e => e.id === record.employeeId);
                    if (!emp) return null;
                    return (
                      <tr key={i} className="hover:bg-surface-elevated/50 transition-colors group">
                        <td className="p-4 pl-6">
                          <div className="flex items-center gap-3">
                            <img src={`https://i.pravatar.cc/150?img=${emp.avatarId}`} alt={emp.name} className="h-10 w-10 rounded-full object-cover border border-border" />
                            <div>
                              <p className="font-bold text-foreground text-sm group-hover:text-primary transition-colors">{emp.name}</p>
                              <p className="text-xs text-muted-foreground">{emp.role}</p>
                            </div>
                          </div>
                        </td>
                        <td className="p-4 text-sm text-muted-foreground">{emp.department}</td>
                        <td className="p-4">
                          <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold ${
                            record.status === 'Present' ? 'bg-green-500/10 text-green-500 border border-green-500/20' : 
                            record.status === 'Late' ? 'bg-amber-500/10 text-amber-500 border border-amber-500/20' : 
                            'bg-red-500/10 text-red-500 border border-red-500/20'
                          }`}>
                            {record.status}
                          </span>
                        </td>
                        <td className="p-4 text-right pr-6 text-sm font-medium text-foreground">{record.clockInTime || '--'}</td>
                      </tr>
                    );
                  })}
                  {todayAttendance.length === 0 && (
                    <tr>
                      <td colSpan={4} className="p-8 text-center text-muted-foreground text-sm">No attendance records for today.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Pending Requests */}
        <div className="uiverse-card">
          <div className="uiverse-card-content bg-surface-elevated/30 flex flex-col h-full">
            <div className="p-6 border-b border-border/50 flex items-center justify-between">
              <h3 className="text-xl font-bold flex items-center gap-2">
                Pending Leave 
                {pendingLeaves.length > 0 && <span className="bg-accent/20 text-accent text-xs font-bold px-2 py-0.5 rounded-full">{pendingLeaves.length}</span>}
              </h3>
            </div>
            <div className="p-6 flex flex-col gap-4">
              {pendingLeaves.slice(0, 4).map((req, i) => {
                const emp = employees.find(e => e.id === req.employeeId);
                if (!emp) return null;
                return (
                  <div key={i} className="p-4 rounded-2xl bg-background border border-border/60 hover:border-primary/30 transition-colors">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <img src={`https://i.pravatar.cc/150?img=${emp.avatarId}`} alt={emp.name} className="h-10 w-10 rounded-full" />
                        <div>
                          <p className="font-bold text-sm text-foreground">{emp.name}</p>
                          <p className="text-xs font-medium text-primary bg-primary/10 inline-block px-1.5 py-0.5 rounded mt-1">{req.type}</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-surface-elevated rounded-lg p-2.5 mb-4 text-xs flex justify-between items-center text-muted-foreground">
                      <span>{req.startDate} to {req.endDate}</span>
                      <span className="font-bold text-foreground">{req.days} day{req.days > 1 ? 's' : ''}</span>
                    </div>
                    <div className="flex gap-2">
                      <button onClick={() => approveLeave(req.id)} className="flex-1 bg-green-500/10 hover:bg-green-500/20 text-green-600 font-bold py-2 rounded-xl text-xs transition-colors flex items-center justify-center gap-1 cursor-pointer">
                        <CheckCircle2 className="h-3.5 w-3.5" /> Approve
                      </button>
                      <button onClick={() => rejectLeave(req.id)} className="flex-1 bg-red-500/10 hover:bg-red-500/20 text-red-600 font-bold py-2 rounded-xl text-xs transition-colors flex items-center justify-center gap-1 cursor-pointer">
                        <XCircle className="h-3.5 w-3.5" /> Reject
                      </button>
                    </div>
                  </div>
                );
              })}
              {pendingLeaves.length === 0 && (
                <p className="text-sm text-center text-muted-foreground py-4">No pending leave requests.</p>
              )}
              {pendingLeaves.length > 4 && (
                <Link to="/modules/people/dashboard/leave" className="w-full py-3 text-sm font-semibold text-center text-muted-foreground hover:text-primary transition-colors mt-2 block">
                  View all requests
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
