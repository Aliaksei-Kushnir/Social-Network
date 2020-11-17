import './App.css';
import Content from './components/content';
import Header from './components/Header';
import Navigation from './components/Navigation';
const App =() => {
  return (
    <div className='app-wrapper'>
      <Header/>
      <Navigation/>
      <Content/>

    </div>)
};

 

export default App;
