# Implementation Guide for Employee Zen Dashboard Modules

## Overview
Each module in Employee Zen should have its own dashboard page accessible from the main dashboard. This guide shows you how to create detailed module pages and dashboards.

## 1. Creating a Module Dashboard Page

### Template Structure
Each module dashboard should follow this structure:

```typescript
import { createFileRoute } from "@tanstack/react-router";
import { BarChart3, Users, Clock, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/modules/$slug/dashboard")({
  head: ({ params }) => ({
    meta: [
      { title: `${params.slug} Dashboard - Employee Zen` },
      { name: "description", content: `Manage your ${params.slug} module` },
    ],
  }),
  component: ModuleDashboard,
});

function ModuleDashboard() {
  // Get module slug from params
  // Fetch data based on module type
  // Render module-specific dashboard
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Module dashboard content */}
    </div>
  );
}
```

## 2. Dashboard Components

### Common Dashboard Sections

#### Stats Cards
```tsx
const stats = [
  { label: "Total Records", value: "248", change: "+12 this month" },
  { label: "Active", value: "241", change: "97% active" },
];

<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
  {stats.map((stat) => (
    <div key={stat.label} className="bg-white rounded-lg p-6 border border-gray-200">
      <p className="text-gray-600 text-sm font-medium mb-1">{stat.label}</p>
      <p className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</p>
      <p className="text-sm text-gray-500">{stat.change}</p>
    </div>
  ))}
</div>
```

#### Data Table
```tsx
<div className="bg-white rounded-xl border border-gray-200">
  <div className="px-6 py-4 border-b border-gray-200">
    <h2 className="text-xl font-bold text-gray-900">Data</h2>
  </div>
  <table className="w-full">
    <thead className="border-b border-gray-200">
      <tr>
        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Column</th>
        {/* More headers */}
      </tr>
    </thead>
    <tbody>
      {/* Table rows */}
    </tbody>
  </table>
</div>
```

#### Chart/Analytics
```tsx
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

<div className="bg-white rounded-xl border border-gray-200 p-6">
  <h3 className="text-lg font-bold text-gray-900 mb-4">Analytics</h3>
  <ResponsiveContainer width="100%" height={300}>
    <BarChart data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="value" fill="#7c3aed" />
    </BarChart>
  </ResponsiveContainer>
</div>
```

## 3. Module-Specific Dashboards

### People Module Dashboard
**Key Sections:**
- Employee count and headcount trends
- Department breakdown
- New hires this month
- Organization chart
- Employee directory search
- Recent activity

### Attendance Module Dashboard
**Key Sections:**
- Attendance rate (daily/weekly/monthly)
- Clock-in/out status
- Attendance heatmap by day/time
- Absentee list
- Late arrivals
- Overtime tracking

### Leave Module Dashboard
**Key Sections:**
- Leave balance by employee
- Pending leave requests
- Approved leaves this month
- Leave type breakdown
- Team calendar
- Policy summary

### Payroll Module Dashboard
**Key Sections:**
- Monthly payroll summary
- Salary components breakdown
- Deductions and taxes
- Payroll cycle status
- Salary slip generation
- Compensation trends

### Performance Module Dashboard
**Key Sections:**
- Active review cycles
- Performance ratings distribution
- 360 feedback status
- KPI achievement rates
- Calibration summary
- Review completion rate

### Projects Module Dashboard
**Key Sections:**
- Active projects count
- Task distribution by status
- Team workload
- Project timeline
- Task completion rate
- Overdue tasks

## 4. Styling Guidelines

### Color Usage
```tsx
// Module accent colors
const moduleColors = {
  people: { color: "text-green-600", bg: "bg-green-50" },
  attendance: { color: "text-amber-600", bg: "bg-amber-50" },
  leave: { color: "text-cyan-600", bg: "bg-cyan-50" },
  payroll: { color: "text-emerald-600", bg: "bg-emerald-50" },
  performance: { color: "text-pink-600", bg: "bg-pink-50" },
  projects: { color: "text-purple-600", bg: "bg-purple-50" },
};

// Usage
<div className={moduleColors[moduleName].bg}>
  <span className={moduleColors[moduleName].color}>Content</span>
</div>
```

### Button Styles
```tsx
// Primary Action
<button className="bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold py-2 px-6 rounded-lg hover:from-purple-700 hover:to-purple-800">
  Action
</button>

// Secondary Action
<button className="border border-gray-300 text-gray-900 font-semibold py-2 px-6 rounded-lg hover:bg-gray-50">
  Secondary
</button>
```

## 5. Data Integration

### Fetching Module Data
```tsx
import useSWR from "swr";

function ModuleDashboard() {
  const { data, error, isLoading } = useSWR(`/api/modules/${slug}/data`, fetcher);
  
  if (isLoading) return <LoadingState />;
  if (error) return <ErrorState />;
  
  return <DashboardContent data={data} />;
}
```

### Example API Endpoints to Create
```
GET  /api/modules/people/stats
GET  /api/modules/people/employees
POST /api/modules/people/export

GET  /api/modules/attendance/stats
GET  /api/modules/attendance/records
POST /api/modules/attendance/export

GET  /api/modules/leave/stats
GET  /api/modules/leave/requests
POST /api/modules/leave/approve
```

## 6. Adding Module Pages to Sidebar/Nav

Update the dashboard modules list to link to module dashboards:

```tsx
const modules = [
  {
    slug: "people",
    name: "People",
    icon: <Users className="h-6 w-6" />,
    dashboardUrl: "/modules/people/dashboard"
  },
  // ... more modules
];

// In dashboard, link to module dashboard
<Link to={module.dashboardUrl} className="...">
  {module.name}
</Link>
```

## 7. Common Features for All Modules

### Export Functionality
```tsx
<button className="inline-flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-lg">
  <Download className="h-4 w-4" />
  Export as CSV
</button>
```

### Filters and Search
```tsx
<div className="flex gap-4 mb-6">
  <input 
    type="search" 
    placeholder="Search..."
    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg"
  />
  <select className="px-4 py-2 border border-gray-300 rounded-lg">
    <option>All</option>
    {/* Filter options */}
  </select>
  <button className="px-4 py-2 bg-purple-600 text-white rounded-lg">
    Filter
  </button>
</div>
```

### Actions Menu
```tsx
<div className="relative group">
  <button className="p-2 hover:bg-gray-100 rounded-lg">
    <MoreVertical className="h-5 w-5" />
  </button>
  <div className="absolute right-0 mt-1 w-48 bg-white rounded-lg shadow-lg hidden group-hover:block">
    <button className="w-full text-left px-4 py-2 hover:bg-gray-100">Edit</button>
    <button className="w-full text-left px-4 py-2 hover:bg-gray-100">Delete</button>
    <button className="w-full text-left px-4 py-2 hover:bg-gray-100">Export</button>
  </div>
</div>
```

## 8. Real-Time Updates

### WebSocket Integration Example
```tsx
useEffect(() => {
  const socket = io(process.env.REACT_APP_API_URL);
  
  socket.on(`module:${slug}:update`, (data) => {
    // Update dashboard with new data
    setData(prev => ({ ...prev, ...data }));
  });
  
  return () => socket.disconnect();
}, [slug]);
```

## 9. Performance Tips

1. **Pagination** - Load large datasets with pagination
2. **Caching** - Use SWR with appropriate cache times
3. **Lazy Loading** - Load charts/tables on demand
4. **Infinite Scroll** - For activity feeds and lists
5. **Virtual Scrolling** - For very large tables

## 10. Accessibility

- Use semantic HTML tags
- Add ARIA labels for icons
- Ensure color contrast ratios meet WCAG guidelines
- Make tables sortable with keyboard navigation
- Include skip links for navigation

---

## Quick Start: Create People Module Dashboard

```bash
# 1. Create the file
touch src/routes/modules.people.dashboard.tsx

# 2. Use the template above with People-specific data
# 3. Add route to navigation
# 4. Connect to API endpoint
# 5. Test responsiveness
```

This structure will ensure consistency across all module dashboards and provide users with a familiar, professional interface for managing their HR operations.
