import './App.css';
import { useContext } from 'react';
import { ThemeContext } from './Context/ThemeContext';
import SecondSection from './component/SecondSection';
import FirstSection from './component/FirstSection';

function App() {
  const {theme,Togglethem}=useContext(ThemeContext)
  
  return (
  <div>
  <div style={{backgroundColor:theme==="light"?"white":"black",color:theme==="light"?"black":"white"}}>
  <SecondSection/>
  <FirstSection/>
  </div>
  <button onClick={Togglethem}>change</button>
  </div>
  );
}

export default App;