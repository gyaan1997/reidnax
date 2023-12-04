import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from './Pages/Home';
import Analytics from './Pages/Analytics';
import Error from './Pages/Error'
import SignUp from './Components/SignUp/SignUp';
function App() {
  return (

    <Routes>
      <Route path="/" element={<Home />} /> //home directory
      <Route path="/signup" element={<SignUp />} /> //home directory

      <Route path="/analytics" element={<Analytics />} /> 

      <Route path="/*" element={<Error />} /> 
    </Routes>

  );
}

export default App;
