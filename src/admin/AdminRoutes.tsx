// resmanui-Recruit/src/Recruit/RecruitRoutes.tsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import RecruitDashboard from "./pages/RecruitDashboard";

const RecruitRoutes = () => {
  return (
    <Routes>
      <Route path='/dashboard' element={<RecruitDashboard />} />
      <Route path='/*' element={<div>Not Found</div>} />
    </Routes>
  );
};

export default RecruitRoutes;
