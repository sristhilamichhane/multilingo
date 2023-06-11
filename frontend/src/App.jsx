import "./App.css";
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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* routing sidebar */}
        <Route path="/" exact element={<Home />} />
        <Route path="/learnlesson" element={<LearnLesson />} />
        <Route path="/practice" element={<Practice />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/admin" element={<AddQuestion />} />

        {/* routing learnLesson */}
        <Route path="/basicLesson" element={<BasicLesson />} />
        <Route path="/advanceLesson" element={<AdvanceLesson />} />
        <Route path="/intermediateLesson" element={<IntermediateLesson />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
