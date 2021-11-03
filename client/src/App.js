import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Todoinsert from './component/Todoinsert';
import Todorud from './component/Todorud';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path='/c' component={Todoinsert} />
          <Route exact path='/rud' component={Todorud} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;