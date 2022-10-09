import Test from "./pages/Test";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import Dashboard from "./pages/Dashboard";
import Attendance from "./pages/Attendance";
import Leave from "./pages/Leave";
import Salary from "./pages/Salary";
import Policies from "./pages/Policies";
import Resignation from "./pages/Resignation";
import Header from "./custom_components/Header";
import Footer from "./custom_components/Footer";
import MyProfileDetails from "./pages/MyProfileDetails";
import MyProfileDetailsEdit from "./pages/MyProfileDetailsEdit";

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Router>
        <GlobalStyle />
        <header>
          <Header />
        </header>
        <div className="flex-1 overflow-y-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/leave" element={<Leave />} />
            <Route path="/salary" element={<Salary />} />
            <Route path="/policies" element={<Policies />} />
            <Route path="/resignation" element={<Resignation />} />
            <Route path="/my-profile-details" element={<MyProfileDetails />} />
            <Route
              path="/my-profile-details/my-profile-details-edit"
              element={<MyProfileDetailsEdit />}
            />
          </Routes>

          {/* <div className="fixed bottom-0 w-full">
            {" "}
            <Footer />
          </div> */}
        </div>
      </Router>
    </div>
  );
}

export default App;
