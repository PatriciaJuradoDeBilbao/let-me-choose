import React, { Component} from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import RestaurantList from './pages/restaurants-list/RestaurantsList'
import RestaurantDetail from './pages/restaurant-details/RestaurantDetails'
import Navigation from './ui/navbar/Navbar'
import Home from './pages/home/Home'
import Signup from './pages/signup/Signup'
import Login from './pages/login/Login'
import Profile from './pages/profile/Profile'
import AuthService from './../service/auth.service'
import RestaurantForm from './pages/Restaurant-form/RestaurantForm'


class App extends Component {

  constructor() {
    super()
    this.state = { loggedInUser: null }
    this.authService = new AuthService()
  }


  setTheUser = userObj => this.setState({ loggedInUser: userObj })


  fetchUser = () => {
      this.authService.isLoggedIn()
        .then(response => this.setTheUser(response.data))
        .catch(() => this.setTheUser(false))
    
  }

  
  componentDidMount(){
    this.state.loggedInUser === null && this.fetchUser()
  }


  render() {
    return (
      <>
      <Navigation setTheUser={this.setTheUser} loggedInUser={this.state.loggedInUser} />
      <main>
        <Switch>
          <Route path="/signup" render={props => <Signup {...props} setTheUser={this.setTheUser} />} />
          <Route path="/login" render={props => <Login {...props} setTheUser={this.setTheUser} />} />
          <Route path="/" exact render={() => <Home /> }></Route>
          <Route path="/restaurants" exact render={(props) => <RestaurantList updateUser={this.fetchUser} { ...props} loggedInUser={this.state.loggedInUser}/> } />
          <Route path="/restaurants/detail/:restaurantId" render={(props) => <RestaurantDetail updateUser={this.fetchUser} setTheUser={this.setTheUser} {...props} loggedInUser={this.state.loggedInUser} />} />
          <Route path="/profile" render={() => this.state.loggedInUser ? <Profile loggedInUser={this.state.loggedInUser}  /> : <Redirect to="/" />} />
          <Route path="/restaurants/new" exact render={() => <RestaurantForm  loggedInUser={this.state.loggedInUser} />} />
          
        </Switch>
      </main>

      </>
    )
  }

}

export default App