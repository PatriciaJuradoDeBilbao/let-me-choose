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
//import RandomRestaurant from './pages/restaurants-list/RandomRestaurant'



class App extends Component {

  constructor() {
    super()
    this.state = { loggedInUser: null }
    this.authService = new AuthService()
  }


  setTheUser = userObj => this.setState({ loggedInUser: userObj })

  fetchUser = () => {
    if (this.state.loggedInUser === null) {
      this.authService.isLoggedIn()
        .then(response => this.setTheUser(response.data))
        .catch(() => this.setTheUser(false))
    }
  }


  render() {
    this.fetchUser()
    return (
      <>
      <Navigation setTheUser={this.setTheUser} loggedInUser={this.state.loggedInUser} />
      <main>
        <Switch>
          <Route path="/signup" render={props => <Signup {...props} setTheUser={this.setTheUser} />} />
          <Route path="/login" render={props => <Login {...props} setTheUser={this.setTheUser} />} />
          <Route path="/" exact render={() => <Home /> }></Route>
          <Route path="/restaurants" exact render={(props) => <RestaurantList { ...props} loggedInUser={this.state.loggedInUser}/> } />
          <Route path="/restaurants/detail/:restaurantId" render={(props) => <RestaurantDetail {...props} loggedInUser={this.state.loggedInUser} />} />
          <Route path="/profile" render={() => this.state.loggedInUser ? <Profile loggedInUser={this.state.loggedInUser} /> : <Redirect to="/" />} />
          <Route path="/restaurants/new" exact render={() => <RestaurantForm loggedInUser={this.state.loggedInUser} />} />
          {/* <Route path="/restaurants/choice/:restaurantId" render={(props) => <RandomRestaurant {...props}/>} /> */}
        </Switch>
      </main>

      </>
    )
  }

}

export default App