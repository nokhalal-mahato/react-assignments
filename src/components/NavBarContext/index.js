import {Component} from 'react';
import About from './Routes/About';
import Home from './Routes/Home';
import NotFound from './Routes/NotFound';
import {Switch,Route} from 'react-router-dom'
import NavbarContext from './Context/NavbarContext';

class NavBarContext extends Component {
  state = { isDarkMode: false };

  toggleDarkMode=()=>{
    this.setState(prevState=>({isDarkMode:!prevState.isDarkMode}));
  };

  render() {
    const {isDarkMode}=this.state;
    return (
      <NavbarContext.Provider value={{isDarkMode,toggleDarkMode:this.toggleDarkMode}}>
        <Switch>
          <Route exact path="/NavBarContext" component={Home} />
          <Route exact path="/NavBarContext/about" component={About} />
          <Route component={NotFound} />
        </Switch>
      </NavbarContext.Provider>
    );
  }
}
export default NavBarContext;