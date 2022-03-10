import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/login/Login';
import Dashboard from './components/dashboard/Dashboard';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/'>
                    <Login />
                </Route>

                <Route path='/dashboard'>
                    <Dashboard />
                </Route>
            </Switch>
        </Router>
    );
};

export default App;
