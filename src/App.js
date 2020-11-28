
import About from "./components/About/About";
import Masthead from "./components/Masthead/Masthead";
import SignUp from "./components/Sign-up/SignUp";
import Login from "./components/Login/Login";

import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Masthead />
      <SignUp/>
      <Login/>
      <About />
    </div>
  );
}

export default App;
