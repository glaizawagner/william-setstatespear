/* eslint-disable react/jsx-no-duplicate-props */
import React, { Component } from 'react';
// import { Route } from 'react-router-dom';
import { Route, Link  } from 'react-router-dom';
import PoemListPage from './PoemListPage';
import PoemPage from './PoemPage';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <nav>
          {/* <a href='/'>Poem List</a> */}
          <Link href='/'>Poem List</Link>
        </nav>
        <header>
          <h1>William Setstatespear</h1>
        </header>
        <main>
          {/* <PoemListPage /> */}
          <Route exact path='/' component ={PoemListPage}/>
          {/* For Poem Page, an anonymous component that logs its route match prop */}
          <Route path='/poem/:poemId'
          //   component={(props) => {
          //   console.log(props.match)
          //   return <div />
          // }} 
            component={PoemPage}
          />

        </main>
        <footer>
          <p>© WilliamSetstatespear, 2018. All Rights Reserved.</p>
        </footer>
      </div>
    );
  }
}

export default App;
