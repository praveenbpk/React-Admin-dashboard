import './App.css'
import Maindash from './components/maindash/maindash';
import RightSide from './components/RightSide/Rightside';
import Sidebar from './components/sidebar/sidebar.jsx'
function App() {
  return (
    <div className="App">
        <div className="AppGlass">
          <Sidebar/>
          <Maindash/>
          <RightSide/>

        </div>
    </div>
  );
}

export default App;
