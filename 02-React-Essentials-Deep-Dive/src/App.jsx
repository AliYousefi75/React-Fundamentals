// import { useState } from "react"
// import CoreConcept from "./components/CoreConcept"
import Header from "./components/Header/Header"
// import TabButton from "./components/TabButton"
// import {CORE_CONCEPTS} from './data'
import { EXAMPLES } from "./data.js"
import { Component } from "react"
// import { Fragment } from "react"
import CoreConcepts from "./components/CoreConcepts.jsx"
import Examples from "./components/Examples.jsx"

function App() {

  

  
  
    return(
      <>
        <Header />
        <main>

          <CoreConcepts />

          <Examples />

        </main>
      </>
    )

  }

export default App
