import '../styles/App.scss';

//Import react-router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


//Components
import Feed from './Feed';
import PrivateMessage from './PrivateMessage';

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
          <Route path="/" exact component={Feed} />
          <Route path="/private-message" component={PrivateMessage} />
      </Switch>
    </div>

    </Router>
  );
}

export default App;
