/* eslint-disable no-unused-vars */
import {useState} from 'react';
import './App.css';

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//React-Router
import {HashRouter as Router, Switch, Route, Link} from 'react-router-dom';

//React-Toastify
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

//FireBase
import firebase from 'firebase/app';
import 'firebase/auth';

//Components
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import PageNotFound from './pages/PageNotFound';
import { UserContext } from './Context/UserContext';
import Footer from './Layout/Footer';
import Header from './Layout/Header';

//firebase init
import firebaseConfig from './Config/firebaseConfig'
firebase.initializeApp(firebaseConfig);


const App = () => {

  const [user, setUser] = useState(null);

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <ToastContainer/>
        <UserContext.Provider value={{user, setUser}}>
          <Header/>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/SignIn' component={SignIn}/>
            <Route exact path='/SignUp' component={SignUp}/>
            <Route exact path='*' component={PageNotFound}/>
          </Switch>
          <Footer/>
        </UserContext.Provider>
    </Router>
  );
}

export default App;
