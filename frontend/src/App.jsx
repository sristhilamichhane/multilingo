import "./App.css";

// import LocaleContext from "./LocaleContext";
import { Suspense } from "react";
// import Sidebar from "./Sidebar";
import "regenerator-runtime/runtime";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Practice from "./Pages/Practice";
import LearnLesson from "./Pages/LearnLesson";
import Quiz from "./Pages/Quiz";
import AddQuestion from "./Pages/AddQuestion";
import BasicLesson from "./components/Lessons/BasicLesson";
import AdvanceLesson from "./components/Lessons/AdvanceLesson";
import IntermediateLesson from "./components/Lessons/IntermediateLesson";
import Leaderboard from "./Pages/Leaderboard";
import BasicPractice from "./components/Practice/BasicPractice";
import AdvancePractice from "./components/Practice/AdvancePractice";
import IntermediatePractice from "./components/Practice/IntermediatePractice";
import BasicQuiz from "./components/Quiz/BasicQuiz";
import AdvanceQuiz from "./components/Quiz/AdvanceQuiz";
import IntermediateQuiz from "./components/Quiz/IntermediateQuiz";
import UserManagement from "./Pages/UserManagement";
import Login from "./components/SignUpLogin/Login";
import SignUp from "./components/SignUpLogin/SignUp";
import AdminHome from "./Pages/adminPages/AdminHome";
import AdminProfile from "./components/Profile/AdminProfile";
import UserProfile from "./components/Profile/UserProfile";

const Loading = () => {
  return <>Loading...</>;
};

function App() {
  return (
    // <LocaleContext.Provider value={{ locale, setLocale }}>
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Login />} />
          {/* routing sidebar */}
          <Route path="/UserHome" exact element={<Home />} />
          <Route path="/learnlesson" element={<LearnLesson />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          {/* Adim Access */}
          <Route path="/AdminHome" element={<AdminHome />} />
          <Route path="/admin" element={<AddQuestion />} />
          <Route path="/admin2" element={<UserManagement />} />

          {/* routing learnLesson */}
          <Route path="/basicLesson" element={<BasicLesson />} />
          <Route path="/advanceLesson" element={<AdvanceLesson />} />
          <Route path="/intermediateLesson" element={<IntermediateLesson />} />
          {/* routing Practice*/}
          <Route path="/basicPractice" element={<BasicPractice />} />
          <Route path="/advancePractice" element={<AdvancePractice />} />
          <Route
            path="/intermediatePractice"
            element={<IntermediatePractice />}
          />
          {/* routing Quiz*/}
          <Route path="/basicQuiz" element={<BasicQuiz />} />
          <Route path="/advanceQuiz" element={<AdvanceQuiz />} />
          <Route path="/intermediateQuiz" element={<IntermediateQuiz />} />

          {/* Routing Login  */}
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signUP" element={<SignUp />}></Route>

          {/* Routing to profiles of users */}
          <Route path="/adminprofile" element={<AdminProfile />}></Route>
          <Route path="/userprofile" element={<UserProfile />}></Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
    // </LocaleContext.Provider>
  );
}

export default App;
