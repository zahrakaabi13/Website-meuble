import './App.css';
import Menu from './component/Navbar'
import Landing from './component/landing'
import Content from './component/content'

function App() {
  return (
    <div className="App">
      <Menu/>
      <Landing/>
      <Content/>
    </div>
  );
}

export default App;
