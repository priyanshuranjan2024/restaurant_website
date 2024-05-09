
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";  // import the Toaster component for displaying notifications
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import Success from "./Pages/Success";
import "./App.css";




const App = () => {
  return <Router>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/success" element={<Success/>} />
      <Route path="*" element={<NotFound/>} /> 
      

    </Routes>
    <Toaster />
  </Router>

};

export default App;