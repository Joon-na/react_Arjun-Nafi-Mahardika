import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SolusiAI from './components/SolusiAI';
import RecipeChat from './components/RecipeChat';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SolusiAI />} />
        <Route path="/recipe-chat" element={<RecipeChat />} />
      </Routes>
    </Router>
  );
}

export default App;
