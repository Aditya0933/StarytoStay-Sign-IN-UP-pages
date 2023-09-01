import './App.css';
import SignUP from './components/SignUP';
import SignIN from './components/SignIN';
import Rescue from './components/Rescue';
import ProfileCard from './components/ProfileCard'
function App() {
  return (
    <div className="App flex flex-col">
      <SignUP/>
      <SignIN/>
      <Rescue/>
      <ProfileCard/>
      <Rescue/>
    </div>
  );
}

export default App;
