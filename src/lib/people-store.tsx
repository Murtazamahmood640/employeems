import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Employee = {
  id: string;
  name: string;
  role: string;
  department: string;
  email: string;
  status: 'Active' | 'On Leave' | 'Terminated';
  joinDate: string;
  avatarId: string;
};

export type AttendanceRecord = {
  id: string;
  employeeId: string;
  date: string;
  status: 'Present' | 'Late' | 'Absent';
  clockInTime: string | null;
  clockOutTime: string | null;
};

export type LeaveRequest = {
  id: string;
  employeeId: string;
  type: string;
  startDate: string;
  endDate: string;
  days: number;
  status: 'Pending' | 'Approved' | 'Rejected';
};

type PeopleState = {
  employees: Employee[];
  attendance: AttendanceRecord[];
  leaveRequests: LeaveRequest[];
};

type PeopleContextType = PeopleState & {
  addEmployee: (emp: Omit<Employee, 'id'>) => void;
  updateEmployee: (id: string, emp: Partial<Employee>) => void;
  approveLeave: (id: string) => void;
  rejectLeave: (id: string) => void;
  clockIn: (employeeId: string) => void;
  clockOut: (employeeId: string) => void;
};

const defaultEmployees: Employee[] = [
  { id: '1', name: "Michael Chen", role: "Frontend Dev", department: "Engineering", email: "m.chen@example.com", status: "Active", joinDate: "2024-01-15", avatarId: "11" },
  { id: '2', name: "Emma Wilson", role: "UX Designer", department: "Design", email: "e.wilson@example.com", status: "Active", joinDate: "2023-11-01", avatarId: "44" },
  { id: '3', name: "James Rodriguez", role: "Account Executive", department: "Sales", email: "j.rodriguez@example.com", status: "Active", joinDate: "2024-03-10", avatarId: "68" },
  { id: '4', name: "Sophia Lee", role: "Product Manager", department: "Product", email: "s.lee@example.com", status: "Active", joinDate: "2023-06-22", avatarId: "47" },
  { id: '5', name: "William Taylor", role: "Backend Dev", department: "Engineering", email: "w.taylor@example.com", status: "Active", joinDate: "2024-02-05", avatarId: "59" },
];

const defaultAttendance: AttendanceRecord[] = [
  { id: 'a1', employeeId: '1', date: new Date().toISOString().split('T')[0], status: 'Present', clockInTime: '08:45 AM', clockOutTime: null },
  { id: 'a2', employeeId: '2', date: new Date().toISOString().split('T')[0], status: 'Late', clockInTime: '09:15 AM', clockOutTime: null },
  { id: 'a3', employeeId: '3', date: new Date().toISOString().split('T')[0], status: 'Absent', clockInTime: null, clockOutTime: null },
  { id: 'a4', employeeId: '4', date: new Date().toISOString().split('T')[0], status: 'Present', clockInTime: '08:55 AM', clockOutTime: null },
  { id: 'a5', employeeId: '5', date: new Date().toISOString().split('T')[0], status: 'Present', clockInTime: '09:00 AM', clockOutTime: null },
];

const defaultLeave: LeaveRequest[] = [
  { id: 'L1', employeeId: '2', type: 'Annual Leave', startDate: '2026-10-12', endDate: '2026-10-15', days: 4, status: 'Pending' },
  { id: 'L2', employeeId: '4', type: 'Sick Leave', startDate: '2026-10-05', endDate: '2026-10-05', days: 1, status: 'Pending' },
  { id: 'L3', employeeId: '3', type: 'Parental', startDate: '2026-11-01', endDate: '2026-11-30', days: 30, status: 'Pending' },
];

const PeopleContext = createContext<PeopleContextType | null>(null);

export function PeopleProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<PeopleState>(() => {
    const saved = localStorage.getItem('bythawk_people_state');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error("Failed to parse people state", e);
      }
    }
    return {
      employees: defaultEmployees,
      attendance: defaultAttendance,
      leaveRequests: defaultLeave
    };
  });

  useEffect(() => {
    localStorage.setItem('bythawk_people_state', JSON.stringify(state));
  }, [state]);

  const addEmployee = (emp: Omit<Employee, 'id'>) => {
    setState(prev => ({
      ...prev,
      employees: [...prev.employees, { ...emp, id: Date.now().toString() }]
    }));
  };

  const updateEmployee = (id: string, emp: Partial<Employee>) => {
    setState(prev => ({
      ...prev,
      employees: prev.employees.map(e => e.id === id ? { ...e, ...emp } : e)
    }));
  };

  const approveLeave = (id: string) => {
    setState(prev => ({
      ...prev,
      leaveRequests: prev.leaveRequests.map(l => l.id === id ? { ...l, status: 'Approved' } : l)
    }));
  };

  const rejectLeave = (id: string) => {
    setState(prev => ({
      ...prev,
      leaveRequests: prev.leaveRequests.map(l => l.id === id ? { ...l, status: 'Rejected' } : l)
    }));
  };

  const clockIn = (employeeId: string) => {
    const today = new Date().toISOString().split('T')[0];
    const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    setState(prev => {
      // Check if already clocked in today
      if (prev.attendance.some(a => a.employeeId === employeeId && a.date === today)) return prev;
      
      return {
        ...prev,
        attendance: [...prev.attendance, {
          id: Date.now().toString(),
          employeeId,
          date: today,
          status: 'Present',
          clockInTime: now,
          clockOutTime: null
        }]
      };
    });
  };

  const clockOut = (employeeId: string) => {
    const today = new Date().toISOString().split('T')[0];
    const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    setState(prev => ({
      ...prev,
      attendance: prev.attendance.map(a => 
        (a.employeeId === employeeId && a.date === today) 
          ? { ...a, clockOutTime: now } 
          : a
      )
    }));
  };

  return (
    <PeopleContext.Provider value={{
      ...state,
      addEmployee,
      updateEmployee,
      approveLeave,
      rejectLeave,
      clockIn,
      clockOut
    }}>
      {children}
    </PeopleContext.Provider>
  );
}

export function usePeople() {
  const context = useContext(PeopleContext);
  if (!context) throw new Error("usePeople must be used within PeopleProvider");
  return context;
}
