import { Suspense } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import RecruitRoutes from "./recruit/RecruitRoutes";


function App() {
  return (
    <>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <RecruitRoutes />
        </Suspense>
      </Router>
    </>
  );
}

export default App;
