import "./App.css";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import LandingPage from "./pages/LandingPage";
import Sigin from "./pages/Sigin";
import SignUp from "./pages/SignUp";


function App() {
  return (
    <>
     <BrowserRouter>
     <Routes>
     <Route path="/"  element={<LandingPage/>}/>
      <Route path="/sigin" element={<Sigin/>}/>
      <Route path="/signup" element={<SignUp/>}/>
     </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
