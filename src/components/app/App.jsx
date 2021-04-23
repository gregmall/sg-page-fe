import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Home from '../Home/Home';
import styles from './App.scss'
import Header from '../Header/Header';
import SideNav from '../SideNav/SideNav';

export default function App() {
  return(
    <div className={styles.App}>
    <Router>
       <Header />
       <SideNav />
       <Home />
       
    </Router>
    </div>
  )
}
