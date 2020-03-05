import React from 'react'

import { FunctionalCounter, ClassCounter } from './VoteButton'
import HelloWorld from './HelloWorld'

const App = () => (
  <div>
    <FunctionalCounter />
    <ClassCounter />
    <HelloWorld name="Nihar" postfix="!!!" />
    <HelloWorld name="Cameron" postfix="!!! 🐥" />
  </div>
)

export default App
