import logo from './logo.svg';
import './App.css';
import MyHeader from './components/MyHeader';
import MyMain from './components/MyMain';
import MyFooter from './components/MyFooter';

function App() {
  return (
    <div className="App">
     <MyHeader />
     <MyMain />
     <MyFooter />
    </div>
  );
}

export default App;
