import React from 'react';
import BudgetTracker from './components/BudgetTracker';
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import About from './components/about/About';
import Navbar from './components/Navbar';
import NewsFeed from './components/news/NewsFeed';





// Components container
function App() {
    return (
        <div>
            <Navbar />
        <Routes>
            
            <Route path="/" element={<BudgetTracker />} />
            <Route path="/about" element={<About />} />
            <Route path="/news" element={<NewsFeed />} />
            
        
        </Routes>
        </div>
        
    )
}

export default App;