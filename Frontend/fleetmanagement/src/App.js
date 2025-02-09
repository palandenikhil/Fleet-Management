import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from './pages/Landing';

function App() {
  return (
    <Router future={{ v7_relativeSplatPath: true }}>  {/* Enable the future flag */}
      { <Routes>
        { <Route path="/" element={<Landing />} /> }
      </Routes>
    }
    </Router>
   
  );
}

export default App;
