// resman-ui-recruit/src/recruit/RecruitRoutes.tsx
import { Routes, Route } from "react-router-dom";
import RecruitDashboard from "./pages/RecruitDashboard";
import Candidates from "./pages/Candidates";
import JobPostings from "./pages/JobPostings";

const RecruitRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<RecruitDashboard />} />
      <Route path="/jobs" element={<JobPostings />} />
      <Route path="/candidates" element={<Candidates />} />
      <Route path="*" element={<div>Not Found</div>} />
    </Routes>
  );
};

export default RecruitRoutes;