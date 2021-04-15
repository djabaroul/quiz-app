
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './Pages/Home/Home';
import Quiz from './Pages/Quiz/Quiz';
import Result from './Pages/Result/Result';


function App() {
  return (
    <BrowserRouter>
      <div className="App" style={{backgroundImage:'url(./ques1.png)'}}>
        <Header/>
        <Switch>
          <Route path='/' exact>
            <Home/>
          </Route>
          <Route path='/quiz' exact>
            <Quiz/>
          </Route>
          <Route path='/result' exact>
            <Result/>
          </Route>
        </Switch>
      </div>
      <Footer/>
    </BrowserRouter>
    
  );
}

export default App;
