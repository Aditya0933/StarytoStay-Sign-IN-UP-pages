import './App.css';
import SignUP from './components/SignUP';
import SignIN from './components/SignIN';
import Rescue from './components/Rescue';

function App() {
  return (
    <div className="App flex flex-col">
      <SignUP/>
      <SignIN/>
      <Rescue/>
    </div>
  );
}

export default App;
