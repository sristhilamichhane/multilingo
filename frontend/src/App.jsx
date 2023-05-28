import "./App.css";
// import Sidebar from "./Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Practice from "./Pages/Practice";
import LearnLesson from "./Pages/LearnLesson";
import Quiz from "./Pages/Quiz";
import AddQuestion from "./Pages/AddQuestion";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/learnlesson" exact element={<LearnLesson />} />
        <Route path="/practice" exact element={<Practice />} />
        <Route path="/quiz" exact element={<Quiz />} />
        <Route path="/admin" exact element={<AddQuestion />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
