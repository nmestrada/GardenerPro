/* I'm interested in using GQL on this project with PostgreSQL, 
heard about this library called Vulcan.js, uses React + GraphQL
some other things I would to implement: Higher Order Functions
*/
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './client/redux/store'
import Root from './client/components/Root'
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';


//This is were all the react into DOM happens
ReactDOM.render(
    <Provider store={store}>
      <Root />
    </Provider>,
    document.getElementById('app')
  )
