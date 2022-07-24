import React from 'react';
import { GlobalStyle } from './GlobalStyle';
import Header from './components/index';
import Home from './components/Home';
import Movie from './components/Movie';

//routing
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'; 
import NotFound from './components/NotFound';
const App = () =>  (

   <Router>
     s <Header/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/:movieId' element={<Movie />}/>
        <Route path='/*' element={<NotFound/>}/>
      </Routes>
      <GlobalStyle />
    </Router>
  );


export default App;
