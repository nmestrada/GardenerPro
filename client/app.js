/* I'm interested in using GQL on this project with PostgreSQL, 
heard about this library called Vulcan.js, uses React + GraphQL
some other things I would to implement: Higher Order Functions

-Would like to integrate CI/CD with travis?
-Would like to learn Typescript
-Would like to practice TDD with/ Mocha? or Jest? Cypress....
*/
import React from 'react'

import Navbar from './components/Navbar'
import Routes from './components/Routes'

//add grid css styles here
import './stylesheets/app.scss'

const App = () => {
  return (
    <div className="main-body">
      <Navbar />
      <Routes />
    </div>
  )
}

export default App