import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Todoinsert from './component/Todoinsert';
import Todorud from './component/Todorud';
import Test from './Test';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path='/c' component={Todoinsert} />
          <Route exact path='/rud' component={Todorud} />
          <Route exact path='/test' component={Test} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;