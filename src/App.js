import React from 'react';
import BudgetTracker from './components/BudgetTracker';
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
    return (
        <Router>
        <div>
            <Navbar />
            <BudgetTracker />
        </div>
        </Router>
    )
}

export default App;