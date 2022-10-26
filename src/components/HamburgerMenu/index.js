import {Component} from 'react';
import About from './Routes/About';
import Home from './Routes/Home';
import NotFound from './Routes/NotFound';
import {Switch,Route} from 'react-router-dom'

class HamburgerMenu extends Component{
    render(){
        return (
          <Switch>
            <Route exact path="/HamburgerMenu" component={Home} />
            <Route exact path="/HamburgerMenu/about" component={About} />
            <Route component={NotFound} />
          </Switch>
        );
    }
}
export default HamburgerMenu;