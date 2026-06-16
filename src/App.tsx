import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/site/Header";
import { Footer } from "./components/site/Footer";

// Imports
import About from "./routes/about";
import Blog from "./routes/blog";
import Contact from "./routes/contact";
import Dashboard from "./routes/dashboard";
import FAQ from "./routes/faq";
import FeaturesPage from "./routes/features";
import ForgotPassword from "./routes/forgot-password";
import Home from "./routes/index";
import IntegrationsPage from "./routes/integrations";
import Login from "./routes/login";
import ModuleDetail from "./routes/module-detail";
import ModuleSlugDetail from "./routes/modules.$slug";
import ModuleLogin from "./routes/modules.$slug_.login";
import DeskDashboard from "./routes/modules.desk.dashboard";
import ModulesPage from "./routes/modules.index";
import PayrollDashboard from "./routes/modules.payroll.dashboard";
import PeopleAttendance from "./routes/modules.people.dashboard.attendance";
import PeopleDirectory from "./routes/modules.people.dashboard.directory";
import PeopleDashboardOverview from "./routes/modules.people.dashboard.index";
import PeopleLeaveRequests from "./routes/modules.people.dashboard.leave";
import PeopleDashboardLayout from "./routes/modules.people.dashboard";
import ProjectsDashboard from "./routes/modules.projects.dashboard";
import Pricing from "./routes/pricing";
import PrivacyPolicy from "./routes/privacy";
import SecurityPage from "./routes/security";
import Signup from "./routes/signup";
import TermsOfService from "./routes/terms";

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 pt-20">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/" element={<Home />} />
            <Route path="/integrations" element={<IntegrationsPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/module-detail" element={<ModuleDetail />} />
            <Route path="/modules/:slug" element={<ModuleSlugDetail />} />
            <Route path="/modules/:slug_/login" element={<ModuleLogin />} />
            <Route path="/modules/desk/dashboard" element={<DeskDashboard />} />
            <Route path="/modules/" element={<ModulesPage />} />
            <Route path="/modules/payroll/dashboard" element={<PayrollDashboard />} />
            <Route path="/modules/people/dashboard/attendance" element={<PeopleAttendance />} />
            <Route path="/modules/people/dashboard/directory" element={<PeopleDirectory />} />
            <Route path="/modules/people/dashboard/" element={<PeopleDashboardOverview />} />
            <Route path="/modules/people/dashboard/leave" element={<PeopleLeaveRequests />} />
            <Route path="/modules/people/dashboard" element={<PeopleDashboardLayout />} />
            <Route path="/modules/projects/dashboard" element={<ProjectsDashboard />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/security" element={<SecurityPage />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/terms" element={<TermsOfService />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
