import {
  BrowserRouter as Router ,Routes,Route
} from "react-router-dom"
import Login from "./components/login/Login";
import Hotel from "./hotel/Hotel";
import List from "./list/List";
import Home from "./pages/home/Home";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hotels" element={<List/>}/>
        <Route path="/hotels/:id" element={<Hotel/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </Router>
  );
}

export default App;
