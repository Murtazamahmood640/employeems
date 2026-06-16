import { createFileRoute } from "react-router-dom";
import { useState, useEffect } from 'react';
import { Clock, Calendar as CalendarIcon, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';
import { usePeople } from '@/lib/people-store';



export default function PeopleAttendance() {
  const { employees, attendance, clockIn, clockOut } = usePeople();
  const [currentTime, setCurrentTime] = useState(new Date());

  // Simulate current logged-in user ID as '1' (Michael Chen)
  const currentUserId = '1';
  const currentUser = employees.find(e => e.id === currentUserId);
  
  const today = new Date().toISOString().split('T')[0];
  const currentUserAttendanceToday = attendance.find(a => a.employeeId === currentUserId && a.date === today);

  const isClockedIn = !!currentUserAttendanceToday?.clockInTime && !currentUserAttendanceToday?.clockOutTime;
  const isClockedOut = !!currentUserAttendanceToday?.clockOutTime;

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const todayAttendance = attendance.filter(a => a.date === today);

  return (
    <div className="flex-1 overflow-y-auto p-6 lg:p-10">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <div>
          <h2 className="text-3xl font-extrabold text-foreground">Attendance & Time</h2>
          <p className="text-muted-foreground mt-1">Manage your hours and monitor team attendance.</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 mb-8">
        {/* Clock In Widget */}
        <div className="uiverse-card lg:col-span-1">
          <div className="uiverse-card-content bg-surface-elevated/40 p-8 flex flex-col items-center justify-center text-center h-full">
            <div className="h-20 w-20 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-primary mb-6 shadow-inner relative">
              <Clock className="h-10 w-10" />
              {isClockedIn && (
                <span className="absolute top-1 right-1 h-4 w-4 rounded-full bg-green-500 border-2 border-surface-elevated"></span>
              )}
            </div>
            
            <h3 className="text-4xl font-extrabold font-mono tracking-tight mb-2">
              {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
            </h3>
            <p className="text-sm font-semibold text-muted-foreground mb-8">
              {currentTime.toLocaleDateString([], { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <div className="w-full flex flex-col gap-3">
              {!isClockedIn && !isClockedOut && (
                <button 
                  onClick={() => clockIn(currentUserId)}
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-primary to-accent text-white font-bold text-lg shadow-lg hover:shadow-primary/25 hover:scale-[1.02] transition-all cursor-pointer"
                >
                  Clock In Now
                </button>
              )}

              {isClockedIn && (
                <button 
                  onClick={() => clockOut(currentUserId)}
                  className="w-full py-4 rounded-2xl bg-amber-500/10 text-amber-500 hover:bg-amber-500/20 border border-amber-500/20 font-bold text-lg transition-all cursor-pointer"
                >
                  Clock Out
                </button>
              )}

              {isClockedOut && (
                <div className="w-full py-4 rounded-2xl bg-surface-elevated border border-border text-muted-foreground font-bold text-lg flex items-center justify-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500" /> Shift Completed
                </div>
              )}
            </div>

            {currentUserAttendanceToday && (
              <div className="w-full mt-6 pt-6 border-t border-border/50 text-sm flex justify-between px-2">
                <div className="text-left">
                  <p className="text-muted-foreground mb-1">Clock In</p>
                  <p className="font-bold text-foreground">{currentUserAttendanceToday.clockInTime}</p>
                </div>
                <div className="text-right">
                  <p className="text-muted-foreground mb-1">Clock Out</p>
                  <p className="font-bold text-foreground">{currentUserAttendanceToday.clockOutTime || '--:--'}</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Team Attendance Today */}
        <div className="uiverse-card lg:col-span-2">
          <div className="uiverse-card-content bg-surface-elevated/30 flex flex-col h-full">
            <div className="p-6 border-b border-border/50 flex items-center justify-between">
              <h3 className="text-xl font-bold flex items-center gap-2">
                Team Attendance 
                <span className="bg-primary/20 text-primary text-xs font-bold px-2 py-0.5 rounded-full">{todayAttendance.length} records</span>
              </h3>
            </div>
            <div className="p-0 overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-surface-elevated/50 text-xs uppercase tracking-wider text-muted-foreground font-semibold border-b border-border/50">
                    <th className="p-4 pl-6">Employee</th>
                    <th className="p-4">Status</th>
                    <th className="p-4 text-center">Clock In</th>
                    <th className="p-4 text-center">Clock Out</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/50">
                  {todayAttendance.map((record, i) => {
                    const emp = employees.find(e => e.id === record.employeeId);
                    if (!emp) return null;
                    return (
                      <tr key={i} className="hover:bg-surface-elevated/50 transition-colors group">
                        <td className="p-4 pl-6">
                          <div className="flex items-center gap-3">
                            <img src={`https://i.pravatar.cc/150?img=${emp.avatarId}`} alt={emp.name} className="h-9 w-9 rounded-full object-cover border border-border" />
                            <div>
                              <p className="font-bold text-foreground text-sm group-hover:text-primary transition-colors">
                                {emp.name}
                                {emp.id === currentUserId && <span className="ml-2 text-[10px] bg-primary/20 text-primary px-1.5 py-0.5 rounded uppercase">You</span>}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="p-4">
                          <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold ${
                            record.status === 'Present' ? 'bg-green-500/10 text-green-500 border border-green-500/20' : 
                            record.status === 'Late' ? 'bg-amber-500/10 text-amber-500 border border-amber-500/20' : 
                            'bg-red-500/10 text-red-500 border border-red-500/20'
                          }`}>
                            {record.status}
                          </span>
                        </td>
                        <td className="p-4 text-center text-sm font-medium text-foreground">{record.clockInTime || '--'}</td>
                        <td className="p-4 text-center text-sm font-medium text-muted-foreground">{record.clockOutTime || '--'}</td>
                      </tr>
                    );
                  })}
                  {todayAttendance.length === 0 && (
                    <tr>
                      <td colSpan={4} className="p-8 text-center text-muted-foreground">No team attendance recorded for today.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
