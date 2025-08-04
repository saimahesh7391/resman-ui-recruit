import RecruitRoutes from "./admin/AdminRoutes";
import "./App.css";
import Button from "@mui/material/Button";

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
