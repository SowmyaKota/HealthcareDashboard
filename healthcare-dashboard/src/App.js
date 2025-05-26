import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';

function App() {
  return (
    <div className='layout'>
      <Sidebar/>
    
    <div className="App">
      <Header/>
    </div>
    </div>
  );
}

export default App;
