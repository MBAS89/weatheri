import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react';
//Pages Imported
import { Home } from './pages/Home';

//Components Imported
import { SideNav } from './components/SideNav';

import getFormattedWeatherData from './services/weatherService';

function App() {
  const [ query, setQuery ] = useState({q: 'berlin'})
  const [ units, setUnits ] = useState('metric')
  const [ weather, setWeather ] = useState(null)

  useEffect(()=>{
    const fetchWeather = async () => {
      await getFormattedWeatherData({ ...query, units })
        .then(data => { setWeather(data) })
    }
    fetchWeather()
  },[query, units])

  return (
    <Router>
      <div className="App">
       <SideNav />
       <Routes>
            <Route path='/' element={<Home weather={weather}/>}/>
       </Routes>
      </div>
    </Router>
  );
}

export default App;
