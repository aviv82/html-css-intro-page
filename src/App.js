import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/home/Home";
import { Video } from "./components/video/Video";
import { Media } from "./components/media/Media";
import { Web } from "./components/web/Web";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/media" element={<Media />} />
          <Route path="/video" element={<Video />} />
          <Route path="/web" element={<Web />} />
        </Routes>
      </div>
    </Router>
  );
}

/*
<Link to="//github.com/Kuli-HYF" target="_blank">
            <GitHubIcon className="github-icon" fill="white" />
          </Link>
 */

export default App;
