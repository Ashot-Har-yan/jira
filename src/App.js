import Header from './components/global/Header';
import Login from './pages/login';
import Register from './pages/register';
import './styles/global.css'

const App =()=> {
  return (
    <div id ="disContainer">
      <Header/>
      <Register/>
      <hr/>
      <Login/>
    </div>
  );
}

export default App;
