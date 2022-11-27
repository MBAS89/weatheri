import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Pages Imported
import { Home } from './pages/Home';

//Components Imported
import { SideNav } from './components/SideNav';


function App() {
  return (
    <Router>
      <div className="App">
       <SideNav />
       <Routes>
            <Route path='/' element={<Home />}/>
       </Routes>
      </div>
    </Router>
  );
}

export default App;
