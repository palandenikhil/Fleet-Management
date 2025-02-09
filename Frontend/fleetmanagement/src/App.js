import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from './pages/Landing';
import HubSelection from './pages/HubSelection';

function App() {
  return (
    <Router future={{ v7_relativeSplatPath: true }}>  {/* Enable the future flag */}
      { <Routes>
        { <Route path="/" element={<Landing />} /> }
        { <Route path="/HubSelection" element={<HubSelection/>} /> }
      </Routes>
    }
    </Router>
   
  );
}

export default App;
