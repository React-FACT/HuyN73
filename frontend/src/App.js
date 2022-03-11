import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/login/Login';
import ListUser from './components/ListUser/ListUser';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/'>
                    <Login />
                </Route>

                <Route path='/list-user'>
                    <ListUser />
                </Route>
            </Switch>
        </Router>
    );
};

export default App;
