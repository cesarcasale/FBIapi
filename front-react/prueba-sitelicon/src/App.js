import './App.scss';
import {Route, Routes, BrowserRouter as Router} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/about/AboutPage"
import Menu from "./components/menu/Menu";
import { useState } from "react";
import { AppContext } from "./shared/AppContext";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap'; 
import DetailsPage from './pages/DetailsPage/DetailsPage';


function App() {
  const [search, setSearch] = useState("")
  return (
    <Router>
    <AppContext.Provider value={{ search, setSearch}}>

    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col">
          <header className="App-header">
            <div className='menu-theme flex-column align-items-center'>
              <Menu/>
            </div>
            <div className='r-path'>
              <Routes>
                  <Route path="/" element={<HomePage/>}/>
                  <Route path="/details/:id" element={<DetailsPage/>} />
                  <Route path="/about" element={<AboutPage/>}/>
              </Routes>
            </div>
          </header>
          </div>
        </div>
      </div>
    </div>

    </AppContext.Provider>
    </Router>
  );
}

export default App;
