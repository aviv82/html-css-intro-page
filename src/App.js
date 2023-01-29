import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/home/Home";
import { About } from "./components/about/About";
import { Work } from "./components/work/Work";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
        </Routes>
      </div>
    </Router>
  );
}

/*
 <Router>
      <div className="main-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/companies" element={<CompanyHome />} />
          <Route path="/companies/:id" element={<CompanyDetail />} />
          <Route path="/badges" element={<AboutBadges />} />
          <Route path="/form" element={<Former />}></Route>
          <Route path="/confirm" element={<Congratulate />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/questionnaire" element={<FormStart />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </div>
    </Router>

<Link to="//github.com/Kuli-HYF" target="_blank">
            <GitHubIcon className="github-icon" fill="white" />
          </Link>
 */

export default App;
