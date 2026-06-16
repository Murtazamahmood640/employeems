import { createFileRoute } from "react-router-dom";
import { Calendar, CheckCircle2, XCircle, Search, Filter, Clock } from 'lucide-react';
import { usePeople } from '@/lib/people-store';



export default function PeopleLeaveRequests() {
  const { employees, leaveRequests, approveLeave, rejectLeave } = usePeople();

  const getEmployee = (id: string) => employees.find(e => e.id === id);

  return (
    <div className="flex-1 overflow-y-auto p-6 lg:p-10">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <div>
          <h2 className="text-3xl font-extrabold text-foreground">Leave Requests</h2>
          <p className="text-muted-foreground mt-1">Review and manage time off for your team.</p>
        </div>
        <button className="btn-primary py-2.5 px-4 text-sm cursor-pointer">
          Apply for Leave
        </button>
      </div>

      <div className="uiverse-card mb-8">
        <div className="uiverse-card-content bg-surface-elevated/30 p-4 flex flex-wrap gap-4 items-center justify-between">
          <div className="flex gap-2 bg-background p-1 rounded-lg border border-border">
            <button className="px-4 py-1.5 text-sm font-bold bg-surface-elevated shadow-sm rounded-md">All</button>
            <button className="px-4 py-1.5 text-sm font-bold text-muted-foreground hover:text-foreground rounded-md">Pending</button>
            <button className="px-4 py-1.5 text-sm font-bold text-muted-foreground hover:text-foreground rounded-md">Approved</button>
          </div>
          <div className="relative flex-1 min-w-[200px] max-w-sm">
            <Search className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input 
              type="text" 
              placeholder="Search by name..." 
              className="pl-9 pr-4 py-2 w-full bg-background border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            />
          </div>
        </div>
      </div>

      <div className="grid gap-6">
        {leaveRequests.length === 0 && (
          <div className="p-12 text-center text-muted-foreground border border-dashed border-border rounded-2xl">
            No leave requests found.
          </div>
        )}
        
        {leaveRequests.map(req => {
          const emp = getEmployee(req.employeeId);
          if (!emp) return null;
          
          return (
            <div key={req.id} className="uiverse-card group">
              <div className="uiverse-card-content bg-surface-elevated/40 p-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
                
                <div className="flex items-center gap-4 flex-1">
                  <img src={`https://i.pravatar.cc/150?img=${emp.avatarId}`} alt={emp.name} className="h-12 w-12 rounded-full border border-border object-cover" />
                  <div>
                    <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">{emp.name}</h3>
                    <p className="text-sm text-muted-foreground">{emp.department} â€¢ {emp.role}</p>
                  </div>
                </div>

                <div className="flex-1">
                  <div className="inline-flex items-center gap-1.5 bg-primary/10 text-primary px-2.5 py-1 rounded-md text-xs font-bold mb-2">
                    <Calendar className="h-3.5 w-3.5" />
                    {req.type}
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="font-semibold text-foreground">{req.startDate}</span>
                    <span className="text-muted-foreground">to</span>
                    <span className="font-semibold text-foreground">{req.endDate}</span>
                    <span className="text-muted-foreground bg-surface-elevated px-2 py-0.5 rounded ml-2">
                      {req.days} day{req.days > 1 ? 's' : ''}
                    </span>
                  </div>
                </div>

                <div className="flex-1 flex md:justify-end">
                  {req.status === 'Pending' ? (
                    <div className="flex items-center gap-3 w-full md:w-auto">
                      <button 
                        onClick={() => approveLeave(req.id)}
                        className="flex-1 md:flex-none bg-green-500/10 hover:bg-green-500/20 border border-green-500/20 text-green-600 font-bold py-2 px-6 rounded-xl text-sm transition-all flex items-center justify-center gap-2 cursor-pointer hover:scale-105"
                      >
                        <CheckCircle2 className="h-4 w-4" /> Approve
                      </button>
                      <button 
                        onClick={() => rejectLeave(req.id)}
                        className="flex-1 md:flex-none bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 text-red-600 font-bold py-2 px-6 rounded-xl text-sm transition-all flex items-center justify-center gap-2 cursor-pointer hover:scale-105"
                      >
                        <XCircle className="h-4 w-4" /> Reject
                      </button>
                    </div>
                  ) : (
                    <div className={`px-4 py-2 rounded-xl border flex items-center gap-2 font-bold text-sm ${
                      req.status === 'Approved' 
                        ? 'bg-green-500/5 border-green-500/20 text-green-500' 
                        : 'bg-red-500/5 border-red-500/20 text-red-500'
                    }`}>
                      {req.status === 'Approved' ? <CheckCircle2 className="h-4 w-4" /> : <XCircle className="h-4 w-4" />}
                      {req.status}
                    </div>
                  )}
                </div>

              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
