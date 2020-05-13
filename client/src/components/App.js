// import React, { Component } from 'react'

// import { Switch, Route, Redirect } from 'react-router-dom'

// import 'bootstrap/dist/css/bootstrap.min.css'
// import './App.css'

// import Navigation from './ui/navbar/Navbar'
// import RestaurantList from './pages/restaurants-list/Restaurants-list'
// import CoasterDetails from './pages/coaster-details/CoasterDetails'
// import Signup from './pages/signup/Signup'
// import Login from './pages/login/Login'
// import Profile from './pages/profile/Profile'

// import AuthService from './../service/auth.service'

// class App extends Component {

//   constructor() {
//     super()
//     this.state = { loggedInUser: null }
//     this.authService = new AuthService()
//   }


//   setTheUser = userObj => this.setState({ loggedInUser: userObj }, () => console.log('El estado de App ha cambiado:', this.state))

//   fetchUser = () => {
//     if (this.state.loggedInUser === null) {
//       this.authService.isLoggedIn()
//         .then(response => this.setTheUser(response.data))
//         .catch(() => this.setTheUser(false))
//     }
//   }


//   render() {

//     this.fetchUser()

//     return (
//       <>
//       <RestaurantList />
//       {/* <Route path="/restaurants/list" exact render={() => <RestaurantList />} /> */}
//       {/* <Navigation setTheUser={this.setTheUser} loggedInUser={this.state.loggedInUser} /> */}

//         {/* <main>

//           <Switch>
//             <Route path="/restaurants/list" exact render={() => <RestaurantList loggedInUser={this.state.loggedInUser} />} />
//              <Route path="/coasters/:coasterId" render={props => <CoasterDetails {...props} />} />
//             <Route path="/signup" render={props => <Signup {...props} setTheUser={this.setTheUser} />} />
//             <Route path="/login" render={props => <Login {...props} setTheUser={this.setTheUser} />} />
//             <Route path="/profile" render={() => this.state.loggedInUser ? <Profile loggedInUser={this.state.loggedInUser} /> : <Redirect to="/" />} />
//           </Switch>

//         </main> */}
//       </>
//     )
//   }
// }

// export default App

// ------------ MIO -------------

import React, { Component} from 'react'
import { Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import RestaurantList from './pages/restaurants-list/RestaurantsList'
import RestaurantDetail from './pages/restaurant-details/RestaurantDetails'
import Navigation from './ui/navbar/Navbar'
import Home from './pages/home/Home'
//import Footer from './ui/footer/Footer'
//import Login from './pages/login/Login'


class App extends Component {

  constructor() {
    super()
    this.state = {
    }
  }

  render() {
    return (
      <>
      <Navigation />
      <main>
        <Switch>
          <Route path="/" exact render={() => <Home /> }></Route>
          <Route path="/restaurants" exact render={() => <RestaurantList /> } />
          <Route path="/restaurants/detail/:restaurantId" render={(props) => <RestaurantDetail {...props}/>} />
        </Switch>
      </main>
      {/* <footer>
        <Footer />
      </footer> */}
      </>
    )
  }

}

export default App