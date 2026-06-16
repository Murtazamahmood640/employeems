import { createFileRoute } from "react-router-dom";
import { useState } from 'react';
import { Search, Plus, Filter, MoreHorizontal, Mail, Briefcase, Calendar, CheckCircle2, X } from 'lucide-react';
import { usePeople } from '@/lib/people-store';



export default function PeopleDirectory() {
  const { employees, addEmployee } = usePeople();
  const [searchTerm, setSearchTerm] = useState('');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const filteredEmployees = employees.filter(e => 
    e.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    e.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
    e.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex-1 overflow-y-auto p-6 lg:p-10 relative">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <div>
          <h2 className="text-3xl font-extrabold text-foreground">Employee Directory</h2>
          <p className="text-muted-foreground mt-1">Manage your team members and their roles.</p>
        </div>
        <button onClick={() => setIsAddModalOpen(true)} className="btn-primary py-2.5 px-4 text-sm cursor-pointer">
          <Plus className="h-4 w-4 mr-2" /> Add Employee
        </button>
      </div>

      <div className="uiverse-card mb-8">
        <div className="uiverse-card-content bg-surface-elevated/30 p-4 flex flex-wrap gap-4 items-center justify-between">
          <div className="relative flex-1 min-w-[200px] max-w-md">
            <Search className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input 
              type="text" 
              placeholder="Search by name, role, or department..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9 pr-4 py-2 w-full bg-background border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            />
          </div>
          <div className="flex items-center gap-2">
            <button className="h-9 px-3 rounded-lg border border-border bg-background text-muted-foreground flex items-center gap-2 text-sm font-medium hover:bg-surface-elevated transition-colors cursor-pointer">
              <Filter className="h-4 w-4" /> Filter
            </button>
          </div>
        </div>
      </div>

      <div className="uiverse-card">
        <div className="uiverse-card-content bg-surface-elevated/30">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-elevated/50 text-xs uppercase tracking-wider text-muted-foreground font-semibold border-b border-border/50">
                  <th className="p-4 pl-6">Employee</th>
                  <th className="p-4">Contact</th>
                  <th className="p-4">Department & Role</th>
                  <th className="p-4">Status</th>
                  <th className="p-4">Joined</th>
                  <th className="p-4 text-right pr-6">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/50">
                {filteredEmployees.map((emp) => (
                  <tr key={emp.id} className="hover:bg-surface-elevated/50 transition-colors group">
                    <td className="p-4 pl-6">
                      <div className="flex items-center gap-3">
                        <img src={`https://i.pravatar.cc/150?img=${emp.avatarId}`} alt={emp.name} className="h-10 w-10 rounded-full object-cover border border-border" />
                        <span className="font-bold text-foreground text-sm group-hover:text-primary transition-colors">{emp.name}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                        <Mail className="h-3.5 w-3.5" /> {emp.email}
                      </div>
                    </td>
                    <td className="p-4">
                      <p className="font-semibold text-sm text-foreground">{emp.department}</p>
                      <p className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5">
                        <Briefcase className="h-3 w-3" /> {emp.role}
                      </p>
                    </td>
                    <td className="p-4">
                      <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold ${
                        emp.status === 'Active' ? 'bg-green-500/10 text-green-500 border border-green-500/20' : 
                        emp.status === 'On Leave' ? 'bg-amber-500/10 text-amber-500 border border-amber-500/20' : 
                        'bg-red-500/10 text-red-500 border border-red-500/20'
                      }`}>
                        {emp.status === 'Active' && <CheckCircle2 className="h-3 w-3" />}
                        {emp.status}
                      </span>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                        <Calendar className="h-3.5 w-3.5" /> {emp.joinDate}
                      </div>
                    </td>
                    <td className="p-4 text-right pr-6">
                      <button className="text-muted-foreground hover:text-foreground cursor-pointer p-1 rounded hover:bg-surface-elevated transition-colors">
                        <MoreHorizontal className="h-5 w-5" />
                      </button>
                    </td>
                  </tr>
                ))}
                {filteredEmployees.length === 0 && (
                  <tr>
                    <td colSpan={6} className="p-8 text-center text-muted-foreground">No employees found.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {isAddModalOpen && (
        <AddEmployeeModal 
          onClose={() => setIsAddModalOpen(false)} 
          onAdd={(emp) => { addEmployee(emp); setIsAddModalOpen(false); }} 
        />
      )}
    </div>
  );
}

function AddEmployeeModal({ onClose, onAdd }: { onClose: () => void, onAdd: (emp: any) => void }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    department: '',
    joinDate: new Date().toISOString().split('T')[0],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd({
      ...formData,
      status: 'Active',
      avatarId: Math.floor(Math.random() * 70).toString()
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div className="bg-surface-elevated border border-border w-full max-w-lg rounded-2xl shadow-2xl animate-in zoom-in-95 duration-200 overflow-hidden flex flex-col max-h-[90vh]">
        <div className="p-6 border-b border-border flex items-center justify-between">
          <h3 className="text-xl font-bold">Add New Employee</h3>
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground p-1 rounded-lg hover:bg-background transition-colors cursor-pointer">
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6 flex flex-col gap-4 overflow-y-auto">
          <div>
            <label className="block text-sm font-semibold mb-1.5">Full Name</label>
            <input required type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="John Doe" />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1.5">Email Address</label>
            <input required type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="john@example.com" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold mb-1.5">Department</label>
              <select required value={formData.department} onChange={e => setFormData({...formData, department: e.target.value})} className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 appearance-none">
                <option value="">Select...</option>
                <option value="Engineering">Engineering</option>
                <option value="Design">Design</option>
                <option value="Sales">Sales</option>
                <option value="Product">Product</option>
                <option value="HR">HR</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1.5">Role</label>
              <input required type="text" value={formData.role} onChange={e => setFormData({...formData, role: e.target.value})} className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="e.g. Developer" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1.5">Join Date</label>
            <input required type="date" value={formData.joinDate} onChange={e => setFormData({...formData, joinDate: e.target.value})} className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50" />
          </div>
          
          <div className="mt-6 flex justify-end gap-3 pt-4 border-t border-border">
            <button type="button" onClick={onClose} className="px-4 py-2.5 rounded-lg text-sm font-semibold text-foreground hover:bg-background transition-colors cursor-pointer">Cancel</button>
            <button type="submit" className="btn-primary px-6 py-2.5 text-sm cursor-pointer">Add Employee</button>
          </div>
        </form>
      </div>
    </div>
  );
}
