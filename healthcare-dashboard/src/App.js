import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import DashboardMainContent from './Components/Dashboard/DashboardMainContent';

const App=()=> {
  return (
    <div className='app'>
     <Header/>
    <div className="app-body">
      <Sidebar/>
      <DashboardMainContent/>
    </div>
    </div>
  );
}

export default App;
