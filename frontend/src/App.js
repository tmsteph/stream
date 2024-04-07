// In src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import VideoPage from './pages/VideoPage';
import LoginPage from './pages/LoginPage';
import VideoList from './components/VideoList';
import CapturePage from './pages/CapturePage';
import NavigationBar from './components/NavigationBar'; // Make sure to create this component

function App() {
  return (
    <Router>
      <NavigationBar /> {/* Navigation Bar added */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/videos" element={<VideoList />} />
        <Route path="/video/:id" element={<VideoPage />} />
        <Route path="/record" element={<CapturePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
